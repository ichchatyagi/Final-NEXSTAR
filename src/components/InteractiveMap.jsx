import { useState } from 'react';
import { MapPin, Phone, Mail, X, Globe2 } from 'lucide-react';
import { worldMapPaths } from '../data/worldMapPaths';

export default function InteractiveMap() {
  const [selectedOffice, setSelectedOffice] = useState(null);

  // Nexstar Office Pinpoints
  const offices = [
    {
      id: 'ny-hq',
      name: 'United States Headquarters',
      coordinateLabel: 'US Coordinate',
      address: '845 3rd Ave 6th floor, New York, NY 10022, United States',
      phone: '+1-917-672-1794',
      email: 'contact@nexstarlive.com',
      x: 608,
      y: 228,
      isMajor: true,
      country: 'United States',
      role: 'Global Headquarters'
    },
    {
      id: 'noida-hub',
      name: 'Noida Technology & Engineering Hub',
      coordinateLabel: 'India Coordinate',
      address: 'Level - 16th & 17th DND Flyway, Plot No.C-001A, Sector 16B, Noida, Uttar Pradesh 201301',
      phone: '+91 98210 00921',
      email: 'contact@nexstarmedia.in',
      x: 1432,
      y: 326,
      isMajor: true,
      country: 'India',
      role: 'Core Engineering & Delivery'
    },
    {
      id: 'london-office',
      name: 'United Kingdom Office',
      coordinateLabel: 'UK Coordinate',
      address: '1st Floor, 239 Kensington High St, London W8 6SN, United Kingdom',
      phone: '+1-917-672-1794',
      x: 976,
      y: 160,
      isMajor: true,
      country: 'United Kingdom',
      role: 'London Corporate Office'
    }
  ];

  const handlePinClick = (office) => {
    setSelectedOffice(office);
  };

  return (
    <div className="relative w-full bg-navy-deep rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-8 overflow-hidden text-left">
      {/* Subtle Ambient Glow in dark navy bezel */}
      <div className="absolute top-0 right-0 w-[450px] h-[300px] bg-highlight-blue/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Map Header */}
      <div className="mb-6 z-10 relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-widest bg-highlight-blue/20 text-highlight-blue border border-highlight-blue/30 mb-2.5">
            <Globe2 className="w-3 h-3 text-highlight-blue" />
            Global Presence
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Nexstar Global Hubs &amp; Coordinates
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 font-light max-w-xl">
            Interactive map of our international operational headquarters, engineering hubs, and client delivery centers.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl">
          <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
          <span>Click any pin to inspect direct office details</span>
        </div>
      </div>

      {/* SVG Map Container (Light Theme inside Dark Navy Frame) */}
      <div className="relative w-full overflow-x-auto select-none rounded-2xl bg-white border border-slate-200/80 shadow-inner z-10">
        <div className="min-w-[800px] w-full relative">
          
          <svg viewBox="0 0 2000 857" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Dot grid pattern for map fill in Light Theme */}
              <pattern id="light-dot-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1.3" fill="#94A3B8" />
              </pattern>
              
              {/* Subtle background coordinate grid */}
              <pattern id="light-canvas-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="0.6" strokeDasharray="2 2" />
              </pattern>
            </defs>

            {/* Background Canvas Tint & Grid */}
            <rect width="2000" height="857" fill="#F8FAFC" />
            <rect width="2000" height="857" fill="url(#light-canvas-grid)" opacity="0.6" />

            {/* Connecting Telemetry Flight Arcs */}
            <g id="arcs">
              {/* NY to London */}
              <path
                d="M 608 228 Q 792 120 976 160"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.8"
                strokeDasharray="5 5"
                strokeOpacity="0.45"
              />
              {/* London to Noida */}
              <path
                d="M 976 160 Q 1204 180 1432 326"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.8"
                strokeDasharray="5 5"
                strokeOpacity="0.45"
              />
            </g>

            {/* Country Paths Rendered with Clean Dot Pattern */}
            <g id="countries">
              {worldMapPaths.map((path, idx) => (
                <path
                  key={idx}
                  d={path.d}
                  fill="url(#light-dot-pattern)"
                  className="transition-all duration-300 hover:fill-[#0EA5E9]/20"
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
                    {/* Glowing outer hover wave */}
                    <circle 
                      r={office.isMajor ? 28 : 18} 
                      fill="none" 
                      stroke="#EF4444" 
                      strokeWidth="2"
                      className={`opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${isSelected ? 'opacity-50' : ''}`}
                    />

                    {/* Blinking ping animation */}
                    <circle 
                      r={office.isMajor ? 18 : 12} 
                      fill="#EF4444" 
                      className="opacity-25 animate-ping duration-1500"
                    />

                    {/* Steady middle halo */}
                    <circle 
                      r={office.isMajor ? 9 : 6} 
                      fill="#EF4444" 
                      className={`opacity-35 group-hover:scale-125 transition-transform duration-300 ${isSelected ? 'scale-125 opacity-60' : ''}`}
                    />

                    {/* Core pin circle */}
                    <circle 
                      r={office.isMajor ? 5 : 3.5} 
                      fill="#DC2626" 
                      className="drop-shadow-md"
                    />

                    {/* White center point */}
                    <circle 
                      r={office.isMajor ? 2 : 1.5} 
                      fill="#FFFFFF" 
                    />

                    {/* Text Label pill directly on map */}
                    <g className="transform -translate-y-6">
                      <rect
                        x="-45"
                        y="-10"
                        width="90"
                        height="18"
                        rx="4"
                        fill="#FFFFFF"
                        stroke="#CBD5E1"
                        strokeWidth="1"
                        className="drop-shadow-xs"
                      />
                      <text
                        x="0"
                        y="3"
                        textAnchor="middle"
                        className="text-[9px] font-heading font-extrabold fill-navy-deep pointer-events-none select-none tracking-wide"
                      >
                        {office.coordinateLabel}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Floating Details Overlay Card */}
          {selectedOffice && (
            <div className="absolute top-4 left-4 right-4 md:right-auto md:w-96 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 z-20 text-left">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-accent-red/10 text-accent-red border border-accent-red/20 inline-block">
                    {selectedOffice.coordinateLabel}
                  </span>
                  <h4 className="font-heading text-sm font-extrabold text-navy-deep mt-1.5">
                    {selectedOffice.name}
                  </h4>
                  {selectedOffice.role && (
                    <span className="text-[11px] font-semibold text-highlight-blue block">
                      {selectedOffice.role}
                    </span>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedOffice(null)}
                  className="text-slate-400 hover:text-navy-deep bg-slate-100 hover:bg-slate-200 p-1.5 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col gap-2.5 text-xs font-semibold text-slate-600 mt-2">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-slate-700">{selectedOffice.address}</p>
                </div>
                
                {selectedOffice.phone && (
                  <div className="flex gap-2.5 items-center">
                    <Phone className="w-4 h-4 text-accent-red shrink-0" />
                    <a href={`tel:${selectedOffice.phone.replace(/\s+/g, '')}`} className="text-navy-deep hover:text-highlight-blue transition-colors">
                      {selectedOffice.phone}
                    </a>
                  </div>
                )}

                {selectedOffice.email && (
                  <div className="flex gap-2.5 items-center">
                    <Mail className="w-4 h-4 text-accent-red shrink-0" />
                    <a href={`mailto:${selectedOffice.email}`} className="text-navy-deep hover:text-highlight-blue transition-colors">
                      {selectedOffice.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>


    </div>
  );
}
