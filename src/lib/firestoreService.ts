/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  increment,
  onSnapshot,
} from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from './firebase';

export interface UserProfileData {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  targetScore?: number;
  preferredInstitution?: string;
  registeredAt?: number;
  isActivated?: boolean;
  activatedAt?: string | number;
  paymentReference?: string;
  opayAccount?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface TestResultData {
  id: string;
  userId: string;
  studentName?: string;
  studentEmail?: string;
  testTitle: string;
  testType: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  createdAt?: unknown;
}

export interface FeedPostData {
  id: string;
  authorId: string;
  authorName: string;
  tag: string;
  title: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  createdAt?: unknown;
}

function isOfflineError(error: unknown): boolean {
  if (!error) return false;
  const str = String(error).toLowerCase();
  const code = (error as { code?: string })?.code;
  return (
    code === 'unavailable' ||
    str.includes('unavailable') ||
    str.includes('the client is offline') ||
    str.includes('failed-precondition')
  );
}

// 1. User Profile Operations
export async function saveUserProfile(profile: UserProfileData): Promise<void> {
  if (!auth.currentUser) {
    console.warn('Firestore saveUserProfile: student not authenticated with Firebase. Preserving locally.');
    return;
  }
  const targetId = auth.currentUser.uid;
  const path = `users/${targetId}`;
  try {
    const userRef = doc(db, 'users', targetId);
    const snap = await getDoc(userRef);

    // Clean undefined/null fields to prevent rule schema mismatch
    const cleaned: Record<string, any> = {};
    for (const [key, val] of Object.entries(profile)) {
      if (val !== undefined && val !== null) {
        cleaned[key] = val;
      }
    }

    if (snap.exists()) {
      delete cleaned.createdAt; // Prevent modifying immutable createdAt
      await updateDoc(userRef, {
        ...cleaned,
        id: targetId,
        updatedAt: serverTimestamp(),
      });
    } else {
      await setDoc(userRef, {
        ...cleaned,
        id: targetId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore saveUserProfile: cached locally while offline.');
      return;
    }
    try {
      handleFirestoreError(error, OperationType.WRITE, path);
    } catch (err) {
      console.warn('saveUserProfile non-fatal note:', err);
    }
  }
}

export async function getUserProfile(userId: string): Promise<UserProfileData | null> {
  if (!auth.currentUser) {
    return null;
  }
  const targetId = auth.currentUser.uid;
  const path = `users/${targetId}`;
  try {
    const userRef = doc(db, 'users', targetId);
    const snap = await getDoc(userRef);
    if (!snap.exists()) return null;
    return snap.data() as UserProfileData;
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore getUserProfile: offline mode active.');
      return null;
    }
    handleFirestoreError(error, OperationType.GET, path);
  }
}

// 2. Test Results Operations
export async function saveTestResult(
  result: Omit<TestResultData, 'createdAt'>
): Promise<void> {
  const userId = result.userId || auth.currentUser?.uid || 'candidate_' + Date.now().toString(36);
  const payload = {
    ...result,
    userId,
  };
  const path = `testResults/${payload.id}`;
  try {
    const testRef = doc(db, 'testResults', payload.id);
    const cleaned: Record<string, any> = {};
    for (const [key, val] of Object.entries(payload)) {
      if (val !== undefined && val !== null) {
        cleaned[key] = val;
      }
    }
    await setDoc(testRef, {
      ...cleaned,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore saveTestResult: cached locally while offline.');
      return;
    }
    try {
      handleFirestoreError(error, OperationType.WRITE, path);
    } catch (e) {
      console.warn('Non-fatal test save warning:', e);
    }
  }
}

export async function getUserTestResults(userId: string): Promise<TestResultData[]> {
  const targetId = userId || auth.currentUser?.uid;
  if (!targetId) return [];
  const path = 'testResults';
  try {
    const q = query(
      collection(db, 'testResults'),
      where('userId', '==', targetId),
      limit(50)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => docSnap.data() as TestResultData);
  } catch (error) {
    console.warn('getUserTestResults note:', error);
    return [];
  }
}

// 3. Feed Posts Operations
export async function createFeedPost(
  post: Omit<FeedPostData, 'createdAt' | 'likesCount' | 'commentsCount'>
): Promise<void> {
  if (!auth.currentUser) {
    console.warn('Firestore createFeedPost: student not authenticated with Firebase. Preserving locally.');
    return;
  }
  const payload = {
    ...post,
    authorId: auth.currentUser.uid,
  };
  const path = `posts/${payload.id}`;
  try {
    const postRef = doc(db, 'posts', payload.id);
    await setDoc(postRef, {
      ...payload,
      likesCount: 0,
      commentsCount: 0,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore createFeedPost: queued offline.');
      return;
    }
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export function subscribeToFeedPosts(
  onUpdate: (posts: FeedPostData[]) => void
): () => void {
  const path = 'posts';
  try {
    const q = query(collection(db, 'posts'), limit(25));
    return onSnapshot(
      q,
      (snapshot) => {
        const posts = snapshot.docs.map((d) => ({
          ...d.data(),
          id: d.id,
        })) as FeedPostData[];
        onUpdate(posts);
      },
      (error) => {
        if (isOfflineError(error)) {
          console.warn('Firestore subscribeToFeedPosts: offline mode.');
          return;
        }
        handleFirestoreError(error, OperationType.LIST, path);
      }
    );
  } catch (error) {
    if (isOfflineError(error)) {
      return () => {};
    }
    handleFirestoreError(error, OperationType.LIST, path);
  }
}

export async function likeFeedPost(postId: string): Promise<void> {
  const path = `posts/${postId}`;
  try {
    const postRef = doc(db, 'posts', postId);
    await updateDoc(postRef, {
      likesCount: increment(1),
    });
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore likeFeedPost: queued offline.');
      return;
    }
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

// 4. Cross-Device Account Activation & 1-Hour Countdown Operations
export interface AccountActivationData {
  id: string;
  email: string;
  registeredAt: number;
  isActivated: boolean;
  activatedAt?: number;
  paymentReference?: string;
  opayAccount?: string;
}

export function sanitizeActivationId(email: string): string {
  return email
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9_\-]/g, '_')
    .slice(0, 120);
}

/**
 * Loads or initializes the authoritative cross-device activation record for a student email.
 * If this is the student's first time registering on ANY device, sets registeredAt = Date.now().
 * If already registered on another device, returns the original registeredAt so countdown continues seamlessly!
 */
export async function getOrCreateAccountActivation(
  email: string
): Promise<AccountActivationData | null> {
  if (!email) return null;
  const cleanEmail = email.toLowerCase().trim();
  const activationId = sanitizeActivationId(cleanEmail);

  try {
    const actRef = doc(db, 'accountActivations', activationId);
    const snap = await getDoc(actRef);

    if (snap.exists()) {
      return snap.data() as AccountActivationData;
    }

    // New registration! Create authoritative cloud record
    const newRecord: AccountActivationData = {
      id: activationId,
      email: cleanEmail,
      registeredAt: Date.now(),
      isActivated: false,
    };

    await setDoc(actRef, newRecord);
    return newRecord;
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore getOrCreateAccountActivation: offline, operating with local state');
      return null;
    }
    console.warn('AccountActivation cloud sync note:', error);
    return null;
  }
}

/**
 * Updates activation status to activated across all devices once OPay payment is verified.
 */
export async function updateAccountActivation(
  email: string,
  updates: {
    isActivated: boolean;
    paymentReference: string;
    opayAccount: string;
    activatedAt: number;
  }
): Promise<void> {
  if (!email) return;
  const activationId = sanitizeActivationId(email);

  try {
    const actRef = doc(db, 'accountActivations', activationId);
    await updateDoc(actRef, {
      isActivated: updates.isActivated,
      paymentReference: updates.paymentReference,
      opayAccount: updates.opayAccount,
      activatedAt: updates.activatedAt,
    });
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('Firestore updateAccountActivation: offline, cached locally');
      return;
    }
    console.warn('updateAccountActivation error:', error);
  }
}

/**
 * Real-time listener for cross-device activation updates.
 * If a user completes payment on mobile, their desktop dashboard unlocks immediately!
 */
export function subscribeToAccountActivation(
  email: string,
  onUpdate: (data: AccountActivationData) => void
): () => void {
  if (!email) return () => {};
  const activationId = sanitizeActivationId(email);

  try {
    const actRef = doc(db, 'accountActivations', activationId);
    return onSnapshot(
      actRef,
      (snap) => {
        if (snap.exists()) {
          onUpdate(snap.data() as AccountActivationData);
        }
      },
      (error) => {
        if (!isOfflineError(error)) {
          console.warn('subscribeToAccountActivation error:', error);
        }
      }
    );
  } catch (err) {
    return () => {};
  }
}

// ==========================================
// 5. Exclusive Admin Operations
// ==========================================

export const ADMIN_EMAIL = 'cligragh3@gmail.com';
export const ALLOWED_ADMIN_EMAILS = ['cligragh3@gmail.com', 'emmanueljesuit4u@gmail.com'];

export function isAllowedAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return ALLOWED_ADMIN_EMAILS.includes(email.toLowerCase().trim());
}

/**
 * Ensures the administrator record exists in the /admins collection in Firestore
 */
export async function ensureAdminDocument(uid: string, email: string): Promise<void> {
  if (!uid || !isAllowedAdminEmail(email)) return;
  const path = `admins/${uid}`;
  try {
    const adminRef = doc(db, 'admins', uid);
    await setDoc(
      adminRef,
      {
        id: uid,
        email: email.toLowerCase(),
        role: 'super_admin',
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (err) {
    console.warn('ensureAdminDocument sync note:', err);
  }
}

/**
 * Fetches all registered student profiles for the Admin Dashboard
 */
export async function getAllUsers(): Promise<UserProfileData[]> {
  try {
    const q = query(collection(db, 'users'), limit(300));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => d.data() as UserProfileData);
  } catch (error) {
    console.warn('getAllUsers note:', error);
    return [];
  }
}

/**
 * Fetches all cross-device account activations for the Admin Dashboard
 */
export async function getAllAccountActivations(): Promise<AccountActivationData[]> {
  try {
    const q = query(collection(db, 'accountActivations'), limit(300));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => d.data() as AccountActivationData);
  } catch (error) {
    console.warn('getAllAccountActivations note:', error);
    return [];
  }
}

/**
 * Admin override to toggle activation status for any student
 */
export async function adminToggleActivation(
  email: string,
  isActivated: boolean,
  paymentReference: string = 'MANUAL-ADMIN-OVERRIDE'
): Promise<void> {
  const activationId = sanitizeActivationId(email);
  const path = `accountActivations/${activationId}`;
  try {
    const actRef = doc(db, 'accountActivations', activationId);
    await setDoc(
      actRef,
      {
        id: activationId,
        email: email.toLowerCase().trim(),
        isActivated,
        activatedAt: isActivated ? Date.now() : 0,
        paymentReference: isActivated ? paymentReference : 'DEACTIVATED-BY-ADMIN',
        opayAccount: 'ADMIN_MANUAL',
      },
      { merge: true }
    );
  } catch (error) {
    if (isOfflineError(error)) {
      console.warn('adminToggleActivation offline note');
      return;
    }
    try {
      handleFirestoreError(error, OperationType.WRITE, path);
    } catch (e) {
      console.warn('adminToggleActivation note:', e);
    }
  }
}

/**
 * Fetches all recent CBT test sessions across all students
 */
export async function getAllTestResults(): Promise<TestResultData[]> {
  try {
    const q = query(collection(db, 'testResults'), limit(300));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => d.data() as TestResultData);
  } catch (error) {
    console.warn('getAllTestResults note:', error);
    return [];
  }
}

/**
 * Real-time subscription to all student test results
 */
export function subscribeToTestResults(
  callback: (tests: TestResultData[]) => void
): () => void {
  try {
    const q = query(collection(db, 'testResults'), limit(300));
    return onSnapshot(
      q,
      (snapshot) => {
        const tests = snapshot.docs.map((d) => d.data() as TestResultData);
        callback(tests);
      },
      (error) => {
        console.warn('subscribeToTestResults listener note:', error);
      }
    );
  } catch (err) {
    console.warn('subscribeToTestResults setup note:', err);
    return () => {};
  }
}

/**
 * Real-time subscription to all student account registrations
 */
export function subscribeToAccountActivations(
  callback: (activations: AccountActivationData[]) => void
): () => void {
  try {
    const q = query(collection(db, 'accountActivations'), limit(300));
    return onSnapshot(
      q,
      (snapshot) => {
        const activations = snapshot.docs.map((d) => d.data() as AccountActivationData);
        activations.sort((a, b) => (b.registeredAt || 0) - (a.registeredAt || 0));
        callback(activations);
      },
      (error) => {
        console.warn('subscribeToAccountActivations listener note:', error);
      }
    );
  } catch (err) {
    console.warn('subscribeToAccountActivations setup note:', err);
    return () => {};
  }
}

/**
 * Admin can delete an inappropriate or spam community post
 */
export async function deleteFeedPost(postId: string): Promise<void> {
  const path = `posts/${postId}`;
  try {
    const postRef = doc(db, 'posts', postId);
    await deleteDoc(postRef);
  } catch (error) {
    if (isOfflineError(error)) {
      return;
    }
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * Admin can broadcast an official announcement post to all students
 */
export async function createAdminAnnouncement(title: string, content: string): Promise<void> {
  const postId = `admin_broadcast_${Date.now()}`;
  const path = `posts/${postId}`;
  try {
    const postRef = doc(db, 'posts', postId);
    await setDoc(postRef, {
      id: postId,
      authorId: auth.currentUser?.uid || 'super_admin_id',
      authorName: 'JambiX Executive Office (Admin)',
      tag: 'Official JAMB News',
      title,
      content,
      likesCount: 0,
      commentsCount: 0,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    if (isOfflineError(error)) {
      return;
    }
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}
