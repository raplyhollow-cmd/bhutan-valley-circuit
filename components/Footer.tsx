export default function Footer() {
  return (
    <footer className="py-12 border-t border-bhutan-maroon/20 bg-bhutan-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-xl text-bhutan-maroon">BHUTAN SILVERPINE TOURS</p>
            <p className="font-mono text-xs text-bhutan-charcoal/60 mt-1">BHUTAN VALLEY CIRCUIT 2026</p>
          </div>
          <div className="flex gap-6 text-sm text-bhutan-charcoal/70">
            <a href="#itinerary" className="hover:text-bhutan-maroon transition-colors">Itinerary</a>
            <a href="https://wa.me/97517649720" className="hover:text-bhutan-maroon transition-colors">Contact</a>
          </div>
          <p className="font-mono text-xs text-bhutan-charcoal/50">© 2026 Bhutan Silverpine Tours</p>
        </div>
      </div>
    </footer>
  );
}
