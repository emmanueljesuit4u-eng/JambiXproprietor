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

export interface ActiveSessionData {
  id: string;
  userId: string;
  userName: string;
  userEmail?: string;
  currentView: string;
  device: string;
  lastActive: number;
  startedAt: number;
  isOnline: boolean;
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
  email: string,
  profileData?: {
    fullName?: string;
    phoneNumber?: string;
    targetScore?: number;
    preferredInstitution?: string;
  }
): Promise<AccountActivationData | null> {
  if (!email) return null;
  const cleanEmail = email.toLowerCase().trim();
  const activationId = sanitizeActivationId(cleanEmail);

  try {
    const actRef = doc(db, 'accountActivations', activationId);
    const snap = await getDoc(actRef);

    if (profileData && profileData.fullName) {
      try {
        const userRef = doc(db, 'users', activationId);
        await setDoc(userRef, {
          id: activationId,
          email: cleanEmail,
          fullName: profileData.fullName,
          phoneNumber: profileData.phoneNumber || '',
          targetScore: profileData.targetScore || 320,
          preferredInstitution: profileData.preferredInstitution || 'University of Lagos (UNILAG)',
          registeredAt: Date.now(),
          isActivated: false,
          isEmailVerified: true,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }, { merge: true });
      } catch (err) {
        console.warn('User profile sync note:', err);
      }
    }

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
    const snap = await getDoc(actRef);
    const updateFields = {
      isActivated,
      activatedAt: isActivated ? Date.now() : 0,
      paymentReference: (isActivated ? paymentReference : 'DEACTIVATED-BY-ADMIN').slice(0, 100),
      opayAccount: 'ADMIN_MANUAL',
    };
    if (snap.exists()) {
      await updateDoc(actRef, updateFields);
    } else {
      await setDoc(actRef, {
        id: activationId,
        email: email.toLowerCase().trim().slice(0, 100),
        registeredAt: Date.now(),
        ...updateFields,
      });
    }

    // Keep basicActivationRequests in sync if a request exists for this email
    try {
      const reqRef = doc(db, 'basicActivationRequests', activationId);
      const reqSnap = await getDoc(reqRef);
      if (reqSnap.exists()) {
        const existingReq = reqSnap.data() as BasicActivationRequestData;
        await setDoc(reqRef, {
          id: activationId,
          studentName: (existingReq.studentName || 'Candidate').slice(0, 100),
          studentEmail: email.toLowerCase().trim().slice(0, 100),
          status: isActivated ? 'activated' : 'pending',
          submittedAt: existingReq.submittedAt || Date.now(),
          ...(existingReq.userId ? { userId: String(existingReq.userId).slice(0, 128) } : {}),
          ...(isActivated ? { activatedAt: Date.now() } : {}),
        });
      }
    } catch (syncErr) {
      console.warn('basicActivationRequests sync note:', syncErr);
    }
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
    const q = query(collection(db, 'testResults'), limit(1000));
    const snapshot = await getDocs(q);
    const tests = snapshot.docs.map((d) => d.data() as TestResultData);
    tests.sort((a, b) => {
      const aTime = (a.createdAt as any)?.toMillis ? (a.createdAt as any).toMillis() : (a.createdAt as any)?.seconds ? (a.createdAt as any).seconds * 1000 : (parseInt(a.id.replace(/\D/g, '')) || 0);
      const bTime = (b.createdAt as any)?.toMillis ? (b.createdAt as any).toMillis() : (b.createdAt as any)?.seconds ? (b.createdAt as any).seconds * 1000 : (parseInt(b.id.replace(/\D/g, '')) || 0);
      return bTime - aTime;
    });
    return tests;
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
    const q = query(collection(db, 'testResults'), limit(1000));
    return onSnapshot(
      q,
      (snapshot) => {
        const tests = snapshot.docs.map((d) => d.data() as TestResultData);
        tests.sort((a, b) => {
          const aTime = (a.createdAt as any)?.toMillis ? (a.createdAt as any).toMillis() : (a.createdAt as any)?.seconds ? (a.createdAt as any).seconds * 1000 : (parseInt(a.id.replace(/\D/g, '')) || 0);
          const bTime = (b.createdAt as any)?.toMillis ? (b.createdAt as any).toMillis() : (b.createdAt as any)?.seconds ? (b.createdAt as any).seconds * 1000 : (parseInt(b.id.replace(/\D/g, '')) || 0);
          return bTime - aTime;
        });
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
 * Real-time subscription to all student registered profiles
 */
export function subscribeToUsers(
  callback: (users: UserProfileData[]) => void
): () => void {
  try {
    const q = query(collection(db, 'users'), limit(500));
    return onSnapshot(
      q,
      (snapshot) => {
        const users = snapshot.docs.map((d) => d.data() as UserProfileData);
        callback(users);
      },
      (error) => {
        console.warn('subscribeToUsers listener note:', error);
      }
    );
  } catch (err) {
    console.warn('subscribeToUsers setup note:', err);
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

/**
 * 6. Live Active Presence Session Operations
 */

/**
 * Pushes or refreshes a live session heartbeat in /activeSessions/{sessionId}
 */
export async function updateSessionPresence(
  session: ActiveSessionData
): Promise<void> {
  const sessionId = session.id;
  try {
    const sessionRef = doc(db, 'activeSessions', sessionId);
    await setDoc(sessionRef, {
      ...session,
      lastActive: Date.now(),
      isOnline: true,
    }, { merge: true });
  } catch (error) {
    if (isOfflineError(error)) {
      return;
    }
    console.warn('updateSessionPresence sync note:', error);
  }
}

/**
 * Marks session as offline when candidate navigates away or logs out
 */
export async function endSessionPresence(sessionId: string): Promise<void> {
  if (!sessionId) return;
  try {
    const sessionRef = doc(db, 'activeSessions', sessionId);
    await updateDoc(sessionRef, {
      isOnline: false,
      lastActive: Date.now(),
    });
  } catch (err) {
    // Non-fatal if session already expired or offline
    console.warn('endSessionPresence note:', err);
  }
}

/**
 * Real-time listener for all currently active and logged in sessions
 * Inactive threshold: Active within last 3 minutes (180,000 ms) and isOnline === true
 */
export function subscribeToActiveSessions(
  callback: (sessions: ActiveSessionData[]) => void
): () => void {
  try {
    const q = query(
      collection(db, 'activeSessions'),
      where('isOnline', '==', true),
      limit(200)
    );
    return onSnapshot(
      q,
      (snapshot) => {
        const now = Date.now();
        const activeThreshold = 3 * 60 * 1000; // 3 minutes
        const sessions = snapshot.docs
          .map((d) => d.data() as ActiveSessionData)
          .filter((s) => s.isOnline && now - (s.lastActive || 0) <= activeThreshold);
        
        // Sort newest activity first
        sessions.sort((a, b) => (b.lastActive || 0) - (a.lastActive || 0));
        callback(sessions);
      },
      (error) => {
        console.warn('subscribeToActiveSessions listener note:', error);
      }
    );
  } catch (err) {
    console.warn('subscribeToActiveSessions setup note:', err);
    return () => {};
  }
}

/**
 * Fetches current active sessions snapshot
 */
export async function getActiveSessions(): Promise<ActiveSessionData[]> {
  try {
    const q = query(
      collection(db, 'activeSessions'),
      where('isOnline', '==', true),
      limit(200)
    );
    const snap = await getDocs(q);
    const now = Date.now();
    const activeThreshold = 3 * 60 * 1000;
    return snap.docs
      .map((d) => d.data() as ActiveSessionData)
      .filter((s) => s.isOnline && now - (s.lastActive || 0) <= activeThreshold)
      .sort((a, b) => (b.lastActive || 0) - (a.lastActive || 0));
  } catch (error) {
    console.warn('getActiveSessions note:', error);
    return [];
  }
}

// ==========================================
// 7. Basic Account Activation Requests
// ==========================================

export interface BasicActivationRequestData {
  id: string;
  studentName: string;
  studentEmail: string;
  userId?: string;
  status: 'pending' | 'activated';
  submittedAt: number;
  activatedAt?: number;
}

/**
 * Student submits their Name and Email from the Student Dashboard Basic tab
 */
export async function submitBasicActivationRequest(params: {
  studentName: string;
  studentEmail: string;
  userId?: string;
}): Promise<BasicActivationRequestData> {
  const cleanEmail = params.studentEmail.toLowerCase().trim().slice(0, 100);
  const cleanName = params.studentName.trim().slice(0, 100);
  const requestId = sanitizeActivationId(cleanEmail) || `basic_${Date.now()}`;
  const reqRef = doc(db, 'basicActivationRequests', requestId);

  let existingStatus: 'pending' | 'activated' = 'pending';
  let existingActivatedAt: number | undefined = undefined;
  try {
    const existingSnap = await getDoc(reqRef);
    if (existingSnap.exists()) {
      const existingData = existingSnap.data() as BasicActivationRequestData;
      if (existingData.status === 'activated') {
        existingStatus = 'activated';
        existingActivatedAt = existingData.activatedAt;
      }
    }
  } catch (err) {
    console.warn('submitBasicActivationRequest pre-check note:', err);
  }

  const payload: BasicActivationRequestData = {
    id: requestId,
    studentName: cleanName,
    studentEmail: cleanEmail,
    status: existingStatus,
    submittedAt: Date.now(),
    ...(params.userId ? { userId: String(params.userId).slice(0, 128) } : {}),
    ...(existingActivatedAt !== undefined ? { activatedAt: existingActivatedAt } : {}),
  };

  await setDoc(reqRef, payload);
  return payload;
}

/**
 * Admin real-time listener for all student requests sent from the Basic tab
 */
export function subscribeToBasicActivationRequests(
  callback: (requests: BasicActivationRequestData[]) => void
): () => void {
  try {
    const q = query(collection(db, 'basicActivationRequests'), limit(300));
    return onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((d) => d.data() as BasicActivationRequestData);
        list.sort((a, b) => (b.submittedAt || 0) - (a.submittedAt || 0));
        callback(list);
      },
      (error) => {
        if (!isOfflineError(error)) {
          console.warn('subscribeToBasicActivationRequests error:', error);
        }
      }
    );
  } catch (err) {
    console.warn('subscribeToBasicActivationRequests setup note:', err);
    return () => {};
  }
}

/**
 * Student real-time listener for their own Basic tab request status
 */
export function subscribeToStudentBasicRequest(
  email: string,
  callback: (request: BasicActivationRequestData | null) => void
): () => void {
  if (!email || !email.trim()) return () => {};
  const requestId = sanitizeActivationId(email);
  if (!requestId) return () => {};

  try {
    const reqRef = doc(db, 'basicActivationRequests', requestId);
    return onSnapshot(
      reqRef,
      (snap) => {
        if (snap.exists()) {
          callback(snap.data() as BasicActivationRequestData);
        } else {
          callback(null);
        }
      },
      (error) => {
        if (!isOfflineError(error)) {
          console.warn('subscribeToStudentBasicRequest error:', error);
        }
      }
    );
  } catch (err) {
    return () => {};
  }
}

/**
 * Admin action: clicks "ACTIVATE ACCOUNT" beside a student's name in the Basic Requests tab
 */
export async function activateBasicStudentRequest(
  request: BasicActivationRequestData,
  activate: boolean = true
): Promise<void> {
  const requestId = request.id || sanitizeActivationId(request.studentEmail);
  const reqRef = doc(db, 'basicActivationRequests', requestId);

  const updatedPayload: BasicActivationRequestData = {
    id: requestId,
    studentName: (request.studentName || 'Candidate').slice(0, 100),
    studentEmail: request.studentEmail.toLowerCase().trim().slice(0, 100),
    status: activate ? 'activated' : 'pending',
    submittedAt: request.submittedAt || Date.now(),
    ...(request.userId ? { userId: String(request.userId).slice(0, 128) } : {}),
    ...(activate ? { activatedAt: Date.now() } : {}),
  };

  await setDoc(reqRef, updatedPayload);
  await adminToggleActivation(
    updatedPayload.studentEmail,
    activate,
    activate ? 'BASIC-ACTIVATION-GRANT' : 'DEACTIVATED-BY-ADMIN'
  );
}
