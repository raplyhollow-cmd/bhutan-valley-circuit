"use client";

import { useEffect, useRef, useState } from 'react';
import { Check, Bed, Utensils, FileText, Truck, User, MapPin, Shield } from 'lucide-react';

const inclusions = [
  { icon: Bed, title: 'Premium Stay', desc: '7 Nights in 3-Star Hotels', included: true },
  { icon: Utensils, title: 'All Meals', desc: 'MAP + Daily Lunch (7 lunches)', included: true },
  { icon: FileText, title: 'Permits & Fees', desc: 'SDF, Entry Fees, Documentation', included: true },
  { icon: Truck, title: 'Support Vehicle', desc: 'Backup Camper with Luggage', included: true },
  { icon: User, title: 'Road Captain', desc: 'Experienced Guide', included: true },
  { icon: MapPin, title: 'Transfers', desc: 'Pickup & Drop from IXB/NJP', included: true },
];

export default function Inclusions() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            inclusions.forEach((_, i) => {
              setTimeout(() => {
                setCheckedItems((prev) => new Set([...prev, i]));
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 bg-bhutan-cream textile-pattern">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-maroon">ALL INCLUSIVE</span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl text-bhutan-charcoal">
            What's Included
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, i) => (
            <div
              key={i}
              className={'bg-white/70 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 shadow-lg border-2 ' + (checkedItems.has(i) ? 'opacity-100 translate-y-0 border-bhutan-mustard' : 'opacity-0 translate-y-8 border-transparent')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-bhutan-maroon/20">
                  <item.icon className="w-6 h-6 text-bhutan-maroon" />
                </div>
                <div className={'w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ' + (checkedItems.has(i) ? 'border-green-600 bg-green-600' : 'border-gray-300')}>
                  {checkedItems.has(i) && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-bhutan-charcoal">{item.title}</h3>
              <p className="text-sm text-bhutan-charcoal/70">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-bhutan-maroon/10 px-6 py-3 border border-bhutan-maroon/30">
            <Shield className="w-5 h-5 text-bhutan-maroon" />
            <span className="font-mono text-sm text-bhutan-charcoal">6 Nights SDF Covered | Sustainable Tourism Fee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
