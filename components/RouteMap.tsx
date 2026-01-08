"use client";

import { MapPin, Mountain, Clock, ArrowRight } from 'lucide-react';

const routeStops = [
  { day: 'Day 1', location: 'Phuntsholing', alt: 293, highlight: 'Gateway to Bhutan' },
  { day: 'Day 2', location: 'Thimphu', alt: 2350, distance: '165 km', time: '5-6 hrs', highlight: 'Capital City' },
  { day: 'Day 3', location: 'Thimphu', alt: 2350, highlight: 'Culture & Heritage' },
  { day: 'Day 4', location: 'Punakha', alt: 1350, distance: '75 km', time: '2.5-3 hrs', highlight: 'Dochula Pass' },
  { day: 'Day 5', location: 'Phobjikha', alt: 2900, distance: '80 km', time: '3-4 hrs', highlight: 'Glacial Valley' },
  { day: 'Day 6', location: 'Paro', alt: 2200, distance: '125 km', time: '4-5 hrs', highlight: 'Scenic Ride' },
  { day: 'Day 7', location: 'Paro', alt: 2200, highlight: 'Tiger Nest' },
  { day: 'Day 8', location: 'Phuntsholing', alt: 293, distance: '165 km', time: '5-6 hrs', highlight: 'Farewell' },
];

export default function RouteMap() {
  return (
    <section id="route-section" className="relative min-h-screen py-24 bg-bhutan-cream">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-maroon">
            THE JOURNEY
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl text-bhutan-maroon">
            Valley Circuit Route
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-bhutan-charcoal/80">
            8 days through the heart of the Last Shangri-La. From the border town of Phuntsholing
            to the sacred Tiger's Nest monastery.
          </p>
        </div>

        {/* Route Timeline - Simplified */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bhutan-maroon via-bhutan-mustard to-bhutan-forest" />

            {routeStops.map((stop, i) => (
              <div key={i} className="relative flex gap-6 md:gap-8 mb-8 last:mb-0">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-bhutan-maroon border-4 border-bhutan-cream shadow-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white/60 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-md border border-bhutan-maroon/10 hover:bg-white/80 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <span className="font-mono text-xs text-bhutan-maroon font-semibold">{stop.day}</span>
                      <h3 className="font-display text-xl font-bold text-bhutan-maroon mt-1">{stop.location}</h3>
                      <p className="text-sm text-bhutan-charcoal/70 mt-1">{stop.highlight}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-bhutan-charcoal/60">
                      <div className="flex items-center gap-1">
                        <Mountain className="w-3 h-3" />
                        {stop.alt}m
                      </div>
                      {stop.distance && (
                        <div className="flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          {stop.distance}
                        </div>
                      )}
                      {stop.time && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {stop.time}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Altitude Profile - Clean & Simple */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display mb-6 text-2xl font-semibold text-bhutan-maroon text-center">
            Altitude Profile
          </h3>
          <div className="relative h-48 w-full overflow-hidden rounded-3xl bg-white/50 shadow-inner border border-bhutan-maroon/10">
            <svg viewBox="0 0 800 150" className="h-full w-full">
              <defs>
                <linearGradient id="altLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C41E3A" />
                  <stop offset="50%" stopColor="#E4B01B" />
                  <stop offset="100%" stopColor="#C41E3A" />
                </linearGradient>
                <linearGradient id="altFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(196, 30, 58, 0.3)" />
                  <stop offset="100%" stopColor="rgba(196, 30, 58, 0)" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="0" y1="37.5" x2="800" y2="37.5" stroke="#C41E3A" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.3" />
              <line x1="0" y1="75" x2="800" y2="75" stroke="#C41E3A" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.3" />
              <line x1="0" y1="112.5" x2="800" y2="112.5" stroke="#C41E3A" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.3" />

              {/* Area fill */}
              <path
                d="M0,125 L100,35 L200,35 L300,62 L400,15 L500,30 L600,30 L700,125 L700,150 L0,150 Z"
                fill="url(#altFill)"
              />

              {/* Altitude line - matching the route */}
              <path
                d="M0,125 L100,35 L200,35 L300,62 L400,15 L500,30 L600,30 L700,125"
                stroke="url(#altLine)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Points */}
              <circle cx="0" cy="125" r="5" fill="#C41E3A" />
              <circle cx="100" cy="35" r="5" fill="#E4B01B" />
              <circle cx="200" cy="35" r="5" fill="#2D5A3D" />
              <circle cx="300" cy="62" r="5" fill="#C41E3A" />
              <circle cx="400" cy="15" r="6" fill="#E4B01B" stroke="#fff" strokeWidth="2" />
              <circle cx="500" cy="30" r="5" fill="#2D5A3D" />
              <circle cx="600" cy="30" r="5" fill="#C41E3A" />
              <circle cx="700" cy="125" r="5" fill="#C41E3A" />

              {/* Y-axis labels */}
              <text x="10" y="30" className="text-[10px] fill-bhutan-maroon font-mono font-bold">3000m</text>
              <text x="10" y="70" className="text-[10px] fill-bhutan-charcoal/60 font-mono">2000m</text>
              <text x="10" y="110" className="text-[10px] fill-bhutan-charcoal/60 font-mono">1000m</text>
              <text x="10" y="145" className="text-[10px] fill-bhutan-charcoal/60 font-mono">0m</text>

              {/* Location labels */}
              <text x="0" y="140" className="text-[9px] fill-bhutan-charcoal/60 font-mono" textAnchor="start">Phuntsholing</text>
              <text x="200" y="25" className="text-[9px] fill-bhutan-maroon font-mono font-bold" textAnchor="middle">Thimphu (2350m)</text>
              <text x="400" y="8" className="text-[9px] fill-bhutan-maroon font-mono font-bold" textAnchor="middle">Phobjikha (2900m)</text>
              <text x="600" y="22" className="text-[9px] fill-bhutan-charcoal/60 font-mono" textAnchor="middle">Paro (2200m)</text>
              <text x="700" y="140" className="text-[9px] fill-bhutan-charcoal/60 font-mono" textAnchor="end">Return</text>
            </svg>
          </div>

          {/* Key stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 rounded-xl p-4 text-center border border-bhutan-maroon/10">
              <div className="font-display text-2xl font-bold text-bhutan-maroon">8</div>
              <div className="font-mono text-xs text-bhutan-charcoal/70">Days</div>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center border border-bhutan-maroon/10">
              <div className="font-display text-2xl font-bold text-bhutan-maroon">640</div>
              <div className="font-mono text-xs text-bhutan-charcoal/70">Total KM</div>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center border border-bhutan-maroon/10">
              <div className="font-display text-2xl font-bold text-bhutan-maroon">2,900</div>
              <div className="font-mono text-xs text-bhutan-charcoal/70">Highest Meter</div>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center border border-bhutan-maroon/10">
              <div className="font-display text-2xl font-bold text-bhutan-maroon">6</div>
              <div className="font-mono text-xs text-bhutan-charcoal/70">Valleys</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
