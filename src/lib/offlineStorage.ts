/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { saveTestResult, createFeedPost, likeFeedPost, TestResultData, FeedPostData } from './firestoreService';
import { auth } from './firebase';
import type { VerifiedQuestion } from '../data/verifiedTextbooks';

export interface OfflineTestResult {
  id: string;
  userId?: string;
  testTitle: string;
  testType: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  subjects?: string[];
  createdAt: string;
  syncedToCloud: boolean;
  jambScore?: number;
  totalRawCorrect?: number;
  questions?: VerifiedQuestion[];
  selectedAnswers?: Record<number, string>;
}

export interface OfflinePostItem {
  id: string;
  authorId?: string;
  authorName: string;
  tag: string;
  title: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
  syncedToCloud: boolean;
}

export interface SyncQueueItem {
  id: string;
  action: 'SAVE_TEST' | 'CREATE_POST' | 'LIKE_POST';
  payload: any;
  timestamp: number;
  retryCount: number;
}

const STORAGE_KEYS = {
  TESTS: 'jambix_offline_tests_v1',
  POSTS: 'jambix_offline_posts_v1',
  SYNC_QUEUE: 'jambix_sync_queue_v1',
  SIMULATED_OFFLINE: 'jambix_simulated_offline',
  LAST_SYNC: 'jambix_last_sync_time',
};

// Safe localStorage helpers
function getStoredJson<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch (err) {
    console.warn(`Error reading ${key} from storage:`, err);
    return defaultValue;
  }
}

function setStoredJson<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Error writing ${key} to storage:`, err);
  }
}

// 1. Local Offline Test Storage
export function saveLocalTestResult(
  test: Omit<OfflineTestResult, 'createdAt' | 'syncedToCloud'> & { syncedToCloud?: boolean }
): OfflineTestResult {
  const allTests = getStoredJson<OfflineTestResult[]>(STORAGE_KEYS.TESTS, []);
  
  const newTest: OfflineTestResult = {
    ...test,
    createdAt: new Date().toISOString(),
    syncedToCloud: !!test.syncedToCloud,
  };

  // Prepend new test
  const updated = [newTest, ...allTests.filter((t) => t.id !== test.id)];
  setStoredJson(STORAGE_KEYS.TESTS, updated);

  // If not synced, queue it for cloud sync
  if (!newTest.syncedToCloud) {
    enqueueSyncItem({
      action: 'SAVE_TEST',
      payload: {
        id: newTest.id,
        userId: newTest.userId || auth.currentUser?.uid || 'offline_candidate',
        testTitle: newTest.testTitle,
        testType: newTest.testType,
        score: newTest.score,
        totalQuestions: newTest.totalQuestions,
        percentage: newTest.percentage,
        timeSpentSeconds: newTest.timeSpentSeconds,
      },
    });
  }

  return newTest;
}

export function getLocalTestResults(userId?: string): OfflineTestResult[] {
  const tests = getStoredJson<OfflineTestResult[]>(STORAGE_KEYS.TESTS, []);
  if (!userId) return tests;
  return tests.filter((t) => !t.userId || t.userId === userId || t.userId === 'offline_candidate');
}

// 2. Local Offline Posts Storage
export function saveLocalPost(
  post: Omit<OfflinePostItem, 'createdAt' | 'syncedToCloud'> & { syncedToCloud?: boolean }
): OfflinePostItem {
  const allPosts = getStoredJson<OfflinePostItem[]>(STORAGE_KEYS.POSTS, []);
  
  const newPost: OfflinePostItem = {
    ...post,
    createdAt: new Date().toISOString(),
    syncedToCloud: !!post.syncedToCloud,
  };

  const updated = [newPost, ...allPosts.filter((p) => p.id !== post.id)];
  setStoredJson(STORAGE_KEYS.POSTS, updated);

  if (!newPost.syncedToCloud) {
    enqueueSyncItem({
      action: 'CREATE_POST',
      payload: {
        id: newPost.id,
        authorId: newPost.authorId || auth.currentUser?.uid || 'offline_candidate',
        authorName: newPost.authorName,
        tag: newPost.tag,
        title: newPost.title,
        content: newPost.content,
      },
    });
  }

  return newPost;
}

export function getLocalPosts(): OfflinePostItem[] {
  return getStoredJson<OfflinePostItem[]>(STORAGE_KEYS.POSTS, []);
}

// 3. Sync Queue Management
export function getSyncQueue(): SyncQueueItem[] {
  return getStoredJson<SyncQueueItem[]>(STORAGE_KEYS.SYNC_QUEUE, []);
}

export function enqueueSyncItem(item: { action: SyncQueueItem['action']; payload: any }): void {
  const queue = getSyncQueue();
  const newItem: SyncQueueItem = {
    id: `queue_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    action: item.action,
    payload: item.payload,
    timestamp: Date.now(),
    retryCount: 0,
  };
  setStoredJson(STORAGE_KEYS.SYNC_QUEUE, [...queue, newItem]);
}

