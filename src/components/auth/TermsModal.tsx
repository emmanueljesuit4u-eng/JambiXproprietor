/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Check } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'terms' | 'privacy';
}

export const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terms',
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div
        className="w-full sm:max-w-lg bg-white dark:bg-slate-900 rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[88vh] sm:max-h-[80vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150 transition-colors"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850">
          <div className="flex items-center gap-2">
            {activeTab === 'terms' ? (
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            )}
            <h3 id="terms-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
              JambiX Legal & Compliance
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1.5 mx-5 mt-4 bg-slate-100 dark:bg-slate-800 rounded-xl gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Terms of Service
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Privacy Policy
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          {activeTab === 'terms' ? (
            <>
              <div className="p-3 bg-emerald-50/70 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/80 rounded-xl text-emerald-900 dark:text-emerald-200 text-xs">
                <span className="font-bold">Candidate Commitment:</span> JambiX is designed solely to foster academic excellence and authentic mastery of the Unified Tertiary Matriculation Examination (UTME) syllabus.
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">1. Acceptance of Terms</h4>
                <p>
                  By creating an account or logging into JambiX, you agree to comply with all applicable Nigerian educational guidelines, user conduct rules, and our platform terms.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">2. Account Responsibility</h4>
                <p>
                  Candidates must provide accurate registration details (Full Name, active Email, and reachable Nigerian Phone Number). You are solely responsible for maintaining the confidentiality of your login credentials.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">3. Academic Integrity & CBT Practice</h4>
                <p>
                  All past questions, mock exams, and analytics provided within JambiX are proprietary educational resources. Sharing answers during official JambiX live national mock tests is strictly prohibited.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">4. Service Availability</h4>
                <p>
                  While we strive for 99.9% uptime during peak UTME preparation windows, JambiX is provided on an &ldquo;as available&rdquo; basis with continuous performance updates.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-3 bg-teal-50/70 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/80 rounded-xl text-teal-900 dark:text-teal-200 text-xs">
                <span className="font-bold">NDPR Compliant:</span> JambiX adheres strictly to the Nigeria Data Protection Regulation (NDPR) to protect candidate information.
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">1. Information We Collect</h4>
                <p>
                  We collect your Full Name, Email Address, Nigerian Phone Number, and your test score analytics to tailor your UTME revision roadmap and track topic masteries.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">2. How We Protect Your Data</h4>
                <p>
                  Passwords are encrypted with industry-standard cryptographic hashing. We never sell or distribute student contact details to third-party telemarketers or exam centers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">3. SMS & Email Notifications</h4>
                <p>
                  Your phone number and email are used exclusively for password resets, study streak reminders, and critical JAMB exam updates.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 dark:text-slate-500">Last updated: September 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
