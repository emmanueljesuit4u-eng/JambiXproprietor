/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useAuth } from './AuthContext';
import {
  ActivationRecord,
  loadActivationRecord,
  saveActivationRecord,
  calculateRemainingSeconds,
  isAccessRestricted,
  simulateOpayVerification,
  TRIAL_DURATION_MS,
  ACTIVATION_FEE_NAIRA,
  OPAY_ACCOUNT_NAME,
  OPAY_BANK_NAME,
  OPAY_ACCOUNT_NUMBER,
} from '../lib/activationStorage';
import {
  saveUserProfile,
  getOrCreateAccountActivation,
  updateAccountActivation,
  subscribeToAccountActivation,
} from '../lib/firestoreService';

interface ActivationContextType {
  isActivated: boolean;
  isRestricted: boolean;
  remainingTrialSeconds: number;
  registeredAt: number;
  trialDurationMs: number;
  isPaywallOpen: boolean;
  openPaywall: (restrictedFeatureTitle?: string) => void;
  closePaywall: () => void;
  checkFeatureAccess: (featureName?: string) => boolean;
  activateAccount: (details: {
    opayPhone: string;
    opayName: string;
    sessionOrRef?: string;
  }) => Promise<{ success: boolean; message: string; reference?: string }>;
  restrictedFeature: string | null;
  activationFee: number;
  opayAccountName: string;
  opayBankName: string;
  opayAccountNumber: string;
}

const ActivationContext = createContext<ActivationContextType | undefined>(undefined);

export const ActivationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, studentProfile, localStudent } = useAuth();
  const rawEmail = currentUser?.email || localStudent?.email || studentProfile?.email || '';
  const userEmail = (rawEmail && !rawEmail.includes('guest@'))
    ? rawEmail.toLowerCase().trim()
    : (currentUser?.uid ? `${currentUser.uid}@anonymous.jambix.ng` : 'candidate@student.jambix.ng');

  const [record, setRecord] = useState<ActivationRecord>(() => ({
    userEmail,
    registeredAt: Date.now(),
    isActivated: true, // Always free and activated
    amountPaid: 0,
  }));
  const [remainingTrialSeconds] = useState<number>(0);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [restrictedFeature, setRestrictedFeature] = useState<string | null>(null);

  // Authoritative Cross-Device Cloud Sync
  useEffect(() => {
    if (!userEmail) return;

    let isMounted = true;
    getOrCreateAccountActivation(userEmail)
      .then((cloudAct) => {
        if (!isMounted || !cloudAct) return;
        const merged: ActivationRecord = {
          userEmail,
          registeredAt: cloudAct.registeredAt || Date.now(),
          isActivated: true,
          activatedAt: cloudAct.activatedAt,
          paymentReference: cloudAct.paymentReference,
          opayPhone: cloudAct.opayAccount,
        };
        setRecord(merged);
        saveActivationRecord(merged);
      })
      .catch((err) => console.warn('Cloud activation fetch notice:', err));

    const unsub = subscribeToAccountActivation(userEmail, (cloudAct) => {
      if (!isMounted || !cloudAct) return;
      setRecord((prev) => {
        const updated: ActivationRecord = {
          ...prev,
          registeredAt: cloudAct.registeredAt || prev.registeredAt,
          isActivated: true,
        };
        saveActivationRecord(updated);
        return updated;
      });
    });

    return () => {
      isMounted = false;
      unsub();
    };
  }, [userEmail]);

  const isRestricted = false;

  const openPaywall = useCallback((_restrictedFeatureTitle?: string) => {
    // System is free now - paywall disabled
    setIsPaywallOpen(false);
  }, []);

  const closePaywall = useCallback(() => {
    setIsPaywallOpen(false);
  }, []);

  /**
   * Guard function: Always allows access because the system is 100% free!
   */
  const checkFeatureAccess = useCallback(
    (_featureName?: string): boolean => {
      return true; // Unconditionally granted
    },
    []
  );

  const activateAccount = async (details: {
    opayPhone: string;
    opayName: string;
    sessionOrRef?: string;
  }): Promise<{ success: boolean; message: string; reference?: string }> => {
    return {
      success: true,
      message: 'System is 100% free! All features are already unlocked.',
      reference: 'FREE_ACCESS',
    };
  };

  return (
    <ActivationContext.Provider
      value={{
        isActivated: record.isActivated,
        isRestricted,
        remainingTrialSeconds,
        registeredAt: record.registeredAt,
        trialDurationMs: TRIAL_DURATION_MS,
        isPaywallOpen,
        openPaywall,
        closePaywall,
        checkFeatureAccess,
        activateAccount,
        restrictedFeature,
        activationFee: ACTIVATION_FEE_NAIRA,
        opayAccountName: OPAY_ACCOUNT_NAME,
        opayBankName: OPAY_BANK_NAME,
        opayAccountNumber: OPAY_ACCOUNT_NUMBER,
      }}
    >
      {children}
    </ActivationContext.Provider>
  );
};

export const useActivation = () => {
  const context = useContext(ActivationContext);
  if (!context) {
    throw new Error('useActivation must be used within an ActivationProvider');
  }
  return context;
};
