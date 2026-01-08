'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    if (!container || !title) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 800;
      const scale = 1 + scrollY / 2000;
      title.style.transform = 'scale(' + scale + ')';
      title.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = ['RIDE', 'THE', 'ROOF', 'OF', 'THE', 'WORLD'];

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <Image
          src="/assets/bikingbhutan - Copy.jpg"
          alt="Biking in Bhutan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="relative w-24 md:w-32 opacity-90 mix-blend-screen">
          <Image
            src="/assets/Bhutan silverpine logo.png"
            alt="Bhutan Silverpine Tours"
            fill
            className="object-contain"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Hollywood-style Spinning Logo */}
        <div className="mb-8 relative">
          <div className={`relative w-32 h-32 md:w-40 md:h-40 transition-all duration-1000 ${logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full border-2 border-bhutan-mustard/30 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-2 rounded-full border border-bhutan-maroon/20" />
            <div className="absolute inset-4 rounded-full border border-bhutan-forest/10" />

            {/* Logo container with spin animation */}
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-28 h-28 md:w-36 md:h-36 relative rounded-full overflow-hidden bg-transparent mix-blend-screen">
                <Image
                  src="/assets/Bhutan silverpine logo.png"
                  alt="Bhutan Silverpine Tours"
                  fill
                  className="object-contain p-4"
                  onLoad={() => setLogoLoaded(true)}
                />
              </div>
            </div>

            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-bhutan-mustard shadow-lg shadow-bhutan-mustard/50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 rounded-full bg-bhutan-maroon shadow-lg shadow-bhutan-maroon/50" />
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-bhutan-forest shadow-lg shadow-bhutan-forest/50" />
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-bhutan-mustard/70 shadow-lg shadow-bhutan-mustard/50" />
            </div>

            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-radial from-bhutan-mustard/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
          </div>
        </div>

        <p className="mb-4 font-mono text-sm tracking-[0.3em] text-bhutan-mustard animate-pulse-slow">
          BHUTAN SILVERPINE TOURS PRESENTS
        </p>

        <h1
          ref={titleRef}
          className="font-display mb-6 text-5xl font-bold leading-none md:text-7xl lg:text-9xl"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block transition-transform hover:-translate-y-2 hover:text-bhutan-mustard"
              style={{ animationDelay: (i * 0.1) + 's' }}
            >
              {word}{' '}
            </span>
          ))}
        </h1>

        <p className="mb-8 max-w-lg font-sans text-lg text-gray-300 md:text-xl">
          8 DAYS | 7 NIGHTS | 6 VALLEYS | ONE KINGDOM
        </p>

        <a
          href="#itinerary"
          className="magnetic-btn group relative overflow-hidden rounded-full px-8 py-4 font-display font-semibold"
        >
          <span className="relative z-10">BEGIN EXPEDITION</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-widest text-gray-400">SCROLL</span>
        <div className="h-12 w-px bg-gradient-to-b from-bhutan-maroon to-transparent animate-bounce" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full border border-bhutan-mustard/20 float-element" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/3 left-10 w-12 h-12 rounded-full border border-bhutan-maroon/20 float-element" style={{ animationDelay: '2s' }} />
    </section>
  );
}
