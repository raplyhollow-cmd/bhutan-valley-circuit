"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin, Mountain, Clock, ArrowRight } from 'lucide-react';

const days = [
  { day: 1, title: 'Arrival & Permits', location: 'Phuntsholing (Pling)', alt: 293, distance: null, time: null, image: '/assets/Chuzom.jpg', description: 'Border formalities, acclimatization, and route planning.', highlight: 'Gateway to the Thunder Dragon' },
  { day: 2, title: 'The Ascent to Paro', location: 'Phuntsholing to Paro', alt: 2200, distance: '165 km', time: '5-6 hours', image: '/assets/Paro3.jpg', description: 'Major altitude gain through winding mountain roads.', highlight: 'Dramatic elevation climb' },
  { day: 3, title: 'Tiger Nest Hike', location: 'Paro Local', alt: 2200, distance: '10 km local', time: '5-6 hours hiking', image: '/assets/tigernesttrial.jpg', description: 'The iconic Taktsang Goemba perched on cliff edge.', highlight: 'Sacred monastery visit' },
  { day: 4, title: 'Dochula Pass & Punakha', location: 'Paro to Punakha', alt: 1350, distance: '125 km', time: '3.5-4 hours', image: '/assets/Punakha_Dzong1.jpg', description: 'Architectural and historical heart of Bhutan.', highlight: 'Punakha Dzong exploration' },
  { day: 5, title: 'The Hidden Valley', location: 'Punakha to Phobjikha', alt: 2900, distance: '80 km', time: '3-4 hours', image: '/assets/phobjika-valley.jpg', description: 'Pristine glacial valley, Black Mountain National Park.', highlight: 'Black-necked cranes sanctuary' },
  { day: 6, title: 'Return to Thimphu', location: 'Phobjikha to Thimphu', alt: 2350, distance: '135 km', time: '5-6 hours', image: '/assets/Thimphu1.jpg', description: 'Capital city sights and landmarks.', highlight: 'Buddha Dordenma statue' },
  { day: 7, title: 'Thimphu Sightseeing', location: 'Thimphu Local', alt: 2350, distance: '30 km local', time: 'Full day', image: '/assets/Buddha_Point.jpg', description: 'Culture and history. Preparing for the long descent.', highlight: 'Memorial Chorten visit' },
  { day: 8, title: 'Departure', location: 'Phuntsholing to Drop', alt: 293, distance: null, time: null, image: '/assets/parobridge.jpg', description: 'Exit formalities and onward journey.', highlight: 'Farewell to the Kingdom' },
];

export default function Itinerary() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      scrollContainerRef.current.scrollTo({ left: index * (cardWidth + 24), behavior: 'smooth' });
    }
  };

  const nextCard = () => { setCurrentIndex((p) => { const n = Math.min(p + 1, days.length - 1); scrollToCard(n); return n; }); };
  const prevCard = () => { setCurrentIndex((p) => { const n = Math.max(p - 1, 0); scrollToCard(n); return n; }); };

  return (
    <section id="itinerary" className="relative min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-mustard">8 DAYS OF ADVENTURE</span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl">The Expedition</h2>
        </div>
        <div className="relative">
          <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {days.map((day, index) => (
              <div key={day.day} className="day-card group relative flex-shrink-0 snap-start cursor-pointer" onClick={() => setCurrentIndex(index)}>
                <Image src={day.image} alt={day.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-5xl font-bold text-bhutan-maroon/50">{String(day.day).padStart(2, '0')}</span>
                    <div className="h-px flex-1 bg-bhutan-mustard/50" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{day.title}</h3>
                  <p className="flex items-center gap-2 text-sm text-gray-300 mb-2"><MapPin className="w-4 h-4 text-bhutan-mustard" />{day.location}</p>
                  <div className="flex gap-4 mb-3 flex-wrap">
                    {day.distance && <div className="flex items-center gap-1 text-xs font-mono"><ArrowRight className="w-3 h-3" />{day.distance}</div>}
                    {day.alt && <div className="flex items-center gap-1 text-xs font-mono"><Mountain className="w-3 h-3" />{day.alt}m</div>}
                    {day.time && <div className="flex items-center gap-1 text-xs font-mono"><Clock className="w-3 h-3" />{day.time}</div>}
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">{day.description}</p>
                  <div className="mt-3 inline-block rounded-full bg-bhutan-mustard/20 px-3 py-1 text-xs font-mono text-bhutan-mustard">{day.highlight}</div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevCard} disabled={currentIndex === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-bhutan-maroon/80 backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-30"><ChevronLeft className="w-6 h-6" /></button>
          <button onClick={nextCard} disabled={currentIndex === days.length - 1} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-bhutan-maroon/80 backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-30"><ChevronRight className="w-6 h-6" /></button>
        </div>
        <div className="mt-8 flex justify-center gap-2">{days.map((_, i) => (<button key={i} onClick={() => { setCurrentIndex(i); scrollToCard(i); }} className={'h-2 rounded-full transition-all ' + (i === currentIndex ? 'w-8 bg-bhutan-mustard' : 'w-2 bg-white/20')} />))}</div>
      </div>
    </section>
  );
}
