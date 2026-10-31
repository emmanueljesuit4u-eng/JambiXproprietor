/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import {
  ActiveSessionData,
  updateSessionPresence,
  endSessionPresence,
  subscribeToActiveSessions,
} from '../lib/firestoreService';

interface UsePresenceOptions {
  userId?: string;
  userName?: string;
  userEmail?: string;
  currentView?: string;
  role?: 'student' | 'admin';
}

export function usePresence(options?: UsePresenceOptions) {
  const [activeSessions, setActiveSessions] = useState<ActiveSessionData[]>([]);
  const sessionIdRef = useRef<string>('');
  const sessionStartTimeRef = useRef<number>(Date.now());

  // Detect device category
  const getDeviceCategory = (): string => {
    if (typeof window === 'undefined') return 'Desktop';
    const width = window.innerWidth;
    const ua = navigator.userAgent.toLowerCase();
    if (/android|iphone|ipad|ipod|mobile/i.test(ua) || width < 640) {
      return width >= 640 && width < 1024 ? 'Tablet' : 'Mobile';
    }
    if (width < 1024) return 'Tablet';
    return 'Desktop';
  };

  // Stable session ID across tab lifetime
  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionIdRef.current) {
      let stored = sessionStorage.getItem('jambix_active_sess_id');
      let storedStart = sessionStorage.getItem('jambix_active_sess_start');
      if (!stored) {
        stored = `sess_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
        storedStart = String(Date.now());
        sessionStorage.setItem('jambix_active_sess_id', stored);
        sessionStorage.setItem('jambix_active_sess_start', storedStart);
      }
      sessionIdRef.current = stored;
      sessionStartTimeRef.current = parseInt(storedStart || '0', 10) || Date.now();
    }
  }, []);

  // Presence heartbeat loop
  useEffect(() => {
    const sessionId = sessionIdRef.current;
    if (!sessionId) return;

    const pulse = async () => {
      const cleanName = options?.userName || 'UTME Candidate';
      const cleanEmail = options?.userEmail || '';
      const cleanUserId = options?.userId || (cleanEmail ? `cand_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '_')}` : `guest_${sessionId.slice(-6)}`);

      const sessionPayload: ActiveSessionData = {
        id: sessionId,
        userId: cleanUserId,
        userName: cleanName,
        userEmail: cleanEmail,
        currentView: options?.currentView || 'Dashboard',
        device: getDeviceCategory(),
        lastActive: Date.now(),
        startedAt: sessionStartTimeRef.current,
        isOnline: true,
      };

      await updateSessionPresence(sessionPayload);
    };

    // Send heartbeat immediately
    pulse();

    // Send heartbeat every 30 seconds
    const interval = setInterval(pulse, 30000);

    // End session presence when user leaves or closes tab
    const handleBeforeUnload = () => {
      endSessionPresence(sessionId);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [options?.userId, options?.userName, options?.userEmail, options?.currentView]);

  // Real-time onSnapshot subscription to all live active sessions
  useEffect(() => {
    const unsub = subscribeToActiveSessions((sessions) => {
      setActiveSessions(sessions);
    });
    return () => unsub();
  }, []);

  const onlineCount = Math.max(activeSessions.length, 1);

  return {
    activeSessions,
    onlineCount,
    currentSessionId: sessionIdRef.current,
  };
}
