/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ActivationPaywallModalProps {
  showToast?: (msg: string) => void;
}

export const ActivationPaywallModal: React.FC<ActivationPaywallModalProps> = () => {
  // System is 100% free - paywall removed
  return null;
};
