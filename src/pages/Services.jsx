import { useState, useMemo, useEffect } from 'react';
import {
  TrendingUp,
  Palette,
  Code2,
  Cpu,
  Bot,
  ShieldCheck,
  Headphones,
  Calculator,
  Radio,
  Workflow,
  ArrowRight,
  Search,
  Layers
} from 'lucide-react';
import { coreServices } from '../data/servicesData';

// Icon mapping dictionary
const iconMap = {
  TrendingUp,
  Palette,
  Code2,
  Cpu,
  Bot,
  ShieldCheck,
  Headphones,
  Calculator,
  Radio,
  Workflow,
};

export default function Services({ setCurrentPage, currentPage }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (currentPage && typeof currentPage === 'object' && currentPage.id) {
      const timer = setTimeout(() => {
        const el = document.getElementById(currentPage.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  // Filter services by search query
  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return coreServices;

    return coreServices.filter((service) => {
      const matchesTitle = service.title.toLowerCase().includes(q);
      const matchesDesc = service.desc.toLowerCase().includes(q);
      const matchesSubService = service.subServices.some((sub) =>
        sub.toLowerCase().includes(q)
      );
      return matchesTitle || matchesDesc || matchesSubService;
    });
  }, [searchQuery]);

  const handleInquireClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-soft-bg min-h-screen relative font-body text-text-primary pb-24">
      {/* Page Header */}
      <section className="bg-navy-deep py-16 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-accent-red/10 blur-[70px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Services and Specialized Solutions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade digital infrastructure, strategic marketing, intelligent automation, and operational solutions built for global scale.
          </p>
        </div>
      </section>

      {/* Clean Compact Search Bar */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-2">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200/90 bg-white text-xs font-semibold text-navy-deep placeholder:text-slate-400 focus:outline-none focus:border-navy-deep shadow-sm transition-all"
            />
          </div>
        </div>
      </section>

      {/* Concise Services Grid */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200/80 max-w-md mx-auto my-8 shadow-sm">
            <Layers className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-base text-navy-deep mb-1">No services found</h3>
            <p className="text-xs text-text-secondary mb-4">
              Try adjusting your search query.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 bg-navy-deep text-white text-xs font-heading font-bold rounded-xl cursor-pointer hover:bg-accent-red transition-colors"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.iconName] || Layers;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`bg-white border-2 ${service.theme.border} rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  {/* Subtle corner glow */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-slate-50 rounded-bl-full -z-0 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                  <div className="relative z-10">
                    {/* Header Row: Icon and Number */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${service.theme.iconBox} shadow-sm group-hover:scale-105 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-slate-400 block">
                            Vertical {service.number}
                          </span>
                        </div>
                      </div>

                      <span className="font-heading font-black text-xl text-slate-200 group-hover:text-slate-300 transition-colors">
                        #{service.number}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h2 className="font-heading text-lg sm:text-xl font-extrabold text-navy-deep mb-2 tracking-tight group-hover:text-highlight-blue transition-colors">
                      {service.title}
                    </h2>

                    {/* Concise Description */}
                    <p className="text-text-secondary text-xs sm:text-sm font-normal leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bottom Explore Action */}
                  <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center">
                    <button
                      onClick={() => setCurrentPage({ name: 'service-detail', id: service.id })}
                      className="w-full flex items-center justify-between rounded-xl bg-navy-deep hover:bg-highlight-blue text-white px-5 py-3 font-heading text-xs font-bold transition-all duration-200 cursor-pointer shadow-md shadow-navy-deep/10 group-hover:shadow-lg"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Direct Contact Banner */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-8">
        <div className="bg-navy-deep text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-accent-red/20 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-44 h-44 bg-blue-500/20 blur-2xl pointer-events-none" />

          <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest block">
            Custom Architecture
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
            Need a bespoke custom solution across multiple verticals?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-light max-w-lg leading-relaxed">
            Our engineers and system architects are ready to formulate hybrid integrations, custom software developments, multi-channel growth systems, and dedicated team allocations.
          </p>
          <button
            onClick={handleInquireClick}
            className="rounded-xl bg-accent-red hover:bg-white hover:text-navy-deep hover:scale-105 px-7 py-3 font-heading text-xs font-bold text-white transition-all mt-2 cursor-pointer shadow-lg shadow-accent-red/20"
          >
            Consult With Our Architects
          </button>
        </div>
      </section>
    </div>
  );
}