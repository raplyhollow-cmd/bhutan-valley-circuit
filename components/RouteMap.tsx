'use client';

import { useEffect, useRef, useState } from 'react';

export default function RouteMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visibleSection, setVisibleSection] = useState(0);

  const stops = [
    { name: 'Phuntsholing', alt: 293, emoji: '' },
    { name: 'Paro', alt: 2200, emoji: '' },
    { name: 'Punakha', alt: 1350, emoji: '' },
    { name: 'Phobjikha', alt: 2900, emoji: '' },
    { name: 'Thimphu', alt: 2350, emoji: '' },
    { name: 'Phuntsholing', alt: 293, emoji: '' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw mountain silhouette
      ctx.fillStyle = 'rgba(45, 90, 61, 0.3)';
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 50) {
        const mountainHeight = Math.sin(x * 0.01) * 80 + Math.sin(x * 0.02) * 40 + 100;
        ctx.lineTo(x, height - mountainHeight);
      }
      ctx.lineTo(width, height);
      ctx.fill();

      // Draw route line
      const progress = visibleSection / (stops.length - 1);
      const routeGradient = ctx.createLinearGradient(0, 0, width, 0);
      routeGradient.addColorStop(0, '#C41E3A');
      routeGradient.addColorStop(0.5, '#E4B01B');
      routeGradient.addColorStop(1, '#2D5A3D');

      ctx.strokeStyle = routeGradient;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Draw winding road
      ctx.beginPath();
      const points = stops.length;
      for (let i = 0; i < points; i++) {
        const x = (width / (points - 1)) * i;
        const y = height / 2 + Math.sin(i * 0.8) * 60;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.stroke();

      // Draw stops
      stops.forEach((stop, i) => {
        const x = (width / (stops.length - 1)) * i;
        const y = height / 2 + Math.sin(i * 0.8) * 60;
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(x, y, i <= visibleSection ? 8 : 5, 0, Math.PI * 2);
        ctx.fillStyle = i <= visibleSection ? '#E4B01B' : 'rgba(255,255,255,0.3)';
        ctx.fill();

        // Draw label
        ctx.fillStyle = i <= visibleSection ? '#ffffff' : 'rgba(255,255,255,0.5)';
        ctx.font = '12px Space Grotesk';
        ctx.textAlign = 'center';
        ctx.fillText(stop.name, x, y + 30);
        
        // Draw altitude
        ctx.fillStyle = 'rgba(228, 176, 27, 0.8)';
        ctx.font = '10px Space Grotesk';
        ctx.fillText(stop.alt + 'm', x, y - 15);
      });
    };

    draw();

    const handleScroll = () => {
      const section = document.querySelector('#route-section');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const sectionProgress = 1 - (rect.top / window.innerHeight);
      const newVisibleSection = Math.floor(sectionProgress * (stops.length - 1));
      setVisibleSection(Math.max(0, Math.min(stops.length - 1, newVisibleSection)));
      draw();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSection]);

  return (
    <section id="route-section" className="relative min-h-screen py-24 textile-pattern">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-mustard reveal">
            THE JOURNEY
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl">
            Valley Circuit Route
          </h2>
        </div>

        <canvas 
          ref={canvasRef} 
          className="w-full h-64 md:h-80"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stops.map((stop, i) => (
            <div 
              key={i}
              className={'glass rounded-xl p-4 text-center transition-all ' + (i <= visibleSection ? 'opacity-100' : 'opacity-40')}
            >
              <div className="font-display text-2xl font-bold text-bhutan-mustard">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="font-mono text-sm text-gray-300">{stop.name}</div>
              <div className="mt-2 font-mono text-xs text-bhutan-forest">
                {stop.alt}m
              </div>
            </div>
          ))}
        </div>

        {/* Altitude Profile */}
        <div className="mt-16">
          <h3 className="font-display mb-4 text-xl font-semibold">Altitude Profile</h3>
          <div className="relative h-32 w-full overflow-hidden rounded-xl bg-white/5">
            <svg viewBox="0 0 600 100" className="h-full w-full">
              <defs>
                <linearGradient id="altitudeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C41E3A" />
                  <stop offset="50%" stopColor="#E4B01B" />
                  <stop offset="100%" stopColor="#2D5A3D" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(228, 176, 27, 0.3)" />
                  <stop offset="100%" stopColor="rgba(228, 176, 27, 0)" />
                </linearGradient>
              </defs>
              <path
                d="M0,80 L100,30 L200,50 L300,20 L400,25 L500,80 L500,100 L0,100 Z"
                fill="url(#areaGradient)"
              />
              <path
                d="M0,80 L100,30 L200,50 L300,20 L400,25 L500,80"
                stroke="url(#altitudeGradient)"
                strokeWidth="3"
                fill="none"
                className="animate-pulse-slow"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
