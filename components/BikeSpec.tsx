"use client";

import { useRef, useEffect } from 'react';
import { Motorbike, Gauge, Mountain, Zap } from 'lucide-react';

export default function BikeSpec() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const w = rect.width, h = rect.height;
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#C41E3A';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(w * 0.2, h * 0.6);
    ctx.lineTo(w * 0.35, h * 0.45);
    ctx.lineTo(w * 0.5, h * 0.4);
    ctx.lineTo(w * 0.65, h * 0.35);
    ctx.lineTo(w * 0.75, h * 0.4);
    ctx.lineTo(w * 0.8, h * 0.55);
    ctx.lineTo(w * 0.7, h * 0.65);
    ctx.lineTo(w * 0.4, h * 0.7);
    ctx.lineTo(w * 0.25, h * 0.65);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(w * 0.25, h * 0.7, 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(w * 0.75, h * 0.65, 22, 0, Math.PI * 2);
    ctx.stroke();
  }, []);

  const specs = [
    { icon: Motorbike, label: 'Model', value: 'Himalayan 450' },
    { icon: Gauge, label: 'Engine', value: '450cc Liquid-Cooled' },
    { icon: Mountain, label: 'Terrain', value: 'All-Road Ready' },
    { icon: Zap, label: 'Power', value: '40 PS Peak Output' },
  ];

  const IconComponent = ({ icon: Icon }: { icon: any }) => <Icon className="w-8 h-8 text-bhutan-mustard mb-4 group-hover:scale-110 transition-transform" />;

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-bhutan-charcoal to-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-mustard">YOUR STEED</span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl">Royal Enfield Himalayan</h2>
          <p className="mt-4 text-gray-400">Built for the mountains. Ready for adventure.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <canvas ref={canvasRef} className="w-full h-64 md:h-80" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border-2 border-bhutan-mustard/30 float-element" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {specs.map((spec, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all group">
                <spec.icon className="w-8 h-8 text-bhutan-mustard mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-mono text-xs text-gray-400 mb-1">{spec.label}</p>
                <p className="font-display text-lg font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-sm text-gray-500 max-w-2xl mx-auto">
            The Himalayan 450 is purpose-built for adventure. With its torquey engine, long-travel suspension, and comfortable ergonomics, it is the perfect companion for conquering Bhutan mountain passes.
          </p>
        </div>
      </div>
    </section>
  );
}
