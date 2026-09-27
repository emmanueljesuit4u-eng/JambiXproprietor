/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const TRIAL_DURATION_MS = 60 * 60 * 1000; // Legacy reference
export const ACTIVATION_FEE_NAIRA = 0; // System is now 100% Free
export const OPAY_ACCOUNT_NAME = 'IKUE BARILEMELOO JESUIT';
export const OPAY_BANK_NAME = 'OPAY';
export const OPAY_ACCOUNT_NUMBER = '9131749289';

export interface ActivationRecord {
  userEmail: string;
  registeredAt: number; // epoch ms
  isActivated: boolean;
  activatedAt?: number;
  paymentReference?: string;
  opayPhone?: string;
  opayName?: string;
  amountPaid?: number;
}

const STORAGE_KEY_PREFIX = 'jambix_activation_';

export function getStorageKey(userEmail: string): string {
  const sanitized = (userEmail || 'anonymous').toLowerCase().trim();
  return `${STORAGE_KEY_PREFIX}${sanitized}`;
}

export function loadActivationRecord(userEmail: string): ActivationRecord {
  // System is 100% free for all students
  return {
    userEmail: userEmail || 'candidate@student.jambix.ng',
    registeredAt: Date.now(),
    isActivated: true, // Always activated & free
    amountPaid: 0,
  };
}

export function saveActivationRecord(record: ActivationRecord): void {
  if (typeof window === 'undefined') return;
  const key = getStorageKey(record.userEmail);
  try {
    localStorage.setItem(key, JSON.stringify({ ...record, isActivated: true }));
  } catch (err) {
    console.warn('Failed saving activation storage:', err);
  }
}

export function calculateRemainingSeconds(_registeredAt: number): number {
  return 0; // No countdown needed - system is completely free
}

export function isAccessRestricted(_record: ActivationRecord): boolean {
  return false; // Access is never restricted - 100% free
}

/**
 * Simulates real-time verification of OPay transfer/transaction to IKUE BARILEMELOO JESUIT
 */
export async function simulateOpayVerification(details: {
  opayPhone: string;
  opayName: string;
  userEmail: string;
  sessionOrRef?: string;
}): Promise<{ success: boolean; reference: string; message: string }> {
  // Simulate network handshake with OPay gateway
  await new Promise((res) => setTimeout(res, 2200));

  const cleanPhone = details.opayPhone.trim().replace(/\s+/g, '');
  if (cleanPhone.length < 10) {
    return {
      success: false,
      reference: '',
      message: 'Invalid OPay phone number. Please enter a valid 10 or 11-digit Nigerian OPay number.',
    };
  }

  if (!details.opayName.trim()) {
    return {
      success: false,
      reference: '',
      message: 'Please provide the account holder name on your OPay account.',
    };
  }

  // Generate authentic NIBSS / OPay reference format
  const reference = details.sessionOrRef?.trim() || `OPAY${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`;

  // Save successful activation
  const record = loadActivationRecord(details.userEmail);
  const updated: ActivationRecord = {
    ...record,
    isActivated: true,
    activatedAt: Date.now(),
    paymentReference: reference,
    opayPhone: cleanPhone,
    opayName: details.opayName.trim(),
    amountPaid: ACTIVATION_FEE_NAIRA,
  };
  saveActivationRecord(updated);

  return {
    success: true,
    reference,
    message: `Payment of ₦${ACTIVATION_FEE_NAIRA.toLocaleString()} to ${OPAY_ACCOUNT_NAME} (OPAY) verified successfully. Your account is activated!`,
  };
}
