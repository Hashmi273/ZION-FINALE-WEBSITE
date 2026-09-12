import React from 'react';

// Exact original client images from clickconnectmedia.in
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
import arkadeLogo from '../assets/clients/arkade.png';
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
    <section id="clients" className="py-20 relative bg-[#FFFFFF] border-b border-[#E2E8F0] overflow-hidden">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#082844_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Exact Header matching clickconnectmedia.in */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-zion-orange rounded-full" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-zion-orange">
                Trusted by Businesses
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102338] tracking-tight">
              Brand working with us
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] flex items-center justify-center text-zion-blue shadow-sm">
              <svg className="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#D6E4FF] bg-[#EEF4FF] flex items-center justify-center text-zion-blue shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Dual Infinite Scrolling Ticker (Full-Frame Original Cards) */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Marquee Forward */}
          <div className="animate-marquee gap-4 sm:gap-6 mb-4">
            {[...row1, ...row1, ...row1].map((client, idx) => (
              <div
                key={`row1-${client.slug}-${idx}`}
                className="flex-shrink-0 w-[210px] sm:w-[250px] h-[105px] sm:h-[125px] rounded-[16px] bg-[#FFFFFF] border border-[#E4E9EE] p-2 sm:p-3 flex items-center justify-center shadow-[0_10px_26px_rgba(7,25,45,0.075)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)] hover:border-zion-orange/60 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain max-h-[85px] sm:max-h-[100px] pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - Marquee Reverse */}
          <div className="animate-marquee-reverse gap-4 sm:gap-6">
            {[...row2, ...row2, ...row2].map((client, idx) => (
              <div
                key={`row2-${client.slug}-${idx}`}
                className="flex-shrink-0 w-[210px] sm:w-[250px] h-[105px] sm:h-[125px] rounded-[16px] bg-[#FFFFFF] border border-[#E4E9EE] p-2 sm:p-3 flex items-center justify-center shadow-[0_10px_26px_rgba(7,25,45,0.075)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)] hover:border-zion-orange/60 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain max-h-[85px] sm:max-h-[100px] pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Exact Proof Metrics Strip matching clickconnectmedia.in */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-[#E2E7EC] reveal">
          <div className="text-center md:border-r border-[#E1E6EB] px-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-zion-orange mb-1 tracking-tight">
              8+
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-[#607080] uppercase tracking-wider">
              Years of Excellence
            </div>
          </div>

          <div className="text-center md:border-r border-[#E1E6EB] px-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-zion-orange mb-1 tracking-tight">
              1,000+
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-[#607080] uppercase tracking-wider">
              Enterprise Clients
            </div>
          </div>

          <div className="text-center md:border-r border-[#E1E6EB] px-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-zion-orange mb-1 tracking-tight">
              100+
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-[#607080] uppercase tracking-wider">
              Five-Star Ratings
            </div>
          </div>

          <div className="text-center px-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-zion-orange mb-1 tracking-tight">
              98%
            </div>
            <div className="text-[11px] sm:text-xs font-bold text-[#607080] uppercase tracking-wider">
              Client Retention
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
