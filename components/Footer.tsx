export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-xl">SILVERPINE TOURS</p>
            <p className="font-mono text-xs text-gray-500 mt-1">BHUTAN VALLEY CIRCUIT 2026</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#itinerary" className="hover:text-bhutan-mustard transition-colors">Itinerary</a>
            <a href="https://wa.me/919876543210" className="hover:text-bhutan-mustard transition-colors">Contact</a>
          </div>
          <p className="font-mono text-xs text-gray-600">© 2026 Bhutan Silverpine Tours</p>
        </div>
      </div>
    </footer>
  );
}