export function removeSyncItem(id: string): void {
  const queue = getSyncQueue();
  setStoredJson(
    STORAGE_KEYS.SYNC_QUEUE,
    queue.filter((q) => q.id !== id)
  );
}

// Mark a local test as synced
export function markLocalTestSynced(testId: string): void {
  const allTests = getStoredJson<OfflineTestResult[]>(STORAGE_KEYS.TESTS, []);
  const updated = allTests.map((t) => (t.id === testId ? { ...t, syncedToCloud: true } : t));
  setStoredJson(STORAGE_KEYS.TESTS, updated);
}

// Mark a local post as synced
export function markLocalPostSynced(postId: string): void {
  const allPosts = getStoredJson<OfflinePostItem[]>(STORAGE_KEYS.POSTS, []);
  const updated = allPosts.map((p) => (p.id === postId ? { ...p, syncedToCloud: true } : p));
  setStoredJson(STORAGE_KEYS.POSTS, updated);
}

// 4. Flush and Sync with Firestore
export async function flushSyncQueue(): Promise<{ syncedCount: number; errorsCount: number }> {
  // Firestore security rules enforce strict authentication (request.auth != null).
  // If there is no authenticated user currently active, keep items safely stored locally
  // and defer syncing until a session is authenticated.
  if (!auth.currentUser) {
    return { syncedCount: 0, errorsCount: 0 };
  }

  const queue = getSyncQueue();
  if (queue.length === 0) return { syncedCount: 0, errorsCount: 0 };

  let syncedCount = 0;
  let errorsCount = 0;

  for (const item of queue) {
    // Prune stale queue items that exceeded maximum retries to avoid eternal loops
    if (item.retryCount >= 5) {
      console.warn(`Sync queue item ${item.id} exceeded maximum retries. Retaining locally and removing from sync queue.`);
      removeSyncItem(item.id);
      continue;
    }

    try {
      if (item.action === 'SAVE_TEST') {
        const payload = item.payload;
        // Strictly attach the authenticated user UID for security rules verification
        payload.userId = auth.currentUser.uid;
        await saveTestResult(payload as Omit<TestResultData, 'createdAt'>);
        markLocalTestSynced(payload.id);
        removeSyncItem(item.id);
        syncedCount++;
      } else if (item.action === 'CREATE_POST') {
        const payload = item.payload;
        payload.authorId = auth.currentUser.uid;
        await createFeedPost(payload);
        markLocalPostSynced(payload.id);
        removeSyncItem(item.id);
        syncedCount++;
      } else if (item.action === 'LIKE_POST') {
        await likeFeedPost(item.payload.postId);
        removeSyncItem(item.id);
        syncedCount++;
      }
    } catch (err) {
      console.warn(`Failed to sync queue item ${item.id}:`, err);
      errorsCount++;
      // Increment retry count
      const updatedQueue = getSyncQueue().map((q) =>
        q.id === item.id ? { ...q, retryCount: q.retryCount + 1 } : q
      );
      setStoredJson(STORAGE_KEYS.SYNC_QUEUE, updatedQueue);
    }
  }

  if (syncedCount > 0) {
    setStoredJson(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
  }

  return { syncedCount, errorsCount };
}

// 5. Simulated Offline setting (for student to test or enable offline drill)
export function getSimulatedOffline(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEYS.SIMULATED_OFFLINE) === 'true';
}

export function setSimulatedOffline(val: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.SIMULATED_OFFLINE, val ? 'true' : 'false');
}

export function getLastSyncTime(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.LAST_SYNC);
}
