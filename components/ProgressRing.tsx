'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProgressRing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 50;
    const center = size / 2;
    const radius = 20;
    canvas.width = size * 2;
    canvas.height = size * 2;
    ctx.scale(2, 2);

    ctx.clearRect(0, 0, size, size);

    // Background ring
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Progress ring
    ctx.beginPath();
    ctx.arc(center, center, radius, -Math.PI / 2, -Math.PI / 2 + scrollProgress * Math.PI * 2);
    ctx.strokeStyle = '#C41E3A';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();
  }, [scrollProgress]);

  return (
    <div className="progress-ring">
      <canvas ref={canvasRef} width={50} height={50} className="w-full h-full" />
    </div>
  );
}
