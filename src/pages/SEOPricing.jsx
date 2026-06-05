import { useState } from 'react';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export default function SEOPricing({ setCurrentPage }) {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('');

  const seoPlans = [
    {
      name: 'Starter Plan',
      target: 'Perfect for new website launches or local brick-and-mortar storefronts aiming to get index-ready and discovered on Google Maps.',
      desc: 'Our Starter tier concentrates on establishing a clean, error-free technical foundation. We optimize your website code, fix missing metadata, and align your local business directories to guarantee search engines can index your site properly.',
      bullets: [
        'Detailed keyword analysis targeting 15 regional search phrases',
        'Google Business Profile setup and review generation roadmap',
        'Correction of critical crawl errors, broken links, and redirect loops',
        'Optimization of titles, meta descriptions, and header tags for all core pages',
        'Generation and submission of XML sitemaps to Google Search Console',
        'Basic page-speed auditing with image compression guidelines',
        'Monthly search traffic growth and keyword ranking position report'
      ],
      popular: false
    },
    {
      name: 'Basic Plan',
      target: 'Designed for growing brands seeking national organic coverage, competitive keyword conquest, and steady lead generation.',
      desc: 'The Basic Plan transitions your search strategy into structured competitive targeting. We deploy clean schema structures and perform in-depth analysis of competitor organic search vectors to capture market share in your industry.',
      bullets: [
        'National-level keyword opportunity audit covering up to 50 search terms',
        'Implementation of structured semantic schemas (JSON-LD) for rich search results',
        'Deep-dive analysis of your top three organic search competitors',
        'Review and correction of mobile usability issues and core UX errors',
        'Monthly internal linking restructuring to distribute domain authority',
        'Optimization of website load performance (Core Web Vitals acceleration)',
        'Bi-weekly custom position logs and organic conversions analysis report'
      ],
      popular: false
    },
    {
      name: 'Enterprise Plan',
      target: 'Suited for established portals, database-driven sites, and enterprises seeking absolute dominate search results.',
      desc: 'Our Enterprise Plan offers exhaustive search marketing domination. We provide a dedicated technical SEO engineer to run automated database speed audits, construct custom schema indexing pipelines, and protect your rankings from competitive theft.',
      bullets: [
        'Unlimited keyword targeting parameters and multi-market search audits',
        'Dedicated technical SEO engineer assigned to your development team',
        'Automated database speed tuning audits and server-response time optimizations',
        'Advanced script deployment to monitor and prevent rank capture by copycats',
        'Custom product and collection page schema modeling for e-commerce sites',
        'Weekly audit reports covering keyword market-share shifts',
        'Real-time custom API ranking telemetry dashboard'
      ],
      popular: false
    },
    {
      name: 'Business Plan',
      target: 'Tailored for multi-location agencies, corporate portfolios, or high-authority web portals needing aggressive brand expansion.',
      desc: 'The Business Plan focuses on scale and authority. We build a high-velocity backlink acquisition strategy, coordinate multi-brand search syndication, and provide direct access to our senior architects via priority Slack channels and phone hotlines.',
      bullets: [
        'Multi-regional and international SEO alignment covering up to 120 key phrases',
        'Advanced Core Web Vitals structural speed engineering and code refactoring',
        'Custom content calendar mapping and high-converting landing page copywriting',
        'Monthly high-authority backlink profiling and link acquisition strategy',
        'Continuous content refresh cycle to maintain old articles ranking authority',
        'Direct access to senior search architects via priority Slack channels',
        'Unlimited custom telemetry reports and monthly strategic consultation calls'
      ],
      popular: true
    }
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
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">

          <button
            onClick={() => handleNavClick('home')}
            className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-1.5 cursor-pointer"
          >
            &larr; Back to Home
          </button>

          <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest mb-3 block">
            Campaign Sub-Pricing
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Technical SEO/GEO Pricing Plans
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Highly optimized search parameters mapped directly to structural conversion metrics.
          </p>
        </div>
      </section>

      {/* Pricing Matrix */}
      <section className="py-24 px-6 max-w-[90rem] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {seoPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-3xl p-8 flex flex-col justify-between text-left relative hover:shadow-xl transition-all duration-300 ${plan.popular
                  ? 'border-highlight-blue shadow-lg shadow-blue-500/5 lg:scale-105 lg:-translate-y-2 z-10'
                  : 'border-gray-200 shadow-sm'
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-highlight-blue text-white text-[10px] font-heading font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  Highly Recommended
                </span>
              )}

              <div>
                <span className="text-[10px] bg-navy-deep/5 text-navy-deep px-2.5 py-1 rounded-md font-heading font-extrabold uppercase tracking-wider mb-3.5 inline-block">
                  Objective
                </span>
                <h3 className="font-heading text-xl font-bold text-navy-deep mb-3">{plan.name}</h3>

                {/* Target objective */}
                <p className="text-slate-700 text-xs font-bold leading-relaxed mb-4 border-l-2 border-accent-red pl-3 bg-gray-50/50 py-1.5 rounded-r-md">
                  {plan.target}
                </p>

                {/* Detailed description */}
                <p className="text-text-secondary text-[11px] leading-relaxed mb-6 font-medium">
                  {plan.desc}
                </p>

                <div className="border-t border-slate-100 pt-5">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block mb-4">
                    What is Included:
                  </span>
                  
                  {/* Feature bullets */}
                  <ul className="text-xs text-text-secondary space-y-3.5 font-semibold mb-8">
                    {plan.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => { setSelectedPlanName(plan.name); setShowContactModal(true); }}
                className={`w-full py-4 rounded-xl font-heading text-xs font-bold tracking-wide transition-all cursor-pointer ${plan.popular
                    ? 'bg-highlight-blue text-white hover:bg-navy-deep shadow-md'
                    : 'bg-gray-light text-navy-deep hover:bg-navy-deep hover:text-white border border-slate-200/50'
                  }`}
              >
                Initiate SEO/GEO Campaign
              </button>

            </div>
          ))}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-navy-deep text-white rounded-3xl p-10 sm:p-14 shadow-2xl flex flex-col items-center gap-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/20 blur-xl pointer-events-none" />
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Need some custom integration?
          </h2>
          <p className="text-slate-300 text-sm font-light max-w-md leading-relaxed">
            Our developers can build bespoke automated schema pipelines and crawler scripts syncable with custom platforms.
          </p>
          <button
            onClick={() => { setSelectedPlanName('Custom Integration'); setShowContactModal(true); }}
            className="rounded-xl bg-accent-red hover:bg-white hover:text-navy-deep hover:scale-105 px-8 py-3.5 font-heading text-xs font-bold text-white transition-all mt-2 cursor-pointer"
          >
            Consult with our team
          </button>
        </div>
      </section>

      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 text-center relative animate-in zoom-in-95 duration-200 flex flex-col items-center gap-5">
            {/* Close Button */}
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-navy-deep transition-colors text-xl font-bold cursor-pointer w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center text-accent-red">
              <Phone className="w-5 h-5" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg font-bold text-navy-deep">Contact Our Sales Team</h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                For starting the <strong className="text-navy-deep">{selectedPlanName}</strong> campaign, contact to our sales team directly:
              </p>
            </div>

            {/* Contact Coordinates */}
            <div className="w-full bg-gray-light/60 border border-slate-100 rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block mb-1">
                  India Coordinator Hotline
                </span>
                <a 
                  href="tel:+919821000921" 
                  className="font-heading text-lg font-extrabold text-navy-deep hover:text-accent-red transition-colors flex items-center gap-1.5"
                >
                  +91 98210 00921
                </a>
              </div>
            </div>

            {/* CTA Close */}
            <button 
              onClick={() => setShowContactModal(false)}
              className="w-full py-3.5 rounded-xl bg-navy-deep text-white font-heading text-xs font-bold tracking-wide hover:bg-accent-red transition-all cursor-pointer shadow-md"
            >
              Understood
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
