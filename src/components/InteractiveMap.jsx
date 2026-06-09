import { useState } from 'react';
import { MapPin, Phone, Mail, X } from 'lucide-react';
import { worldMapPaths } from '../data/worldMapPaths';

export default function InteractiveMap() {
  const [selectedOffice, setSelectedOffice] = useState(null);

  // Nexstar Office Pinpoints
  const offices = [
    {
      id: 'ny-hq',
      name: 'US',
      coordinateLabel: 'US Coordinate',
      address: '845 3rd Ave 6th floor, New York, NY 10022, United States',
      phone: '+1-917-672-1794',
      email: 'contact@nexstarlive.com',
      x: 608,
      y: 228,
      isMajor: true,
    },
    {
      id: 'noida-hub',
      name: 'Noida Technology Hub',
      coordinateLabel: 'India Coordinate',
      address: 'Level - 16th & 17th DND Flyway, Plot No.C-001A, Sector 16B, Noida, Uttar Pradesh 201301',
      phone: '+91 98210 00921',
      email: 'contact@nexstarmedia.in',
      x: 1432,
      y: 326,
      isMajor: true,
    },
    {
      id: 'london-office',
      name: 'United Kingdom',
      coordinateLabel: 'UK Coordinate',
      address: '1st Floor, 239 Kensington High St, London W8 6SN, United Kingdom',
      x: 976,
      y: 160,
      isMajor: true,
    }
  ];

  const handlePinClick = (office) => {
    setSelectedOffice(office);
  };

  return (
    <div className="relative w-full bg-[#030712] rounded-3xl border border-gray-800 overflow-hidden shadow-2xl p-4 sm:p-8">
      
      {/* Map Header */}
      <div className="mb-6 z-10 relative text-left">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
          Nexstar Global Offices
        </h3>
        <p className="text-gray-400 text-xs mt-1 font-light">
          Interactive view of our main headquarters and global edge servers. Click a pulsing node to inspect.
        </p>
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full overflow-x-auto select-none rounded-2xl bg-[#090D1A] border border-gray-900">
        <div className="min-w-[800px] w-full relative">
          
          <svg viewBox="0 0 2000 857" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Dot grid pattern for map fill */}
              <pattern id="dot-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1.2" fill="#242e42" />
              </pattern>
              
              {/* Active hover dot grid pattern */}
              <pattern id="dot-pattern-hover" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1.5" fill="#475569" />
              </pattern>
            </defs>

            {/* Background Grid Pattern (Subtle grid layout of the overall map canvas) */}
            <rect width="2000" height="857" fill="#090D1A" />

            {/* Country Paths Rendered with Dot Pattern */}
            <g id="countries">
              {worldMapPaths.map((path, idx) => (
                <path
                  key={idx}
                  d={path.d}
                  fill="url(#dot-pattern)"
                  className="transition-all duration-300 hover:fill-[#1E293B]/20"
                />
              ))}
            </g>

            {/* Interactive Pulse Pins */}
            <g id="pins">
              {offices.map((office) => {
                const isSelected = selectedOffice?.id === office.id;
                
                return (
                  <g 
                    key={office.id} 
                    transform={`translate(${office.x}, ${office.y})`}
                    className="cursor-pointer group"
                    onClick={() => handlePinClick(office)}
                  >
                    {/* Glowing outer rings */}
                    <circle 
                      r={office.isMajor ? 26 : 16} 
                      fill="none" 
                      stroke={office.isMajor ? '#EF4444' : '#22D3EE'} 
                      strokeWidth="1.5"
                      className={`opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${isSelected ? 'opacity-40' : ''}`}
                    />

                    {/* Blinking wave rings */}
                    <circle 
                      r={office.isMajor ? 18 : 12} 
                      fill={office.isMajor ? '#EF4444' : '#22D3EE'} 
                      className={`opacity-15 animate-ping duration-1500`}
                    />

                    {/* Steady inner halo */}
                    <circle 
                      r={office.isMajor ? 8 : 5} 
                      fill={office.isMajor ? '#EF4444' : '#22D3EE'} 
                      className={`opacity-40 group-hover:scale-125 transition-transform duration-300 ${isSelected ? 'scale-125 opacity-70' : ''}`}
                    />

                    {/* Precise core pinpoint dot */}
                    <circle 
                      r={office.isMajor ? 4 : 2.5} 
                      fill="#FFFFFF" 
                      className="shadow-xl"
                    />
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Floating Details Overlay Card */}
          {selectedOffice && (
            <div className="absolute top-4 left-4 right-4 md:right-auto md:w-96 bg-gray-950/85 backdrop-blur-md border border-gray-800 rounded-2xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 z-20 text-left">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md ${
                    selectedOffice.isMajor ? 'bg-accent-red/20 text-accent-red' : 'bg-cyan-500/20 text-cyan-400'
                  }`}>
                    {selectedOffice.coordinateLabel}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-white mt-1.5">
                    {selectedOffice.name}
                  </h4>
                </div>
                <button 
                  onClick={() => setSelectedOffice(null)}
                  className="text-gray-400 hover:text-white bg-gray-900/80 p-1.5 rounded-lg border border-gray-800 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col gap-3 text-xs font-semibold text-gray-300">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{selectedOffice.address}</p>
                </div>
                
                {selectedOffice.phone && (
                  <div className="flex gap-2.5 items-center">
                    <Phone className="w-4 h-4 text-accent-red shrink-0" />
                    <a href={`tel:${selectedOffice.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                      {selectedOffice.phone}
                    </a>
                  </div>
                )}

                {selectedOffice.email && (
                  <div className="flex gap-2.5 items-center">
                    <Mail className="w-4 h-4 text-accent-red shrink-0" />
                    <a href={`mailto:${selectedOffice.email}`} className="hover:text-white transition-colors">
                      {selectedOffice.email}
                    </a>
                  </div>
                )}
              </div>

              {!selectedOffice.isMajor && (
                <div className="mt-4 pt-3 border-t border-gray-900 text-[10px] text-gray-500 font-light italic">
                  This edge node represents part of our global low-latency CDN network.
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Worldwide Locations Footer */}
      <div className="mt-6 pt-4 border-t border-gray-800/60 text-left">
        <span className="text-[10px] text-gray-500 font-heading font-extrabold uppercase tracking-widest block mb-1.5">
          Worldwide Locations
        </span>
        <div className="flex flex-wrap gap-3 items-center text-xs font-bold text-gray-300">
          <span>India</span>
          <span className="text-gray-750 font-normal">&bull;</span>
          <span>United Kingdom</span>
          <span className="text-gray-750 font-normal">&bull;</span>
          <span>United States</span>
        </div>
      </div>
    </div>
  );
}
