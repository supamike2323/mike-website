'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga';

export function Analytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Initialize Google Analytics only in production
      const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
      if (trackingId) {
        ReactGA.initialize(trackingId);
        ReactGA.pageview(window.location.pathname + window.location.search);
      }
    }
  }, []);

  return null;
}