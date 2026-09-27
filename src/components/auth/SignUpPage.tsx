/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useId } from 'react';
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Check,
  X,
  AlertCircle,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { Logo } from '../brand/Logo';
import { saveActivationRecord } from '../../lib/activationStorage';
import { getOrCreateAccountActivation } from '../../lib/firestoreService';

interface SignUpPageProps {
  onNavigateToLogin: () => void;
  onOpenTerms: (tab: 'terms' | 'privacy') => void;
  onSignUpSuccess: (user: { name: string; email: string }) => void;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({
  onNavigateToLogin,
  onOpenTerms,
  onSignUpSuccess,
}) => {
  const formId = useId();

  // Form values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Touched states for inline error display
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);

  // Password strength calculation
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password) || /[A-Z]/.test(password);

  const strengthScore = [hasMinLength, hasNumber, hasLetter, hasSpecial].filter(Boolean).length;

  const getStrengthLabel = () => {
    if (!password) return { text: 'Empty', color: 'text-slate-400', barColor: 'bg-slate-200', count: 0 };
    if (strengthScore <= 1) return { text: 'Weak', color: 'text-rose-600', barColor: 'bg-rose-500', count: 1 };
    if (strengthScore === 2) return { text: 'Fair', color: 'text-amber-600', barColor: 'bg-amber-500', count: 2 };
    if (strengthScore === 3) return { text: 'Good', color: 'text-blue-600', barColor: 'bg-blue-500', count: 3 };
    return { text: 'Strong', color: 'text-emerald-600', barColor: 'bg-emerald-500', count: 4 };
  };

  const strength = getStrengthLabel();

  // Real-time password confirmation comparison
  const isConfirming = confirmPassword.length > 0;
  const passwordsMatch = password.length > 0 && confirmPassword === password;

  // Validation function
  const validateField = (field: string, value: string) => {
    let error = '';

    if (field === 'fullName') {
      const trimmed = value.trim();
      if (!trimmed) {
        error = 'Full name is required';
      } else if (trimmed.length < 3) {
        error = 'Full name must be at least 3 characters';
      } else if (!trimmed.includes(' ')) {
        error = 'Please enter both your first and last name';
      }
    }

    if (field === 'email') {
      const trimmed = value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!trimmed) {
        error = 'Email address is required';
      } else if (!emailRegex.test(trimmed)) {
        error = 'Enter a valid email address (e.g., student@example.com)';
      }
    }

    if (field === 'phoneNumber') {
      const trimmed = value.replace(/\s+/g, '');
      const phoneRegex = /^(\+?234|0)[789][01]\d{8}$/;
      if (!trimmed) {
        error = 'Phone number is required';
      } else if (!phoneRegex.test(trimmed)) {
        error = 'Enter a valid Nigerian phone number (e.g. 08012345678 or +234...)';
      }
    }

    if (field === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 8) {
        error = 'Password must be at least 8 characters';
      } else if (!/\d/.test(value)) {
        error = 'Include at least one number';
      }
    }

    if (field === 'confirmPassword') {
      if (!value) {
        error = 'Please confirm your password';
      } else if (value !== password) {
        error = 'Passwords do not match';
      }
    }

    return error;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let val = '';
    if (field === 'fullName') val = fullName;
    if (field === 'email') val = email;
    if (field === 'phoneNumber') val = phoneNumber;
    if (field === 'password') val = password;
    if (field === 'confirmPassword') val = confirmPassword;

    const error = validateField(field, val);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      email: true,
      phoneNumber: true,
      password: true,
      confirmPassword: true,
    });

    const newErrors: FormErrors = {
      fullName: validateField('fullName', fullName),
      email: validateField('email', email),
      phoneNumber: validateField('phoneNumber', phoneNumber),
      password: validateField('password', password),
      confirmPassword: validateField('confirmPassword', confirmPassword),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;

    setIsSubmitting(true);
    setSubmissionFeedback(null);

    // Simulate account creation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionFeedback('Account created successfully! Welcome to JambiX.');
      setTimeout(() => {
        const cleanEmail = email.trim();
        getOrCreateAccountActivation(cleanEmail).catch((err) =>
          console.warn('Initial cloud activation registration sync:', err)
        );
        saveActivationRecord({
          userEmail: cleanEmail,
          registeredAt: Date.now(),
          isActivated: false,
        });

        // Directly sign in candidate without stressful email verification
        onSignUpSuccess({
          name: fullName.trim(),
          email: cleanEmail,
        });
      }, 700);
    }, 1000);
  };

  // Demo autofill for rapid testing
  const handleAutofillDemo = () => {
    setFullName('Chukwudi Adeleke');
    setEmail('adeleke.chukwudi@gmail.com');
    setPhoneNumber('08031234567');
    setPassword('JambMaster2026!');
    setConfirmPassword('JambMaster2026!');
    setErrors({});
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Brand Header */}
      <div className="text-center mb-6">
        <Logo size="md" showTagline={false} />
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Create your account
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Start your smarter JAMB preparation journey.
        </p>

        {/* Quick autofill helper */}
        <div className="mt-2.5 flex justify-center">
          <button
            type="button"
            onClick={handleAutofillDemo}
            className="text-[11px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200/80 dark:border-emerald-800/80 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>✨</span>
            <span>Tap to fill demo candidate info</span>
          </button>
        </div>
      </div>

      {/* Success notification banner */}
      {submissionFeedback && (
        <div className="mb-4 p-3.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="font-semibold">{submissionFeedback}</span>
        </div>
      )}

      {/* Form Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 transition-colors">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor={`${formId}-fullName`}
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <User className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-fullName`}
                type="text"
                autoComplete="name"
                placeholder="e.g. Chukwudi Adeleke"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (touched.fullName) {
                    setErrors((prev) => ({
                      ...prev,
                      fullName: validateField('fullName', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('fullName')}
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-800/80 border rounded-xl placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white transition-all focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 ${
                  touched.fullName && errors.fullName
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900'
                    : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-100 dark:focus:ring-emerald-900/40'
                }`}
              />
            </div>
            {touched.fullName && errors.fullName && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
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
                  if (touched.email) {
                    setErrors((prev) => ({
                      ...prev,
                      email: validateField('email', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('email')}
                className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-800/80 border rounded-xl placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white transition-all focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 ${
                  touched.email && errors.email
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900'
                    : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-100 dark:focus:ring-emerald-900/40'
                }`}
              />
            </div>
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Phone Number with Nigerian Flag indicator */}
          <div>
            <label
              htmlFor={`${formId}-phone`}
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Phone Number
            </label>
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 dark:text-slate-400 gap-1.5 pr-2 border-r border-slate-200 dark:border-slate-700 my-2">
                <span className="text-sm select-none" role="img" aria-label="Nigeria">
                  🇳🇬
                </span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">+234</span>
              </div>
              <input
                id={`${formId}-phone`}
                type="tel"
                autoComplete="tel"
                placeholder="0801 234 5678"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (touched.phoneNumber) {
                    setErrors((prev) => ({
                      ...prev,
                      phoneNumber: validateField('phoneNumber', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('phoneNumber')}
                className={`w-full pl-24 pr-3.5 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-800/80 border rounded-xl placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white transition-all focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 ${
                  touched.phoneNumber && errors.phoneNumber
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900'
                    : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-100 dark:focus:ring-emerald-900/40'
                }`}
              />
            </div>
            {touched.phoneNumber && errors.phoneNumber ? (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phoneNumber}</span>
              </p>
            ) : (
              <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
                Used for instant UTME mock score SMS alerts & verification.
              </p>
            )}
          </div>

          {/* Password with Strength Indicator */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor={`${formId}-password`}
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                Password
              </label>
              {password && (
                <span className={`text-[11px] font-semibold ${strength.color}`}>
                  Strength: {strength.text}
                </span>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-password`}
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (touched.password) {
                    setErrors((prev) => ({
                      ...prev,
                      password: validateField('password', e.target.value),
                    }));
                  }
                  if (confirmPassword) {
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword:
                        e.target.value === confirmPassword ? '' : 'Passwords do not match',
                    }));
                  }
                }}
                onBlur={() => handleBlur('password')}
                className={`w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-800/80 border rounded-xl placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white transition-all focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 ${
                  touched.password && errors.password
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900'
                    : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-100 dark:focus:ring-emerald-900/40'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Password Strength Meter Bars */}
            {password && (
              <div className="mt-2 space-y-1.5">
                <div className="grid grid-cols-4 gap-1.5 h-1.5">
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      strength.count >= 1 ? strength.barColor : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      strength.count >= 2 ? strength.barColor : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      strength.count >= 3 ? strength.barColor : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      strength.count >= 4 ? strength.barColor : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                </div>

                {/* Micro Checklist */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                        hasMinLength
                          ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {hasMinLength ? '✓' : '·'}
                    </span>
                    <span className={hasMinLength ? 'text-slate-700 dark:text-slate-200 font-medium' : ''}>
                      8+ characters
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                        hasNumber
                          ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {hasNumber ? '✓' : '·'}
                    </span>
                    <span className={hasNumber ? 'text-slate-700 dark:text-slate-200 font-medium' : ''}>
                      Includes number
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                        hasLetter
                          ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {hasLetter ? '✓' : '·'}
                    </span>
                    <span className={hasLetter ? 'text-slate-700 dark:text-slate-200 font-medium' : ''}>
                      Includes letters
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[10px] ${
                        hasSpecial
                          ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {hasSpecial ? '✓' : '·'}
                    </span>
                    <span className={hasSpecial ? 'text-slate-700 dark:text-slate-200 font-medium' : ''}>
                      Capital/Symbol
                    </span>
                  </div>
                </div>
              </div>
            )}

            {touched.password && errors.password && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.password}</span>
              </p>
            )}
          </div>

          {/* Confirm Password with Real-time matching feedback */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor={`${formId}-confirmPassword`}
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                Confirm Password
              </label>

              {isConfirming && (
                <span
                  className={`text-[11px] font-semibold flex items-center gap-1 ${
                    passwordsMatch
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-amber-600 dark:text-amber-400'
                  }`}
                >
                  {passwordsMatch ? (
                    <>
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Passwords match</span>
                    </>
                  ) : (
                    <>
                      <X className="w-3 h-3 stroke-[3]" />
                      <span>Does not match</span>
                    </>
                  )}
                </span>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id={`${formId}-confirmPassword`}
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (touched.confirmPassword) {
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword: validateField('confirmPassword', e.target.value),
                    }));
                  }
                }}
                onBlur={() => handleBlur('confirmPassword')}
                className={`w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50/50 dark:bg-slate-800/80 border rounded-xl placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white transition-all focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 ${
                  touched.confirmPassword && errors.confirmPassword
                    ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-900'
                    : isConfirming && passwordsMatch
                    ? 'border-emerald-400 dark:border-emerald-500 focus:border-emerald-500 focus:ring-emerald-100 dark:focus:ring-emerald-900/40'
                    : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-emerald-100 dark:focus:ring-emerald-900/40'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="mt-1 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.confirmPassword}</span>
              </p>
            )}
          </div>

          {/* Primary Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm rounded-xl shadow-md shadow-emerald-800/15 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <span>Create Account</span>
              )}
            </button>
          </div>
        </form>

        {/* Already have an account? Log In */}
        <div className="mt-6 text-center text-xs text-slate-600 dark:text-slate-400">
          <span>Already have an account? </span>
          <button
            type="button"
            onClick={onNavigateToLogin}
            className="font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline transition-colors cursor-pointer"
          >
            Log In
          </button>
        </div>

        {/* Terms of Service & Privacy Policy Acknowledgement */}
        <p className="mt-5 text-[11px] text-center text-slate-400 dark:text-slate-500 leading-relaxed">
          By creating an account, you agree to JambiX&apos;s{' '}
          <button
            type="button"
            onClick={() => onOpenTerms('terms')}
            className="text-slate-600 dark:text-slate-300 underline hover:text-emerald-700 dark:hover:text-emerald-400 cursor-pointer font-medium"
          >
            Terms of Service
          </button>{' '}
          and{' '}
          <button
            type="button"
            onClick={() => onOpenTerms('privacy')}
            className="text-slate-600 dark:text-slate-300 underline hover:text-emerald-700 dark:hover:text-emerald-400 cursor-pointer font-medium"
          >
            Privacy Policy
          </button>
          .
        </p>
      </div>
    </div>
  );
};
