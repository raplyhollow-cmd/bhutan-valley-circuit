import Hero from '@/components/Hero';
import Vibe from '@/components/Vibe';
import RouteMap from '@/components/RouteMap';
import Itinerary from '@/components/Itinerary';
import BikeSpec from '@/components/BikeSpec';
import Inclusions from '@/components/Inclusions';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Vibe />
      <RouteMap />
      <Itinerary />
      <BikeSpec />
      <Inclusions />
      <CTA />
      <Footer />
    </main>
  );
}
