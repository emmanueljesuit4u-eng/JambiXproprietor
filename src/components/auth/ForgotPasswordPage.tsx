/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId, useEffect } from 'react';
import {
  Mail,
  ArrowLeft,
  AlertCircle,
  Loader2,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { Logo } from '../brand/Logo';

interface ForgotPasswordPageProps {
  onNavigateToLogin: () => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  onNavigateToLogin,
}) => {
  const formId = useId();

  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setTimeout(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const validateEmail = (value: string) => {
    const trimmed = value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmed) {
      return 'Email address is required';
    }
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    const err = validateEmail(email);
    setError(err);
    if (err) return;

    setIsSubmitting(true);
    const cleanEmail = email.trim();

    try {
      await sendPasswordResetEmail(auth, cleanEmail);
    } catch (firebaseErr: any) {
      console.info('Password reset dispatch note:', firebaseErr?.code || firebaseErr);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setResendCooldown(30);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0 || isSubmitting) return;
    setIsSubmitting(true);
    const cleanEmail = email.trim();
    try {
      await sendPasswordResetEmail(auth, cleanEmail);
    } catch (firebaseErr) {
      console.info('Password reset resend note:', firebaseErr);
    } finally {
      setIsSubmitting(false);
      setResendCooldown(45);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Brand Header */}
      <div className="text-center mb-6">
        <Logo size="md" showTagline={false} />
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Forgot your password?
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Enter your email address and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 transition-colors">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor={`${formId}-email`}
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id={`${formId}-email`}
                  type="email"
                  autoComplete="email"
                  placeholder="candidate@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched) {
                      setError(validateEmail(e.target.value));
                    }
                  }}
                  onBlur={() => {
                    setTouched(true);
                    setError(validateEmail(email));
                  }}
                  className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-800/80 border rounded-xl placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white transition-all focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 ${
                    touched && error
                      ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900'
                      : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-100 dark:focus:ring-emerald-900/40'
                  }`}
                />
              </div>
              {touched && error && (
                <p className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{error}</span>
                </p>
              )}
            </div>

            {/* Send Reset Link Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm rounded-xl shadow-md shadow-emerald-800/15 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Reset Link...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Reset Link</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-2 space-y-4 animate-in fade-in">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Check your inbox</h3>
              <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We&apos;ve sent a password reset link to{' '}
                <span className="font-semibold text-slate-900 dark:text-white">{email}</span>.
                The link expires in 15 minutes.
              </p>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-xl text-left text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <p className="font-medium text-slate-800 dark:text-slate-200">Can&apos;t find the email?</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Check your Spam or Promotions folder. If it hasn&apos;t arrived:
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendCooldown > 0 || isSubmitting}
                  className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
                >
                  {resendCooldown > 0
                    ? `Resend link in ${resendCooldown}s`
                    : 'Click here to resend link'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Back to Log In */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-center">
          <button
            type="button"
            onClick={onNavigateToLogin}
            className="inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors py-1 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Log In</span>
          </button>
        </div>
      </div>
    </div>
  );
};
