/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Smartphone,
  Monitor,
  Tablet,
  GraduationCap,
  Award,
  Layers,
  BookOpen,
  LayoutDashboard,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';
import { SignUpPage } from './SignUpPage';
import { LogInPage } from './LogInPage';
import { ForgotPasswordPage } from './ForgotPasswordPage';
import { TermsModal } from './TermsModal';
import { StudentDashboard } from '../dashboard/StudentDashboard';
import { ThemeToggle } from '../common/ThemeToggle';
import { useAuth } from '../../context/AuthContext';

export type ScreenType = 'signup' | 'login' | 'forgot_password';
export type ViewportMode = 'responsive' | 'mobile' | 'tablet';

export const AuthContainer: React.FC = () => {
  const { currentUser, studentProfile, logOut: fbLogOut, localStudent, setLocalStudent } = useAuth();
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('login');
  const [viewportMode, setViewportMode] = useState<ViewportMode>('responsive');
  const [prefilledLoginEmail, setPrefilledLoginEmail] = useState<string>('');

  // Modal dialog states
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [termsTab, setTermsTab] = useState<'terms' | 'privacy'>('terms');

  const handleOpenTerms = (tab: 'terms' | 'privacy') => {
    setTermsTab(tab);
    setIsTermsOpen(true);
  };

  const handleSignUpSuccess = (user: { name: string; email: string }) => {
    setLocalStudent(user);
  };

  const handleLogInSuccess = (user: { identifier: string }) => {
    setLocalStudent({
      name: user.identifier.includes('@')
        ? user.identifier.split('@')[0]
        : user.identifier,
      email: user.identifier.includes('@') ? user.identifier : `${user.identifier}@student.jambix.ng`,
      identifier: user.identifier,
    });
  };

  const handleLogOut = async () => {
    await fbLogOut();
    setCurrentScreen('login');
  };

  const activeUser = currentUser
    ? {
        name: studentProfile?.fullName || currentUser.displayName || (currentUser.email ? currentUser.email.split('@')[0] : 'UTME Candidate'),
        email: currentUser.email || 'student@jambix.ng',
        identifier: currentUser.email || currentUser.uid,
      }
    : localStudent;

  // If the student is authenticated via Firebase or local session, transition directly to the StudentDashboard!
  if (activeUser) {
    return <StudentDashboard user={activeUser} onLogOut={handleLogOut} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between text-slate-800 dark:text-slate-100 transition-colors duration-200 antialiased overflow-x-hidden">
      {/* Top Utility Bar */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-3 sm:px-6 py-2.5 transition-colors">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4 flex-nowrap">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setCurrentScreen('login')}
              className="text-left cursor-pointer flex items-center gap-2 group"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-black text-xs shadow-xs group-hover:bg-emerald-800 transition-colors">
                J
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-base sm:text-lg">
                Jambi<span className="text-emerald-600 dark:text-emerald-400">X</span>
              </span>
            </button>
            <span className="hidden sm:inline-block text-xs text-slate-400 dark:text-slate-500 font-medium border-l border-slate-200 dark:border-slate-700 pl-3">
              UTME Prep Engine
            </span>
          </div>

          {/* Quick Screen Nav Links, Demo Jump, Device Switcher & Top Right Light/Dark Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Screen Tabs (Clean 2-tab switch for Log In / Sign Up) */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/80 p-0.5 sm:p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setCurrentScreen('login')}
                className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all cursor-pointer text-xs ${
                  currentScreen === 'login'
                    ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => setCurrentScreen('signup')}
                className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all cursor-pointer text-xs ${
                  currentScreen === 'signup'
                    ? 'bg-white dark:bg-slate-700 text-emerald-800 dark:text-emerald-300 shadow-2xs font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Dedicated /admin/signup Portal Link */}
            <button
              type="button"
              onClick={() => {
                window.history.pushState({}, '', '/admin/signup');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              title="Access Master Admin Portal (/admin/signup)"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Admin Portal</span>
            </button>

            {/* Direct Instant Transition to Student Dashboard (for quick testing) */}
            <button
              type="button"
              onClick={() => {
                setLocalStudent({
                  name: 'Emmanuel Jesuit',
                  email: 'emmanueljesuit4u@gmail.com',
                  identifier: 'emmanueljesuit4u@gmail.com',
                });
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-2xs transition-colors cursor-pointer"
              title="Preview Student Dashboard directly"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Preview Dashboard</span>
            </button>

            {/* Viewport Frame Mode Switcher for Testing */}
            <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 border border-transparent dark:border-slate-700/80 p-1 rounded-xl text-xs text-slate-600 dark:text-slate-300">
              <button
                type="button"
                title="Fluid Responsive View"
                onClick={() => setViewportMode('responsive')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewportMode === 'responsive'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                title="Tablet Frame (640px)"
                onClick={() => setViewportMode('tablet')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewportMode === 'tablet'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                title="Mobile Frame (390px)"
                onClick={() => setViewportMode('mobile')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewportMode === 'mobile'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Toggle for Light and Dark Mode on the first page at the top right hand side corner */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div
          className={`w-full transition-all duration-300 ${
            viewportMode === 'mobile'
              ? 'max-w-[400px] border-8 border-slate-800 rounded-[38px] p-4 bg-slate-50 shadow-2xl my-4'
              : viewportMode === 'tablet'
              ? 'max-w-[640px] border-4 border-slate-300 rounded-3xl p-6 bg-slate-50 shadow-xl my-4'
              : 'max-w-5xl'
          }`}
        >
          {/* Simulated Mobile Notch */}
          {viewportMode === 'mobile' && (
            <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-4" />
          )}

          {viewportMode === 'responsive' ? (
            /* Responsive Desktop Dual-Pane Layout */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Brand Showcase (Visible on lg screens) */}
              <div className="hidden lg:flex lg:col-span-5 flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white relative overflow-hidden shadow-xl min-h-[560px]">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <GraduationCap className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold tracking-tight">
                        Jambi<span className="text-emerald-400">X</span>
                      </div>
                      <div className="text-[11px] text-emerald-200/80 font-medium">
                        Prepare smarter. Perform better.
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-black tracking-tight leading-snug text-white">
                    Master the UTME syllabus with Nigeria&apos;s most advanced CBT engine.
                  </h2>
                  <p className="mt-3 text-xs text-emerald-100/70 leading-relaxed">
                    Designed strictly around official JAMB guidelines, past trends, and real-time timed test simulations.
                  </p>

                  <div className="mt-8 space-y-3.5">
                    <div className="flex items-start gap-3 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-white">300+ UTME Target Prep</div>
                        <div className="text-emerald-200/60 text-[11px]">
                          Topic-by-topic drills to push your aggregate score beyond university cut-offs.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-white">2026/2027 Syllabus Updated</div>
                        <div className="text-emerald-200/60 text-[11px]">
                          Use of English, Mathematics, Sciences, Arts &amp; Social Science subjects.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Real CBT 8-Key Navigation</div>
                        <div className="text-emerald-200/60 text-[11px]">
                          Familiarize yourself with actual JAMB examination keyboard shortcuts.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-300">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Verified Textbook Topics</div>
                        <div className="text-emerald-200/60 text-[11px]">
                          Accurate answers referred directly to topics in accredited textbooks.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs">
                  <div className="text-emerald-100/90 italic leading-relaxed">
                    &ldquo;JambiX timed mock tests gave me the speed and composure I needed. Scored 324 in my UTME.&rdquo;
                  </div>
                  <div className="mt-2 text-[11px] font-semibold text-emerald-400">
                    Oluwaseun A. · UNILAG Law Aspirant
                  </div>
                </div>
              </div>

              {/* Right Form Card */}
              <div className="lg:col-span-7 flex justify-center">
                {currentScreen === 'signup' && (
                  <SignUpPage
                    onNavigateToLogin={() => setCurrentScreen('login')}
                    onOpenTerms={handleOpenTerms}
                    onSignUpSuccess={handleSignUpSuccess}
                  />
                )}

                {currentScreen === 'login' && (
                  <LogInPage
                    onNavigateToSignUp={() => setCurrentScreen('signup')}
                    onNavigateToForgotPassword={() => setCurrentScreen('forgot_password')}
                    onLogInSuccess={handleLogInSuccess}
                    initialIdentifier={prefilledLoginEmail}
                  />
                )}

                {currentScreen === 'forgot_password' && (
                  <ForgotPasswordPage
                    onNavigateToLogin={() => setCurrentScreen('login')}
                  />
                )}
              </div>
            </div>
          ) : (
            /* Centered Frame for Mobile / Tablet Modes */
            <div className="w-full flex justify-center">
              {currentScreen === 'signup' && (
                <SignUpPage
                  onNavigateToLogin={() => setCurrentScreen('login')}
                  onOpenTerms={handleOpenTerms}
                  onSignUpSuccess={handleSignUpSuccess}
                />
              )}

              {currentScreen === 'login' && (
                <LogInPage
                  onNavigateToSignUp={() => setCurrentScreen('signup')}
                  onNavigateToForgotPassword={() => setCurrentScreen('forgot_password')}
                  onLogInSuccess={handleLogInSuccess}
                  initialIdentifier={prefilledLoginEmail}
                />
              )}

              {currentScreen === 'forgot_password' && (
                <ForgotPasswordPage
                  onNavigateToLogin={() => setCurrentScreen('login')}
                />
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 py-4 px-4 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="font-bold text-slate-800 dark:text-white">JambiX</span>
            <span>·</span>
            <span>Prepare smarter. Perform better.</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <a
              href="https://whatsapp.com/channel/0029VbDWWdJ3gvWeRGLswJ06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>WhatsApp Channel</span>
            </a>
            <button
              type="button"
              onClick={() => handleOpenTerms('terms')}
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => handleOpenTerms('privacy')}
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>© {new Date().getFullYear()} JambiX Nigeria</span>
          </div>
        </div>
      </footer>

      {/* Terms & Privacy Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        initialTab={termsTab}
      />
    </div>
  );
};
