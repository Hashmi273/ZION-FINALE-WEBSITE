import React from 'react';
import { ShieldCheck, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

// Import all client logos from src/assets/clients so Vite bundles them as hashed assets
import theGuardiansLogo from '../assets/clients/the-guardians.png';
import justoLogo from '../assets/clients/justo.jpg';
import onboardLogo from '../assets/clients/onboard.png';
import theEstatemantLogo from '../assets/clients/the-estatemant.png';
import triveniLogo from '../assets/clients/triveni.png';
import veenaDeveloperLogo from '../assets/clients/veena-developer.png';
import sethiaLogo from '../assets/clients/sethia.png';
import crescentLogo from '../assets/clients/crescent.png';
import hawareLogo from '../assets/clients/haware.png';
import satvaLogo from '../assets/clients/satva.png';
import kanakiaLogo from '../assets/clients/kanakia.png';
import arkadeLogo from '../assets/clients/arkade.webp';
import trycityLogo from '../assets/clients/trycity.png';
import sunteckLogo from '../assets/clients/sunteck.png';
import anarockLogo from '../assets/clients/anarock.png';

const clientList = [
  { name: 'The Guardians', slug: 'the-guardians', logo: theGuardiansLogo },
  { name: 'Justo', slug: 'justo', logo: justoLogo },
  { name: 'Onboard', slug: 'onboard', logo: onboardLogo },
  { name: 'The Estatemant', slug: 'the-estatemant', logo: theEstatemantLogo },
  { name: 'Triveni', slug: 'triveni', logo: triveniLogo },
  { name: 'Veena Developer', slug: 'veena-developer', logo: veenaDeveloperLogo },
  { name: 'Sethia', slug: 'sethia', logo: sethiaLogo },
  { name: 'Crescent', slug: 'crescent', logo: crescentLogo },
  { name: 'Haware', slug: 'haware', logo: hawareLogo },
  { name: 'Satva', slug: 'satva', logo: satvaLogo },
  { name: 'Kanakia', slug: 'kanakia', logo: kanakiaLogo },
  { name: 'Arkade', slug: 'arkade', logo: arkadeLogo },
  { name: 'TryCity', slug: 'trycity', logo: trycityLogo },
  { name: 'Sunteck', slug: 'sunteck', logo: sunteckLogo },
  { name: 'Anarock', slug: 'anarock', logo: anarockLogo },
];

export default function ClientsSection() {
  const row1 = clientList.slice(0, 8);
  const row2 = clientList.slice(8);

  return (
    <section id="clients" className="py-20 relative bg-white border-b border-[#E2E8F0] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEF4FF]/40 via-white to-white pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#D6E4FF]/30 via-[#FF6B00]/05 to-[#D6E4FF]/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-zion-orange shadow-[0_0_6px_#FF6B00]" />
            <span className="text-xs font-bold text-zion-blue uppercase tracking-wider">
              Trusted Enterprise Client Base
            </span>
            <Sparkles className="w-3.5 h-3.5 text-zion-orange" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zion-deep-blue mb-4 tracking-tight">
            Trusted by India’s Leading <span className="text-zion-orange">Brands & Enterprises</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zion-dark-gray font-normal max-w-2xl">
            Powering mission-critical SMS, RCS, WhatsApp Business API, and automated voice campaigns for premier real estate developers, financial firms, and high-growth brands.
          </p>
        </div>

        {/* Quick Trust Highlights Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 reveal">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF4FF] border border-[#D6E4FF] text-xs sm:text-sm font-semibold text-zion-deep-blue shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-zion-orange" />
            <span>500+ Enterprise Deployments</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF4FF] border border-[#D6E4FF] text-xs sm:text-sm font-semibold text-zion-deep-blue shadow-sm">
            <ShieldCheck className="w-4 h-4 text-zion-blue" />
            <span>100% TRAI & DLT Compliant Routes</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF4FF] border border-[#D6E4FF] text-xs sm:text-sm font-semibold text-zion-deep-blue shadow-sm">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>99.9% On-Time Delivery Rate</span>
          </div>
        </div>

        {/* Dual Infinite Scrolling Ticker (Left to Right & Right to Left) */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient Masks on Left & Right for seamless fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Marquee Forward */}
          <div className="animate-marquee gap-5 sm:gap-7 mb-5">
            {[...row1, ...row1, ...row1].map((client, idx) => (
              <div
                key={`row1-${client.slug}-${idx}`}
                className="group relative flex-shrink-0 w-44 sm:w-52 h-24 sm:h-28 rounded-2xl bg-white border border-[#D6E4FF] hover:border-zion-orange p-4 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 card-lift"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 sm:max-h-16 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-1 text-[9px] font-semibold text-zion-slate opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 - Marquee Reverse */}
          <div className="animate-marquee-reverse gap-5 sm:gap-7">
            {[...row2, ...row2, ...row2].map((client, idx) => (
              <div
                key={`row2-${client.slug}-${idx}`}
                className="group relative flex-shrink-0 w-44 sm:w-52 h-24 sm:h-28 rounded-2xl bg-white border border-[#D6E4FF] hover:border-zion-orange p-4 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 card-lift"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 sm:max-h-16 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-1 text-[9px] font-semibold text-zion-slate opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Grid Showcase */}
        <div className="mt-14 pt-12 border-t border-[#EEF4FF] reveal">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-zion-blue">
              Featured Client Network
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {clientList.map((client, idx) => (
              <div
                key={client.slug}
                className="bg-white/90 border border-[#D6E4FF] hover:border-zion-blue rounded-xl p-4 flex flex-col items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className="h-12 w-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="text-[11px] font-bold text-zion-deep-blue group-hover:text-zion-orange transition-colors text-center truncate w-full">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
