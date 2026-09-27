/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Logo } from '../brand/Logo';
import {
  verifyEmailCode,
  sendEmailVerificationCode,
} from '../../lib/emailVerificationService';

interface VerifyEmailPageProps {
  email: string;
  onVerificationSuccess: (verifiedEmail: string) => void;
  onNavigateToLogin: (prefilledEmail?: string) => void;
  onNavigateToSignUp: () => void;
}

export const VerifyEmailPage: React.FC<VerifyEmailPageProps> = ({
  email,
  onVerificationSuccess,
  onNavigateToLogin,
  onNavigateToSignUp,
}) => {
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [cooldownSeconds, setCooldownSeconds] = useState(60);

  // Cooldown countdown
  useEffect(() => {
    if (cooldownSeconds <= 0) return;
    const timer = setInterval(() => {
      setCooldownSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldownSeconds]);

  // Focus first input on load
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleDigitChange = (index: number, val: string) => {
    // Only accept numeric digit
    const cleaned = val.replace(/\D/g, '');
    if (!cleaned) {
      const next = [...digits];
      next[index] = '';
      setDigits(next);
      return;
    }

    // If pasted multiple digits
    if (cleaned.length > 1) {
      const chars = cleaned.slice(0, 6).split('');
      const next = [...digits];
      chars.forEach((c, i) => {
        if (i < 6) next[i] = c;
      });
      setDigits(next);
      const nextFocus = Math.min(chars.length, 5);
      inputRefs.current[nextFocus]?.focus();

      if (chars.length >= 6) {
        submitVerification(next.join(''));
      }
      return;
    }

    const next = [...digits];
    next[index] = cleaned;
    setDigits(next);

    // Auto advance focus
    if (index < 5 && cleaned) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto submit if all 6 filled
    if (index === 5 && cleaned) {
      const fullCode = next.join('');
      if (fullCode.length === 6) {
        submitVerification(fullCode);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;

    const next = [...digits];
    for (let i = 0; i < 6; i++) {
      next[i] = pasted[i] || '';
    }
    setDigits(next);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();

    if (pasted.length === 6) {
      submitVerification(pasted);
    }
  };

  const submitVerification = async (codeToSubmit: string) => {
    if (codeToSubmit.length < 6) {
      setErrorMessage('Please enter all 6 digits of your verification code.');
      return;
    }

    setIsVerifying(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const res = await verifyEmailCode(email, codeToSubmit);
    setIsVerifying(false);

    if (res.success) {
      setSuccessMessage(res.message);
      setTimeout(() => {
        onVerificationSuccess(email);
      }, 1200);
    } else {
      setErrorMessage(res.message);
    }
  };

  const handleResend = async () => {
    if (cooldownSeconds > 0 || isResending) return;
    setIsResending(true);
    setErrorMessage(null);

    const res = await sendEmailVerificationCode(email);
    setIsResending(false);
    setCooldownSeconds(60);
    setSuccessMessage(res.message);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Brand Header */}
      <div className="text-center mb-6">
        <Logo size="md" showTagline={false} />
        <div className="mt-4 flex items-center justify-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Email Verification</span>
          </span>
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Verify your email address
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          A 6-digit confirmation code was sent strictly to your email:
        </p>
        <p className="text-sm font-black text-emerald-700 dark:text-emerald-400 font-mono mt-0.5">
          {email || 'your-email@example.com'}
        </p>
        <p className="mt-1 text-[11px] text-slate-400">
          Please open your email inbox (or spam folder) and enter the 6-digit code below.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xl space-y-5">
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-800 dark:text-rose-200 flex items-start gap-2 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 text-xs text-emerald-800 dark:text-emerald-200 flex items-start gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* 6 Digit Input Group */}
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block text-center mb-3">
            Enter 6-Digit Confirmation Code
          </label>
          <div className="flex items-center justify-between gap-1.5 sm:gap-2" onPaste={handlePaste}>
            {digits.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleDigitChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                disabled={isVerifying}
                className="w-11 h-13 sm:w-12 sm:h-14 text-center font-mono text-xl font-black bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-hidden text-slate-900 dark:text-white transition-all shadow-xs"
              />
            ))}
          </div>
        </div>

        {/* Submit Verification Button */}
        <button
          type="button"
          onClick={() => submitVerification(digits.join(''))}
          disabled={isVerifying || digits.join('').length < 6}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isVerifying ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying Code...</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-4 h-4" />
              <span>Verify Email &amp; Unlock Login</span>
            </>
          )}
        </button>

        {/* Resend Code Section */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400">Didn&apos;t receive the code?</span>
          <button
            type="button"
            onClick={handleResend}
            disabled={cooldownSeconds > 0 || isResending}
            className={`font-bold transition-colors cursor-pointer flex items-center gap-1 ${
              cooldownSeconds > 0 || isResending
                ? 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                : 'text-emerald-700 dark:text-emerald-400 hover:underline'
            }`}
          >
            <RefreshCw className={`w-3 h-3 ${isResending ? 'animate-spin' : ''}`} />
            <span>
              {cooldownSeconds > 0 ? `Resend code in ${cooldownSeconds}s` : 'Resend Code'}
            </span>
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <button
            type="button"
            onClick={() => onNavigateToLogin(email)}
            className="hover:text-emerald-600 transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Log In</span>
          </button>
          <button
            type="button"
            onClick={onNavigateToSignUp}
            className="hover:text-emerald-600 transition-colors cursor-pointer font-medium"
          >
            Change Email
          </button>
        </div>
      </div>
    </div>
  );
};
