/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl border transition-all cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 ${
        isDark
          ? 'bg-slate-800 hover:bg-slate-700/80 text-amber-300 border-slate-700 shadow-xs'
          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs'
      } ${className}`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 stroke-[2.2] animate-in spin-in-90 duration-200" />
        ) : (
          <Moon className="w-4 h-4 stroke-[2.2] text-slate-700 animate-in spin-in-90 duration-200" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-semibold">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};
