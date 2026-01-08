'use client';

import { Motorbike, Gauge, Mountain, Zap } from 'lucide-react';
import Image from 'next/image';

export default function BikeSpec() {
  const specs = [
    { icon: Motorbike, label: 'Model', value: 'Himalayan 450' },
    { icon: Gauge, label: 'Engine', value: '450cc Liquid-Cooled' },
    { icon: Mountain, label: 'Terrain', value: 'All-Road Ready' },
    { icon: Zap, label: 'Power', value: '40 PS Peak Output' },
  ];

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-bhutan-cream to-bhutan-mustard/10 textile-pattern">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-maroon">YOUR STEED</span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl text-bhutan-maroon">
            Royal Enfield <span className="text-bhutan-mustard">Himalayan</span>
          </h2>
          <p className="mt-4 text-bhutan-charcoal">Built for the mountains. Ready for adventure.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Royal Enfield Bike Photo */}
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/assets/bikingbhutan - Copy.jpg"
              alt="Royal Enfield Himalayan 450 in Bhutan"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bhutan-maroon/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-xl text-white font-bold">
                Royal Enfield Himalayan 450
              </p>
              <p className="text-sm text-white/90 mt-1">
                Purpose-built for the Himalayas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {specs.map((spec, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all group border border-bhutan-maroon/30 shadow-lg"
              >
                <spec.icon className="w-8 h-8 text-bhutan-maroon mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-mono text-xs text-bhutan-charcoal/60 mb-1">{spec.label}</p>
                <p className="font-display text-lg font-semibold text-bhutan-maroon">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-sm text-bhutan-charcoal max-w-2xl mx-auto">
            The Himalayan 450 is purpose-built for adventure. With its torquey engine, long-travel suspension, and comfortable ergonomics, it is the perfect companion for conquering Bhutan mountain passes.
          </p>
        </div>
      </div>
    </section>
  );
}
