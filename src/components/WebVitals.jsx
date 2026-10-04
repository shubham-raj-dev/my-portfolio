import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Generate a random session ID to track the same user across routes/sections
const SESSION_ID = Math.random().toString(36).substring(2, 15);
let isInitialized = false;
const sectionTimeouts = {};

export default function WebVitals() {
  const location = useLocation();
  const observerRef = useRef(null);

  // Send payload to our stealth backend
  const sendMetric = (data) => {
    try {
      fetch('/api/vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, sessionId: SESSION_ID }),
        // keepalive: true ensures the request finishes even if user navigates away
        keepalive: true 
      }).catch(() => {});
    } catch (e) {}
  };

  // 1. Initial Page Load Tracking
  useEffect(() => {
    if (!isInitialized) {
      isInitialized = true;
      const referrer = document.referrer;
      sendMetric({
        type: 'init',
        path: window.location.pathname,
        referrer: referrer
      });
    }
  }, []);

  // 2. Route Change Tracking (SPA Navigation)
  useEffect(() => {
    if (isInitialized) { // Don't fire on initial load again
      sendMetric({
        type: 'route',
        path: location.pathname
      });
    }
  }, [location.pathname]);

  // 3. Section Scroll/Read Tracking using Intersection Observer
  useEffect(() => {
    // We only want to track sections on the Home page (where they exist)
    if (location.pathname !== '/') return;

    const sectionsToTrack = ['about', 'experience', 'projects', 'skills', 'contact'];
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        
        if (entry.isIntersecting) {
          // User is looking at this section
          // If they stare at it for more than 4 seconds, consider it "reading"
          sectionTimeouts[sectionId] = setTimeout(() => {
            sendMetric({
              type: 'section',
              section: sectionId.toUpperCase(),
              duration: 4
            });
          }, 4000); 
        } else {
          // User scrolled away, clear the timeout so we don't send false positives
          if (sectionTimeouts[sectionId]) {
            clearTimeout(sectionTimeouts[sectionId]);
          }
        }
      });
    }, {
      threshold: 0.6 // 60% of the section must be visible to trigger
    });

    // Add delays to wait for DOM to render sections
    setTimeout(() => {
      sectionsToTrack.forEach(id => {
        const el = document.getElementById(id);
        if (el) observerRef.current.observe(el);
      });
    }, 1000);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      // Clear any pending timeouts
      Object.values(sectionTimeouts).forEach(clearTimeout);
    };
  }, [location.pathname]);

  return null; // This component renders nothing
}
