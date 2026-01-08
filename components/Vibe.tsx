"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Vibe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const images = container.querySelectorAll('img');
      images.forEach((img, i) => {
        const speed = 0.1 + (i * 0.05);
        (img as HTMLElement).style.transform = 'translateY(' + (scrollY * speed) + 'px)';
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen py-24 overflow-hidden bg-gradient-to-br from-bhutan-cream via-bhutan-mustard/20 to-bhutan-forest/20">
      <div className="absolute inset-0">
        <Image src="/assets/tiger-nest.jpg" alt="Tiger Nest Monastery" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-bhutan-cream/95 via-bhutan-cream/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex items-center h-full">
        <div className="max-w-2xl">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-maroon">THE EXPERIENCE</span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl leading-tight text-bhutan-maroon">
            Where Every Turn Reveals a Prayer Flag
          </h2>
          <p className="mt-8 text-lg text-bhutan-charcoal/80 leading-relaxed">
            Bhutan is not just a destination. It is a transformation. Through winding mountain passes,
            past ancient monasteries, and into valleys that time forgot — you will discover not just
            a country, but a new perspective on what adventure truly means.
          </p>
          <div className="mt-12 flex gap-8">
            <div>
              <div className="font-display text-4xl font-bold text-bhutan-maroon">8</div>
              <div className="font-mono text-sm text-bhutan-charcoal/70">Days</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-bhutan-mustard">6</div>
              <div className="font-mono text-sm text-bhutan-charcoal/70">Valleys</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-bhutan-forest">1</div>
              <div className="font-mono text-sm text-bhutan-charcoal/70">Kingdom</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
