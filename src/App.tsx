/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { NetworkProvider } from './context/NetworkContext';
import { ActivationProvider } from './context/ActivationContext';
import { AuthContainer } from './components/auth/AuthContainer';
import { AdminDashboard } from './components/admin/AdminDashboard';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/admin' || path.startsWith('/admin/')) {
        return path;
      }
      // If at root '/' or '', default to '/admin/signup' matching user request
      return '/admin/signup';
    }
    return '/admin/signup';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const isAdminRoute = currentPath === '/admin' || currentPath.startsWith('/admin/');

  return (
    <ThemeProvider>
      <NetworkProvider>
        <AuthProvider>
          <ActivationProvider>
            {isAdminRoute ? (
              <AdminDashboard onNavigateHome={() => navigateTo('/')} />
            ) : (
              <AuthContainer />
            )}
          </ActivationProvider>
        </AuthProvider>
      </NetworkProvider>
    </ThemeProvider>
  );
}


