'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

  const words = ['GROSS', 'NATIONAL', 'HAPPINESS'];

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Punakha_Dzong1.jpg"
          alt="Punakha Dzong - Bhutan"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="relative w-24 md:w-32 opacity-90">
          <Image
            src="/assets/Bhutan silverpine logo.png"
            alt="Bhutan Silverpine Tours"
            fill
            className="object-contain"
            style={{ objectFit: 'contain', mixBlendMode: 'screen' }}
          />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Animated Brand Name */}
        <div className="mb-6">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
            {['BHUTAN', 'SILVERPINE', 'TOURS'].map((word, i) => (
              <span
                key={i}
                className="inline-block animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <span className="text-bhutan-mustard">{word}</span>{' '}
              </span>
            ))}
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-bhutan-maroon to-transparent animate-[widthGrow_1s_ease-out_0.8s_forwards]" style={{ width: 0 }} />
        </div>

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

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes widthGrow {
          to {
            width: 8rem;
          }
        }
      `}</style>
    </section>
  );
}
