'use client';

import { useEffect, useRef, useState } from 'react';

export default function RouteMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visibleSection, setVisibleSection] = useState(0);

  const stops = [
    { name: 'Phuntsholing', alt: 293 },
    { name: 'Paro', alt: 2200 },
    { name: 'Punakha', alt: 1350 },
    { name: 'Phobjikha', alt: 2900 },
    { name: 'Thimphu', alt: 2350 },
    { name: 'Phuntsholing', alt: 293 },
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

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw route line
      const progress = visibleSection / (stops.length - 1);
      const routeGradient = ctx.createLinearGradient(0, 0, width, 0);
      routeGradient.addColorStop(0, '#C41E3A');
      routeGradient.addColorStop(0.5, '#E4B01B');
      routeGradient.addColorStop(1, '#2D5A3D');

      ctx.strokeStyle = routeGradient;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Draw winding road
      ctx.beginPath();
      const points = stops.length;
      for (let i = 0; i < points; i++) {
        const x = 80 + (width - 160) / (points - 1) * i;
        const y = height / 2 + Math.sin(i * 0.8) * 50;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();

      // Draw stops
      stops.forEach((stop, i) => {
        const x = 80 + (width - 160) / (stops.length - 1) * i;
        const y = height / 2 + Math.sin(i * 0.8) * 50;

        // Draw outer circle
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, Math.PI * 2);
        ctx.fillStyle = i <= visibleSection ? '#E4B01B' : '#f0f0f0';
        ctx.fill();
        ctx.strokeStyle = i <= visibleSection ? '#C41E3A' : '#ccc';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw number
        ctx.fillStyle = i <= visibleSection ? '#fff' : '#666';
        ctx.font = 'bold 12px Space Grotesk';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(i + 1), x, y);

        // Draw label below
        ctx.fillStyle = '#1a1a1a';
        ctx.font = '11px Space Grotesk';
        ctx.fillText(stop.name, x, y + 28);

        // Draw altitude above
        ctx.fillStyle = '#C41E3A';
        ctx.font = 'bold 10px Space Grotesk';
        ctx.fillText(stop.alt + 'm', x, y - 22);
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
    <section id="route-section" className="relative min-h-screen py-24 bg-gradient-to-b from-bhutan-mustard/10 to-bhutan-cream">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-maroon">
            THE JOURNEY
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl text-bhutan-charcoal">
            Valley Circuit Route
          </h2>
        </div>

        <canvas
          ref={canvasRef}
          className="w-full h-56 md:h-72 bg-white/50 rounded-2xl shadow-inner"
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stops.map((stop, i) => (
            <div
              key={i}
              className={'bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center transition-all shadow-md ' + (i <= visibleSection ? 'ring-2 ring-bhutan-mustard' : 'opacity-60')}
            >
              <div className="font-display text-2xl font-bold text-bhutan-maroon">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="font-mono text-sm text-bhutan-charcoal">{stop.name}</div>
              <div className="mt-2 font-mono text-xs text-bhutan-forest font-bold">
                {stop.alt}m
              </div>
            </div>
          ))}
        </div>

        {/* Altitude Profile */}
        <div className="mt-12">
          <h3 className="font-display mb-4 text-xl font-semibold text-bhutan-charcoal">Altitude Profile</h3>
          <div className="relative h-28 w-full overflow-hidden rounded-2xl bg-white/50 shadow-inner">
            <svg viewBox="0 0 600 100" className="h-full w-full">
              <defs>
                <linearGradient id="altitudeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C41E3A" />
                  <stop offset="50%" stopColor="#E4B01B" />
                  <stop offset="100%" stopColor="#2D5A3D" />
                </linearGradient>
                <linearGradient id="areaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(228, 176, 27, 0.4)" />
                  <stop offset="100%" stopColor="rgba(228, 176, 27, 0)" />
                </linearGradient>
              </defs>
              <path
                d="M0,70 L100,35 L200,50 L300,25 L400,30 L500,70 L500,100 L0,100 Z"
                fill="url(#areaGradient2)"
              />
              <path
                d="M0,70 L100,35 L200,50 L300,25 L400,30 L500,70"
                stroke="url(#altitudeGradient2)"
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
