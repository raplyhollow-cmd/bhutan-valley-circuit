'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-text">SILVERPINE</div>
      <div className="preloader-progress">
        <div className="preloader-progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
