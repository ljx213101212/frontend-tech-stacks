// components/ServiceWorkerExample.tsx
import { useEffect, useState } from 'react';

export default function ServiceWorkerExample() {


  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('/service-worker.js') // Must be served from the site's root or subpath
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((err) => {
          console.error('Service Worker registration failed:', err);
        });
    }

  }, []);

  const handleCheckServiceWorker = () => {
    if (navigator.serviceWorker.controller) {
      console.log('A Service Worker is currently controlling this page.');
    } else {
      console.log('No active Service Worker is controlling this page.');
    }
  };

  return (
    <div>
      <h2>Service Worker Example</h2>
      <button onClick={handleCheckServiceWorker}>
        Check Service Worker Status
      </button>
      <p>Open DevTools Console to see logs related to the Service Worker.</p>
    </div>
  );
}
