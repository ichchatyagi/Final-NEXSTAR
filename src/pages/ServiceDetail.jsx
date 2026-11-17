import { useEffect } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
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
  Layers,
  PhoneCall
} from 'lucide-react';
import { servicesDetailsData } from '../data/servicesDetailsData';
import { coreServices } from '../data/servicesData';

const serviceIcons = {
  'digital-marketing': TrendingUp,
  'creative-branding': Palette,
  'website-software-development': Code2,
  'advanced-tech-engineering': Cpu,
  'ai-business-automation': Bot,
  'it-infrastructure-cybersecurity': ShieldCheck,
  'virtual-assistant-services': Headphones,
  'accounting-bookkeeping': Calculator,
  'media-broadcast-solutions': Radio,
  'business-platforms-infrastructure': Workflow,
};

export default function ServiceDetail({ serviceId, setCurrentPage, currentPage }) {
  // Extract target service ID from props or currentPage object
  const activeId = serviceId || (typeof currentPage === 'object' ? currentPage.id : null) || 'digital-marketing';
  const service = servicesDetailsData[activeId] || servicesDetailsData['digital-marketing'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeId]);

  const handleInquireClick = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (newId) => {
    setCurrentPage({ name: 'service-detail', id: newId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-soft-bg min-h-screen relative font-body text-text-primary pb-20">
      {/* Hero Header Section - Concise & Centered */}
      <section className="bg-navy-deep py-12 sm:py-16 text-white relative overflow-hidden border-b border-slate-800 text-center">
        {/* Ambient Center Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[300px] rounded-full bg-highlight-blue/15 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          {/* Breadcrumb Navigation - Compact Pill */}
          <nav className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-4 bg-white/5 border border-white/10 px-3.5 py-1 rounded-full backdrop-blur-md">
            <button
              onClick={() => setCurrentPage('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <button
              onClick={() => setCurrentPage('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <span className="text-highlight-blue font-bold">{service.title}</span>
          </nav>

          {/* Main Page Heading */}
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight max-w-3xl">
            {service.title}
          </h1>

          {/* Concise Paragraph */}
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base font-light leading-relaxed mb-6 max-w-xl text-center">
            {service.description}
          </p>

          {/* Centered Inquire Action Button */}
          <div>
            <button
              onClick={handleInquireClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-highlight-blue hover:bg-blue-600 hover:scale-105 text-white font-heading text-xs font-bold tracking-wide transition-all shadow-md shadow-highlight-blue/20 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Inquire About {service.title}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Sub-Services Breakdown: Concise Header & Sleek Alternating Cards */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-heading font-extrabold uppercase tracking-widest text-highlight-blue block mb-1.5">
            Capabilities Breakdown
          </span>
          <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-2">
            What We Provide in {service.title}
          </h2>
          <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed">
            Detailed breakdown of all {service.subServices.length} specialized sub-services and deliverables provided for enterprise growth.
          </p>
        </div>

        {/* Sub-Services Stack */}
        <div className="space-y-8">
          {service.subServices.map((cat, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={cat.id}
                id={cat.id}
                className="scroll-mt-32 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-navy-deep/20 transition-all duration-300 overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center p-5 sm:p-7">

                  {/* Visual Image Column: Left on Even, Right on Odd */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-xl overflow-hidden border border-slate-200/70 bg-slate-50/60 shadow-2xs aspect-16/10 flex items-center justify-center p-3 group/img">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Subtle Top-Left Counter Chip */}
                      <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md border border-slate-200/80 px-2 py-0.5 rounded-md shadow-2xs flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-navy-deep">
                          0{idx + 1}
                        </span>
                        <span className="text-[10px] font-heading font-bold text-slate-500 truncate max-w-[120px]">
                          {cat.title}
                        </span>
                      </div>

                      {cat.impact && (
                        <div className="absolute bottom-2.5 right-2.5 bg-blue-50/95 backdrop-blur-md border border-blue-200 px-2 py-0.5 rounded-md text-[10px] font-heading font-extrabold text-highlight-blue shadow-2xs">
                          {cat.impact}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Column: Right on Even, Left on Odd */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      {/* Sub-Service Tagline */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-md bg-navy-deep text-white font-mono text-[10.5px] font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="font-heading text-[10.5px] font-extrabold uppercase tracking-wider text-slate-400">
                          {cat.tagline || 'Specialized Service'}
                        </span>
                      </div>

                      {/* Sub-Service Title */}
                      <h3 className="font-heading text-lg sm:text-xl font-extrabold text-navy-deep mb-2 tracking-tight">
                        {cat.title}
                      </h3>

                      {/* Concise Description */}
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                        {cat.desc}
                      </p>

                      {/* Key Deliverables Container: 2-Column Compact Grid */}
                      <div className="bg-slate-50/70 rounded-xl p-3 sm:p-4 border border-slate-200/60 mb-4">
                        <h4 className="font-heading text-[10.5px] font-extrabold uppercase tracking-wider text-navy-deep mb-2.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-highlight-blue" />
                          <span>Key Deliverables:</span>
                        </h4>

                        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                          {cat.whatWeProvide.slice(0, 4).map((item, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                              <span className="w-1.5 h-1.5 rounded-full bg-highlight-blue mt-1.5 shrink-0" />
                              <span className="line-clamp-2">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Technologies & Action Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                      {cat.tools && cat.tools.length > 0 ? (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-wider mr-1">
                            Stack:
                          </span>
                          {cat.tools.slice(0, 4).map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : <div />}

                      <button
                        onClick={handleInquireClick}
                        className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-navy-deep hover:text-highlight-blue transition-colors cursor-pointer group/cta"
                      >
                        <span>Inquire About {cat.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategic Consultation Banner - Compact */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-navy-deep rounded-2xl p-7 sm:p-10 text-white relative overflow-hidden shadow-lg text-center flex flex-col items-center">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-highlight-blue/15 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="text-[10.5px] font-heading font-extrabold uppercase tracking-widest text-highlight-blue block mb-1.5">
              Ready To Accelerate?
            </span>
            <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight leading-tight">
              Scale Your Operations with Our {service.title} Architecture
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-light mb-6 leading-relaxed">
              Consult with our enterprise architects to design an integrated execution roadmap tailored directly to your commercial objectives.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleInquireClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-highlight-blue hover:bg-blue-600 font-heading text-xs font-bold text-white transition-all shadow-md shadow-highlight-blue/20 cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-heading text-xs font-bold text-white transition-all cursor-pointer"
              >
                <span>Browse All Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Service Navigation */}
      <section className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-slate-400 block mb-0.5">
              Explore Our Ecosystem
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-extrabold text-navy-deep">
              Other Core Enterprise Services
            </h3>
          </div>
          <button
            onClick={() => setCurrentPage('services')}
            className="text-xs font-heading font-bold text-navy-deep hover:text-highlight-blue inline-flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {coreServices
            .filter((s) => s.id !== activeId)
            .slice(0, 6)
            .map((s) => {
              const Icon = serviceIcons[s.id] || Layers;
              return (
                <button
                  key={s.id}
                  onClick={() => handleServiceSelect(s.id)}
                  className="w-full text-left p-3.5 rounded-xl border border-slate-200/80 bg-white hover:border-navy-deep/40 hover:shadow-sm transition-all group cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${s.theme.iconBox}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-heading text-xs font-bold text-navy-deep group-hover:text-highlight-blue transition-colors truncate block">
                        {s.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-body block truncate">
                        {s.subServices.length} sub-services
                      </span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-navy-deep group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white" />
                  </div>
                </button>
              );
            })}
        </div>
      </section>
    </div>
  );
}
