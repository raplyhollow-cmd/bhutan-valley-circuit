"use client";

import { useState } from 'react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent('Hi Silverpine! I am interested in the Bhutan Valley Circuit expedition. Name: ' + formData.name + ', Phone: ' + formData.phone);
    window.open('https://wa.me/919876543210?text=' + whatsappMsg, '_blank');
  };

  return (
    <section className="relative min-h-screen py-24 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-bhutan-maroon/20 via-bhutan-indigo/20 to-bhutan-forest/20" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-mustard">LIMITED SPOTS</span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl mb-6">
            Ready to Ride the Roof of the World?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the exclusive 2026 expedition. Limited to 12 riders per batch for an intimate, premium experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/919876543210?text=Hi%20Silverpine!%20I'm%20interested%20in%20the%20Bhutan%20Valley%20Circuit%20expedition."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 font-display font-semibold text-black hover:bg-green-400 transition-all hover:scale-105">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="mailto:info@silverpineboutique.com"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-display font-semibold hover:bg-white/10 transition-all hover:scale-105">
              <Mail className="w-5 h-5" />
              Email Inquiry
            </a>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-4 focus:border-bhutan-mustard focus:outline-none transition-colors" />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-6 py-4 focus:border-bhutan-mustard focus:outline-none transition-colors" />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-bhutan-maroon to-bhutan-mustard px-8 py-4 font-display font-semibold hover:opacity-90 transition-all hover:scale-[1.02]">
                Get Detailed Itinerary
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              2026 Dates Open
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-bhutan-mustard" />
              Custom Batches Available
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-bhutan-maroon" />
              Group Discounts
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
