"use client";

import { useState } from 'react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hi Silverpine! I am interested in the Bhutan Valley Circuit expedition.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}`
    );
    window.open('https://wa.me/97517649720?text=' + whatsappMsg, '_blank');
  };

  const handleEmailInquiry = () => {
    const subject = encodeURIComponent('Bhutan Valley Circuit Expedition Inquiry');
    const body = encodeURIComponent(
      `Hi Silverpine Tours,

I am interested in the Bhutan Valley Circuit expedition (8 Days | 7 Nights).

Name: ${formData.name || '[Your Name]'}
Phone: ${formData.phone || '[Your Phone]'}
Email: ${formData.email || '[Your Email]'}

Please share the detailed itinerary and pricing.

Thank you!`
    );
    window.location.href = 'mailto:bsptours.treks@gmail.com?subject=' + subject + '&body=' + body;
  };

  return (
    <section className="relative min-h-screen py-24 flex items-center bg-gradient-to-br from-bhutan-maroon via-bhutan-forest to-bhutan-indigo textile-pattern pb-32">
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-sm tracking-[0.3em] text-bhutan-mustard">LIMITED SPOTS - 2026 SEASON</span>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-6xl mb-8 text-white leading-tight px-4">
            Ready to Ride the Last Shangri-La?
          </h2>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            Join the exclusive Bhutan Valley Circuit expedition. Limited to 12 riders per batch for an intimate, premium experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/97517649720"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 font-display font-semibold text-black hover:bg-green-400 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <button
              onClick={handleEmailInquiry}
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/50 px-8 py-4 font-display font-semibold text-white hover:bg-white/10 transition-all hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </button>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl bg-white/90 border border-white/20 px-6 py-4 focus:border-bhutan-mustard focus:outline-none transition-colors text-bhutan-charcoal"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl bg-white/90 border border-white/20 px-6 py-4 focus:border-bhutan-mustard focus:outline-none transition-colors text-bhutan-charcoal"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl bg-white/90 border border-white/20 px-6 py-4 focus:border-bhutan-mustard focus:outline-none transition-colors text-bhutan-charcoal"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-bhutan-mustard to-bhutan-maroon px-8 py-4 font-display font-semibold text-white hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg"
              >
                Get Detailed Itinerary
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-bhutan-mustard" />
              2026 Dates Open
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-bhutan-mustard" />
              Custom Batches Available
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-bhutan-mustard" />
              Group Discounts
            </div>
          </div>

          <div className="mt-8 text-white/60 text-sm">
            <p>Contact us:</p>
            <p className="font-mono">🇧🇹 Bhutan: +975 1764 9720</p>
            <p className="font-mono">✉️ bsptours.treks@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
