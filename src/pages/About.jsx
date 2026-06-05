import { CheckCircle2, Shield, HeartHandshake, Eye, Lightbulb } from 'lucide-react';

export default function About({ setCurrentPage }) {

  const values = [
    {
      title: 'Technological Excellence',
      desc: 'We do not build typical websites. We engineer high-speed, secure digital frameworks using React, Vite, and cutting-edge compilers.',
      icon: Shield,
    },
    {
      title: 'Strategic Trust',
      desc: 'Every marketing coin spent is accounted for. We build clear transparent analytics hubs detailing exact attribution and ROI metrics.',
      icon: HeartHandshake,
    },
    {
      title: 'Innovative Growth',
      desc: 'Automation is core to scale. We deploy custom scripts and AI integrations that validate inquiries and optimize workflows.',
      icon: Lightbulb,
    },
    {
      title: 'Bespoke Creative Vision',
      desc: 'Luxury aesthetics inspire action. Our designers craft corporate guidelines that communicate authority, scale, and elegance.',
      icon: Eye,
    },
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-soft-bg min-h-screen relative font-body text-text-primary pb-24">

      {/* Page Header */}
      <section className="bg-navy-deep py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-10 w-64 h-64 rounded-full bg-accent-red/10 blur-[60px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest mb-3 block">
            Who We Are
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Bespoke Media &amp; Tech Engineering
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Bridging the gap between high-end marketing campaigns and robust cloud-edge software deployment.
          </p>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

        {/* Left Visual Dashboard element */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl flex flex-col gap-6 relative z-10">
            <h3 className="font-heading text-xl font-extrabold text-navy-deep">Our Global Reach</h3>

            <div className="flex flex-col gap-4">
              <div className="bg-gray-light p-4 rounded-xl flex items-center justify-between border border-slate-200/50">
                <span className="text-text-secondary text-xs font-semibold">HQ Coordination</span>
                <span className="text-navy-deep font-heading text-sm font-bold">New York &amp; Noida</span>
              </div>
              <div className="bg-gray-light p-4 rounded-xl flex items-center justify-between border border-slate-200/50">
                <span className="text-text-secondary text-xs font-semibold">Active Client Ad Spend</span>
                <span className="text-navy-deep font-heading text-sm font-bold">$40M+ Managed</span>
              </div>
              <div className="bg-gray-light p-4 rounded-xl flex items-center justify-between border border-slate-200/50">
                <span className="text-text-secondary text-xs font-semibold">Corporate Certifications</span>
                <span className="text-navy-deep font-heading text-sm font-bold">Google &amp; Meta Partners</span>
              </div>
            </div>

            <p className="text-slate-400 text-[11px] font-semibold text-center mt-2 leading-relaxed">
              We leverage cloud-edge CDN configurations for instant 50ms loads.
            </p>
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-accent-red/10 blur-xl pointer-events-none" />
        </div>

        {/* Right Details */}
        <div className="lg:col-span-7 text-left flex flex-col gap-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue">
            Core Philosophy
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-navy-deep leading-tight">
            We deliver measurable growth, not marketing promises.
          </h2>

          <p className="text-text-secondary text-sm font-light leading-relaxed">
            Founded in 2022, **Nexstar Media &amp; Technologies** was created to address the fatal flaw of traditional advertising: the technical gap. Most agencies design beautiful creatives but host them on slow, unoptimized infrastructures that lose up to 40% of click traffic.
          </p>

          <p className="text-text-secondary text-sm font-light leading-relaxed">
            By building standard-compliant frontend nodes natively compiled with Tailwind CSS, we ensure that your paid search clicks actually load instantly, driving higher retention and lower Cost-Per-Acquisition.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 text-xs font-semibold text-navy-deep mt-2">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-red shrink-0" /> Enterprise-ready SaaS layouts</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-red shrink-0" /> Bespoke campaign blueprints</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-red shrink-0" /> Clean analytical telemetry</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-red shrink-0" /> Dedicated tech architect allocation</li>
          </ul>
        </div>

      </section>

      {/* Core Values grid */}
      <section className="bg-gray-light/60 py-24 px-6 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue">
              Our Coordinates
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-navy-deep mt-3">
              Values That Guarantee Quality Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm flex gap-6 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-deep/5 border border-navy-deep/10 flex items-center justify-center text-navy-deep shrink-0 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy-deep mb-2">{val.title}</h3>
                    <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Simple Team CTA Banner */}
      <section className="max-w-5xl mx-auto px-6 pt-24 text-center">
        <div className="bg-white border border-gray-200 p-10 sm:p-14 rounded-3xl shadow-lg shadow-slate-100 flex flex-col items-center gap-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-deep">
            Meet the brains behind the operations
          </h2>
          <p className="text-text-secondary text-sm font-light max-w-lg leading-relaxed">
            Interested in tracking our corporate journey or inspecting our specialized executive engineers?
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <button
              onClick={() => handleNavClick('team')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-navy-deep text-xs font-heading font-bold text-white hover:bg-accent-red transition-colors cursor-pointer"
            >
              Meet the Execs
            </button>
            <button
              onClick={() => handleNavClick('our-story')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gray-light hover:bg-gray-200/50 border border-gray-200 text-xs font-heading font-bold text-navy-deep transition-all cursor-pointer"
            >
              View Our Story
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
