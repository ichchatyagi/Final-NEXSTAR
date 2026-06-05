import {
  Code2,
  Smartphone,
  TrendingUp,
  Search,
  Palette,
  Cpu,
  Tv,
  Video,
  ArrowRight,
  CheckCircle2,
  Share2,
  Target,
  ShieldAlert,
  ShoppingBag,
  Eye,
  Database,
  Settings,
  Server,
  Lock,
  Cloud,
  Radio,
  Workflow,
  Globe
} from 'lucide-react';

export default function Services({ setCurrentPage }) {

  const servicesList = [
    {
      id: 'social-media',
      title: 'Social Media Management',
      desc: 'Formulate bespoke corporate social content systems to engage audiences and grow active networks.',
      icon: Share2,
      color: 'text-blue-600 bg-blue-50/5 border-blue-100',
      borderClass: 'border-blue-500/60 hover:border-blue-600',
      bullets: ['Content pipelines planning', 'Executive profile scaling', 'Consistent style voice']
    },
    {
      id: 'creative-branding',
      title: 'Creative & Branding Solutions',
      desc: 'Exquisite vector style systems, corporate typography guidelines, and brand blueprints.',
      icon: Palette,
      color: 'text-violet-600 bg-violet-50/5 border-violet-100',
      borderClass: 'border-violet-500/60 hover:border-violet-600',
      bullets: ['Vector brand logotypes', 'Cohesive visual identity', 'Sora & Inter typography']
    },
    {
      id: 'b2b-marketing',
      title: 'B2B Marketing Campaigns',
      desc: 'High-intent marketing matrices designed to scale qualified executive inquiries.',
      icon: Target,
      color: 'text-navy-deep bg-slate-100 border-slate-200/50',
      borderClass: 'border-slate-800 hover:border-black',
      bullets: ['Corporate account targets', 'Lead generation funnels', 'CPA conversion auditing']
    },
    {
      id: 'search-marketing',
      title: 'Search Marketing Strategy',
      desc: 'Paid media auctions targeting search query loops with transparent attribution logs.',
      icon: Search,
      color: 'text-emerald-600 bg-emerald-50/5 border-emerald-100',
      borderClass: 'border-emerald-500/60 hover:border-emerald-600',
      bullets: ['Keyword match parameters', 'Conversion bidding scripts', 'Competitor keyword theft']
    },
    {
      id: 'video-production',
      title: 'Cinematic Video Production',
      desc: 'Corporate ad spots, premium showcase visuals, and cinematic explainers built to convert.',
      icon: Video,
      color: 'text-rose-600 bg-rose-50/5 border-rose-100',
      borderClass: 'border-rose-500/60 hover:border-rose-600',
      bullets: ['cinematic video shoots', 'Visual storyboard scaling', 'Performance-optimized editing']
    },
    {
      id: 'online-reputation',
      title: 'Online Reputation Management',
      desc: 'Monitor, secure, and protect the digital credentials of your enterprise brand and team.',
      icon: ShieldAlert,
      color: 'text-red-600 bg-red-50/5 border-red-100',
      borderClass: 'border-amber-500/60 hover:border-amber-600',
      bullets: ['Real-time mention logs', 'Technical sentiment scripts', 'Executive profile protection']
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Development',
      desc: 'Fast checkout experiences engineered to optimize conversions and securely handle scales.',
      icon: ShoppingBag,
      color: 'text-amber-600 bg-amber-50/5 border-amber-100',
      borderClass: 'border-amber-500/60 hover:border-amber-600',
      bullets: ['Multi-currency scaling', 'Stripe & payment nodes', 'High-volume db setups']
    },
    {
      id: 'web-development',
      title: 'Website Development',
      desc: 'High-performance React frontend architectures compiled cleanly for edge CDN speed.',
      icon: Code2,
      color: 'text-indigo-600 bg-indigo-50/5 border-indigo-100',
      borderClass: 'border-indigo-500/60 hover:border-indigo-600',
      bullets: ['React 19 & Vite 8', 'Edge CDN caching nodes', 'Under 1s load parameters']
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Engineering',
      desc: 'Fluid native iOS & Android applications featuring React Native or swift logic.',
      icon: Smartphone,
      color: 'text-cyan-600 bg-cyan-50/5 border-cyan-100',
      borderClass: 'border-cyan-500/60 hover:border-cyan-600',
      bullets: ['Cross-platform Swift/RN', 'Offline capability caches', 'Mobile push triggers']
    },
    {
      id: 'augmented-reality',
      title: 'Augmented Reality Systems',
      desc: 'Next-gen browser-based AR visual filters to create high-interaction marketing spots.',
      icon: Eye,
      color: 'text-fuchsia-600 bg-fuchsia-50/5 border-fuchsia-100',
      borderClass: 'border-fuchsia-500/60 hover:border-fuchsia-600',
      bullets: ['Browser-based AR nodes', 'Interactive assets scaling', 'Three.js configurations']
    },
    {
      id: 'web-tech-solutions',
      title: 'Web & Tech Solutions',
      desc: 'Shopify Plus expertise, premium SaaS widgets, and third-party API configurations.',
      icon: Cpu,
      color: 'text-slate-600 bg-slate-50/5 border-slate-100',
      borderClass: 'border-slate-500/60 hover:border-slate-600',
      bullets: ['Shopify Plus parameters', 'Modern SaaS connectors', 'Bespoke widget scripts']
    },
    {
      id: 'database-data-science',
      title: 'Database & Data Science',
      desc: 'Secure SQL/NoSQL clustering, analytical data loops, and programmatic telemetry dashboards.',
      icon: Database,
      color: 'text-emerald-700 bg-emerald-50/10 border-emerald-200/50',
      borderClass: 'border-teal-500/60 hover:border-teal-600',
      bullets: ['Big data pipeline scripts', 'Encrypted data clusters', 'Custom user telemetry']
    },
    {
      id: 'product-engineering',
      title: 'Bespoke Product Engineering',
      desc: 'Draft, prototype, and build unique software tools tailored to scale your brand.',
      icon: Settings,
      color: 'text-purple-600 bg-purple-50/5 border-purple-100',
      borderClass: 'border-purple-500/60 hover:border-purple-600',
      bullets: ['Modular software specs', 'Interactive wireframe builds', 'Secure deployment pipeline']
    },
    {
      id: 'it-management',
      title: 'Managed IT & Tech Services',
      desc: 'Ensure 99.99% system uptime through continuous SRE monitoring and cloud operations.',
      icon: Server,
      color: 'text-zinc-600 bg-zinc-50/5 border-zinc-100',
      borderClass: 'border-zinc-500/60 hover:border-zinc-600',
      bullets: ['SRE cloud monitoring', 'Serverless deployment plans', 'Secure tech consulting']
    },
    {
      id: 'cybersecurity-ai',
      title: 'Cybersecurity & AI Dev',
      desc: 'Deploy validator LLM scripts, secure CRM database interfaces, and validate credentials.',
      icon: Lock,
      color: 'text-rose-600 bg-rose-50/10 border-rose-200/50',
      borderClass: 'border-slate-800 hover:border-black',
      bullets: ['Lead validation AI bots', 'Encrypted API handshakes', 'AI LLM integrations']
    },
    {
      id: 'cloud-hosting',
      title: 'Cloud & Hosting Services',
      desc: 'Secure hosting on AWS, Vercel, and Cloudflare edge servers for lightning response.',
      icon: Cloud,
      color: 'text-sky-600 bg-sky-50/5 border-sky-100',
      borderClass: 'border-sky-500/60 hover:border-sky-600',
      bullets: ['Serverless CDN caching', 'Automatic scaling loads', 'DDoS protection setups']
    },
    {
      id: 'media-broadcast',
      title: 'Media & Programmatic Broadcast',
      desc: 'Connected TV buying, programmatic ad spots, and OTT streaming campaigns.',
      icon: Radio,
      color: 'text-orange-600 bg-orange-50/5 border-orange-100',
      borderClass: 'border-orange-500/60 hover:border-orange-600',
      bullets: ['Connected OTT targets', 'Media auction scripts', 'Video completion logs']
    },
    {
      id: 'social-media-ads',
      title: 'Social Media Advertising',
      desc: 'High-conversion campaigns on Meta, LinkedIn, and TikTok using paid pixel analytics.',
      icon: TrendingUp,
      color: 'text-pink-600 bg-pink-50/5 border-pink-100',
      borderClass: 'border-pink-500/60 hover:border-pink-600',
      bullets: ['Pixel conversions setups', 'Paid audience filtering', 'Comprehensive spend data']
    },
    {
      id: 'zoho-services',
      title: 'Zoho Suite Services',
      desc: 'Establish and automate CRM pipelines and operational workflows inside Zoho.',
      icon: Workflow,
      color: 'text-indigo-600 bg-indigo-50/10 border-indigo-200/50',
      borderClass: 'border-indigo-600/60 hover:border-indigo-700',
      bullets: ['Zoho CRM synchronization', 'Custom workflow triggers', 'Enterprise telemetry logs']
    },
    {
      id: 'domain-booking',
      title: 'Secure Domain Booking',
      desc: 'Acquire premium, corporate brand domains and handle advanced DNS edge settings.',
      icon: Globe,
      color: 'text-teal-600 bg-teal-50/5 border-teal-100',
      borderClass: 'border-teal-600/60 hover:border-teal-700',
      bullets: ['Premium acquisitions', 'Technical DNS cache maps', 'Secure brand registrations']
    }
  ];

  const handleNavClick = (serviceId) => {
    setCurrentPage({ name: 'service-detail', id: serviceId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-soft-bg min-h-screen relative font-body text-text-primary pb-24">

      {/* Page Header */}
      <section className="bg-navy-deep py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-10 w-64 h-64 rounded-full bg-accent-red/10 blur-[60px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest mb-3 block">
            Capabilities Ecosystem
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Our 20 Core Corporate Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Highly engineered operational workflows built with extreme precision and detailed analytical logs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`bg-white border-[3px] ${service.borderClass} rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group`}
              >
                <div>
                  {/* Icon Block */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0 border ${service.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading text-base font-extrabold text-navy-deep mb-2 tracking-tight group-hover:text-highlight-blue transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-text-secondary text-xs font-semibold leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Bullet features */}
                  <ul className="text-[10px] text-slate-400 space-y-2 border-t border-slate-100 pt-4 font-semibold mb-6">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow trigger CTA */}
                <button
                  onClick={() => handleNavClick(service.id)}
                  className="w-full mt-2 flex items-center justify-between rounded-xl bg-gray-light hover:bg-navy-deep hover:text-white px-4 py-3 font-heading text-xs font-bold text-navy-deep transition-all duration-200 cursor-pointer"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-navy-deep text-white rounded-3xl p-10 sm:p-14 shadow-2xl flex flex-col items-center gap-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/20 blur-xl pointer-events-none" />
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Need a bespoke custom solution?
          </h2>
          <p className="text-slate-300 text-sm font-light max-w-md leading-relaxed">
            Our engineers are capable of building custom database integrations, multi-cloud clusters, and highly detailed reporting portals.
          </p>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="rounded-xl bg-accent-red hover:bg-white hover:text-navy-deep hover:scale-105 px-8 py-3.5 font-heading text-xs font-bold text-white transition-all mt-2 cursor-pointer"
          >
            Consult With Our Architects
          </button>
        </div>
      </section>

    </div>
  );
}
