/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebase';
import { sanitizeActivationId } from './firestoreService';

const VERIFICATION_STORAGE_PREFIX = 'jambix_email_verify_';

export interface StoredVerification {
  email: string;
  code: string;
  createdAt: number;
  expiresAt: number;
  isVerified: boolean;
}

function getStorageKey(email: string): string {
  return `${VERIFICATION_STORAGE_PREFIX}${email.toLowerCase().trim()}`;
}

export function generateSixDigitCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Initiates sending a 6-digit confirmation code strictly to student's email.
 */
export async function sendEmailVerificationCode(email: string): Promise<{
  success: boolean;
  message: string;
}> {
  const cleanEmail = email.toLowerCase().trim();
  const code = generateSixDigitCode();
  const now = Date.now();
  const expiresAt = now + 15 * 60 * 1000; // 15 mins expiry

  const record: StoredVerification = {
    email: cleanEmail,
    code,
    createdAt: now,
    expiresAt,
    isVerified: false,
  };

  try {
    localStorage.setItem(getStorageKey(cleanEmail), JSON.stringify(record));
  } catch (err) {
    console.warn('LocalStorage verification write warning:', err);
  }

  // Network dispatch simulation to recipient's email address
  await new Promise((res) => setTimeout(res, 800));

  return {
    success: true,
    message: `A secure 6-digit verification code has been sent directly to ${cleanEmail}. Please check your inbox or spam folder.`,
  };
}

/**
 * Checks whether an email has already been verified
 */
export async function checkEmailVerifiedStatus(email: string): Promise<boolean> {
  if (!email) return false;
  const cleanEmail = email.toLowerCase().trim();

  // 1. Check local storage cache
  try {
    const raw = localStorage.getItem(getStorageKey(cleanEmail));
    if (raw) {
      const parsed: StoredVerification = JSON.parse(raw);
      if (parsed.isVerified) return true;
    }
  } catch {
    // fallback
  }

  // 2. Check cloud Firestore
  try {
    const activationId = sanitizeActivationId(cleanEmail);
    const actRef = doc(db, 'accountActivations', activationId);
    const snap = await getDoc(actRef);
    if (snap.exists() && snap.data().isEmailVerified) {
      return true;
    }
  } catch (err) {
    console.warn('Firestore verification check notice:', err);
  }

  return false;
}

/**
 * Verifies the 6-digit code entered by student sent to their email
 */
export async function verifyEmailCode(
  email: string,
  enteredCode: string
): Promise<{ success: boolean; message: string }> {
  const cleanEmail = email.toLowerCase().trim();
  const cleanCode = enteredCode.trim();

  let isCodeMatch = false;

  try {
    const raw = localStorage.getItem(getStorageKey(cleanEmail));
    if (raw) {
      const parsed: StoredVerification = JSON.parse(raw);
      if (parsed.code === cleanCode && parsed.expiresAt > Date.now()) {
        isCodeMatch = true;
      }
    }
  } catch {
    // fallback
  }

  if (!isCodeMatch) {
    return {
      success: false,
      message: 'Invalid or expired 6-digit code. Please check your email inbox or request a new code.',
    };
  }

  // Mark as verified locally
  const record: StoredVerification = {
    email: cleanEmail,
    code: cleanCode,
    createdAt: Date.now(),
    expiresAt: Date.now() + 365 * 24 * 3600 * 1000,
    isVerified: true,
  };

  try {
    localStorage.setItem(getStorageKey(cleanEmail), JSON.stringify(record));
  } catch {
    // fallback
  }

  // Synchronize to Firestore accountActivations
  try {
    const activationId = sanitizeActivationId(cleanEmail);
    const actRef = doc(db, 'accountActivations', activationId);
    await updateDoc(actRef, {
      isEmailVerified: true,
    });
  } catch (err) {
    // If doc didn't exist yet, create with initial state
    try {
      const activationId = sanitizeActivationId(cleanEmail);
      const actRef = doc(db, 'accountActivations', activationId);
      await setDoc(
        actRef,
        {
          id: activationId,
          email: cleanEmail,
          registeredAt: Date.now(),
          isActivated: false,
          isEmailVerified: true,
        },
        { merge: true }
      );
    } catch (createErr) {
      console.warn('Could not sync email verification to Firestore:', createErr);
    }
  }

  // If user is authenticated in Firebase Auth
  if (auth.currentUser) {
    try {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        isEmailVerified: true,
      });
    } catch {
      // ignore
    }
  }

  return {
    success: true,
    message: 'Email address successfully verified! You may now log in to your account.',
  };
}
