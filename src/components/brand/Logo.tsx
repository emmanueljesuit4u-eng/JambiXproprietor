/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* Geometric Academic Emblem with Nigerian Emerald Tone & Growth Chevron */}
        <div
          className={`${iconSizeClasses[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 shadow-md shadow-emerald-700/20 text-white shrink-0 ring-1 ring-white/20`}
        >
          {/* Subtle inner grid pattern */}
          <div className="absolute inset-0 rounded-xl overflow-hidden opacity-20 pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <svg
            className="w-3/5 h-3/5 text-white relative z-10 drop-shadow-sm"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Academic Cap & Upward Performance Spark */}
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
            <path d="M12 15l2 3 4-4" stroke="#34D399" strokeWidth="2.5" />
          </svg>
        </div>

        {/* Brand Text */}
        <div className="flex flex-col leading-none">
          <div className={`font-extrabold tracking-tight text-slate-900 dark:text-white ${textClasses[size]} flex items-baseline`}>
            <span>Jambi</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-black">X</span>
          </div>
        </div>
      </div>

      {showTagline && (
        <p className="mt-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide text-center">
          Prepare smarter. Perform better.
        </p>
      )}
    </div>
  );
};
