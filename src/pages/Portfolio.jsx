import { useState } from 'react';
import { CheckCircle2, Star } from 'lucide-react';

export default function Portfolio({ setCurrentPage }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web & Mobile Dev', value: 'web-mobile-dev' },
    { label: 'Cybersecurity & AI', value: 'cybersecurity-ai' },
    { label: 'Paid Ads & Media', value: 'paid-ads-media' },
    { label: 'Zoho Suite Solutions', value: 'zoho-suite-solutions' },
    { label: 'Creative Branding & AR', value: 'creative-branding-ar' },
  ];

  const projects = [
    // Web & Mobile Dev
    {
      title: 'E-Commerce Website Development',
      category: 'web-mobile-dev',
      tag: 'Web & Mobile Dev',
      metric: '50% Loading Speed Boost',
      desc: 'Designed and developed a fully responsive e-commerce online store with integrated payment gateways and optimized checkout experience.',
      tech: ['React', 'Node.js', 'Stripe Integration', 'Tailwind CSS'],
      highlights: ['High-performance page rendering', 'Secure checkout and payment gateways'],
      imageColor: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Cross-Platform Mobile App',
      category: 'web-mobile-dev',
      tag: 'Web & Mobile Dev',
      metric: '100k+ App Downloads',
      desc: 'Created a high-performance cross-platform mobile application for Android and iOS devices, featuring real-time chat and push notifications.',
      tech: ['React Native', 'Firebase', 'Redux Toolkit', 'App Store SEO'],
      highlights: ['Native-like iOS & Android feel', 'Push notification automation setup'],
      imageColor: 'from-[#3B82F6] to-cyan-500',
    },
    {
      title: 'Custom SaaS Client Portal',
      category: 'web-mobile-dev',
      tag: 'Web & Mobile Dev',
      metric: '40% Workflow Efficiency',
      desc: 'Built a secure custom client portal and dashboard system to streamline customer onboarding, billing, and document sharing.',
      tech: ['Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
      highlights: ['Secure user authentication', 'Automated document processing'],
      imageColor: 'from-emerald-600 to-teal-500',
    },
    {
      title: 'Real Estate Listing Platform',
      category: 'web-mobile-dev',
      tag: 'Web & Mobile Dev',
      metric: '3x User Lead Generation',
      desc: 'Developed a modern property listing search website with interactive map integration, advanced filtering options, and lead capture forms.',
      tech: ['React.js', 'Google Maps API', 'Tailwind CSS', 'Vite'],
      highlights: ['Interactive map listing views', 'Advanced filtering engine'],
      imageColor: 'from-amber-600 to-orange-500',
    },
    {
      title: 'Food Delivery Web App',
      category: 'web-mobile-dev',
      tag: 'Web & Mobile Dev',
      metric: '85% Online Order Growth',
      desc: 'Built a direct online food ordering and delivery management system for local restaurant chains, optimizing mobile ordering flows.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      highlights: ['Real-time order status updates', 'Mobile-first layout structure'],
      imageColor: 'from-indigo-600 to-violet-500',
    },

    // Cybersecurity & AI
    {
      title: 'Network Security & Firewall Audit',
      category: 'cybersecurity-ai',
      tag: 'Cybersecurity & AI',
      metric: '99.9% Threat Mitigation',
      desc: 'Configured advanced enterprise firewall solutions and conducted network vulnerability assessments to prevent unauthorized access.',
      tech: ['Vulnerability Assessment', 'Firewall Config', 'SSL/TLS Security', 'Cloudflare'],
      highlights: ['Full vulnerability scan', 'Advanced firewall config'],
      imageColor: 'from-violet-600 to-indigo-500',
    },
    {
      title: 'AI Chatbot Integration',
      category: 'cybersecurity-ai',
      tag: 'Cybersecurity & AI',
      metric: '70% Automated Resolution',
      desc: 'Implemented an intelligent AI-powered conversational chatbot to automate customer support inquiries and route complex issues.',
      tech: ['OpenAI API', 'NLP Models', 'React Integrations', 'System Prompt Tuning'],
      highlights: ['Automated inquiry resolution', 'Seamless system integration'],
      imageColor: 'from-purple-600 to-pink-500',
    },
    {
      title: 'Cloud Data Encryption Setup',
      category: 'cybersecurity-ai',
      tag: 'Cybersecurity & AI',
      metric: '100% Data Compliance',
      desc: 'Designed a secure cloud storage solution with end-to-end data encryption, meeting strict GDPR and HIPAA compliance requirements.',
      tech: ['AWS Security', 'E2E Encryption', 'IAM Access Control', 'Compliance Audits'],
      highlights: ['HIPAA & GDPR compliant encryption', 'Fine-grained access control policies'],
      imageColor: 'from-blue-900 to-[#E63946]',
    },
    {
      title: 'Threat Detection & Monitoring',
      category: 'cybersecurity-ai',
      tag: 'Cybersecurity & AI',
      metric: 'Instant Incident Alerts',
      desc: 'Set up active intrusion detection monitoring systems and log analysis protocols to safeguard corporate databases from DDoS attacks.',
      tech: ['Intrusion Detection', 'Log Analysis', 'DDoS Protection', 'SIEM Tools'],
      highlights: ['24/7 active DDoS shield', 'Instant incident alert setup'],
      imageColor: 'from-slate-800 to-slate-900',
    },
    {
      title: 'AI Business Analytics Dashboard',
      category: 'cybersecurity-ai',
      tag: 'Cybersecurity & AI',
      metric: '92% Sales Forecast Accuracy',
      desc: 'Developed predictive machine learning models to analyze consumer purchasing behavior and optimize inventory forecasting.',
      tech: ['Machine Learning', 'Python Scikit-Learn', 'Data Visualization', 'Pandas'],
      highlights: ['Highly accurate forecasting models', 'Interactive visual charts'],
      imageColor: 'from-[#0B1F3A] to-[#E63946]',
    },

    // Paid Ads & Media
    {
      title: 'Google Search PPC Management',
      category: 'paid-ads-media',
      tag: 'Paid Ads & Media',
      metric: '4.2x Google Ads ROAS',
      desc: 'Designed, executed, and optimized high-intent Google Search advertising campaigns targeting commercial keywords to maximize lead conversion.',
      tech: ['Google Ads', 'Keyword Research', 'Negative Match Optimization', 'A/B Testing'],
      highlights: ['Targeted keyword optimization', 'Reduced cost-per-click rates'],
      imageColor: 'from-emerald-600 to-teal-500',
    },
    {
      title: 'Facebook & Instagram Lead Generation',
      category: 'paid-ads-media',
      tag: 'Paid Ads & Media',
      metric: '3.5x Facebook Ads ROAS',
      desc: 'Created high-converting ad creatives and lookalike target audiences for Facebook and Instagram to scale lead capture.',
      tech: ['Meta Ads Manager', 'Custom Audience Targeting', 'Ad Creative Design', 'CPA Scaling'],
      highlights: ['Engaging social ad creatives', 'Optimized audience targeting'],
      imageColor: 'from-[#0B1F3A] to-[#1E293B]',
    },
    {
      title: 'E-Commerce Social Media Ads',
      category: 'paid-ads-media',
      tag: 'Paid Ads & Media',
      metric: '3x Social Revenue Growth',
      desc: 'Launched multi-channel social media ads focusing on dynamic remarketing and product catalog sales to boost checkout conversions.',
      tech: ['Meta Pixel Integration', 'Dynamic Product Ads', 'Budget Optimization', 'ROAS Analysis'],
      highlights: ['Dynamic remarketing ads setup', 'Increased conversion rates'],
      imageColor: 'from-pink-600 to-[#E63946]',
    },
    {
      title: 'YouTube Video Ad Marketing',
      category: 'paid-ads-media',
      tag: 'Paid Ads & Media',
      metric: '12M+ High-Quality Views',
      desc: 'Produced engaging video advertisements and managed YouTube ad campaigns, focusing on cost-per-view optimization and brand awareness.',
      tech: ['YouTube Video Ads', 'Video Creative Direction', 'Demographic Targeting', 'CPC Audits'],
      highlights: ['High brand visibility reach', 'Attribution tracking integrations'],
      imageColor: 'from-red-700 to-rose-500',
    },
    {
      title: 'Local Business Lead Generation',
      category: 'paid-ads-media',
      tag: 'Paid Ads & Media',
      metric: '55% Lead Cost Reduction',
      desc: 'Implemented hyper-targeted local service ads and Google Maps advertising to drive physical store visits and phone inquiries.',
      tech: ['Local Service Ads', 'Geotargeting', 'Call Tracking Setup', 'Budget Scheduling'],
      highlights: ['Local map search advertising', 'Direct call tracking integration'],
      imageColor: 'from-amber-600 to-orange-500',
    },

    // Zoho Suite Solutions
    {
      title: 'Zoho CRM Implementation',
      category: 'zoho-suite-solutions',
      tag: 'Zoho Suite Solutions',
      metric: '100% Sales Process Automation',
      desc: 'Customized Zoho CRM layouts, set up automated email notifications, pipelines, and mapped lead assignment rules to increase sales speed.',
      tech: ['Zoho CRM Setup', 'Workflow Automation', 'Sales Pipeline Design', 'User Roles'],
      highlights: ['Automated email pipelines', 'Structured lead assignment'],
      imageColor: 'from-emerald-600 to-teal-500',
    },
    {
      title: 'Zoho Books & Invoicing Integration',
      category: 'zoho-suite-solutions',
      tag: 'Zoho Suite Solutions',
      metric: '50% Invoicing Time Saved',
      desc: 'Configured Zoho Books for automated invoice generation, payment gateway sync, expense tracking, and custom tax reports.',
      tech: ['Zoho Books', 'Automated Invoices', 'Bank Reconciliation', 'Payment Gateways'],
      highlights: ['Automated invoicing workflows', 'Direct payment gateways sync'],
      imageColor: 'from-[#E63946] to-pink-500',
    },
    {
      title: 'Zoho Creator Custom Portal',
      category: 'zoho-suite-solutions',
      tag: 'Zoho Suite Solutions',
      metric: '65% Manual Data Entry Cut',
      desc: 'Developed a low-code database application using Zoho Creator to track inventory, project deadlines, and internal task progress.',
      tech: ['Zoho Creator', 'Deluge Scripting', 'Custom Dashboards', 'Workflow Rules'],
      highlights: ['Tailored data tracking fields', 'Elimination of manual entry errors'],
      imageColor: 'from-[#0B1F3A] to-blue-800',
    },
    {
      title: 'Zoho Campaigns Setup',
      category: 'zoho-suite-solutions',
      tag: 'Zoho Suite Solutions',
      metric: '28% Email Open Rate Boost',
      desc: 'Integrated Zoho Campaigns with CRM to run automated email marketing sequences, newsletters, and contact list segments.',
      tech: ['Zoho Campaigns', 'Email Automation', 'Audience Segmentation', 'A/B Testing'],
      highlights: ['Dynamic customer segmentation', 'A/B email subject testing'],
      imageColor: 'from-violet-600 to-fuchsia-500',
    },
    {
      title: 'Zoho HR & Employee Portal',
      category: 'zoho-suite-solutions',
      tag: 'Zoho Suite Solutions',
      metric: '100% Digital Onboarding',
      desc: 'Deployed Zoho People for centralized employee profile directories, attendance tracking, leave requests, and digital onboarding documents.',
      tech: ['Zoho People', 'HR Workflow Rules', 'Leave Management', 'Time Tracker'],
      highlights: ['Digital employee profiles database', 'Self-service request portal'],
      imageColor: 'from-teal-600 to-cyan-500',
    },

    // Creative Branding & AR
    {
      title: 'Corporate Logo & Brand Identity',
      category: 'creative-branding-ar',
      tag: 'Creative Branding & AR',
      metric: '100% Cohesive Visual Style',
      desc: 'Designed a complete visual identity kit, including custom modern logo variations, color palettes, typographies, and a brand style guide.',
      tech: ['Logo Design', 'Brand Book Creation', 'Typography Guidelines', 'Figma'],
      highlights: ['Custom modern vector logo design', 'Professional typography guidelines'],
      imageColor: 'from-pink-600 to-[#E63946]',
    },
    {
      title: 'Instagram & Facebook AR Filters',
      category: 'creative-branding-ar',
      tag: 'Creative Branding & AR',
      metric: '5M+ Camera Impressions',
      desc: 'Created custom interactive augmented reality (AR) camera filters for Instagram and Facebook campaigns, boosting brand interaction.',
      tech: ['Spark AR Studio', '3D Asset Design', 'Face Tracking Logic', 'Social Media AR'],
      highlights: ['Interactive 3D tracking features', 'High organic user engagement'],
      imageColor: 'from-orange-500 to-pink-500',
    },
    {
      title: 'Interactive 3D Website Branding',
      category: 'creative-branding-ar',
      tag: 'Creative Branding & AR',
      metric: '2x Website Engagement Time',
      desc: 'Built engaging interactive 3D visual models on the brand website, allowing users to spin and interact with products in real-time.',
      tech: ['Three.js', 'WebGL Rendering', '3D Blender Modeling', 'UX Animation'],
      highlights: ['Fluid WebGL 3D rendering', 'Optimized desktop and mobile layout'],
      imageColor: 'from-violet-600 to-indigo-500',
    },
    {
      title: 'Retail Product Packaging Design',
      category: 'creative-branding-ar',
      tag: 'Creative Branding & AR',
      metric: '40% Store Shelf Visibility',
      desc: 'Designed aesthetic product labels and structural retail boxes for physical goods, maintaining brand consistency and premium appeal.',
      tech: ['Packaging Design', '3D Mockups', 'Print-Ready Formats', 'Illustrator'],
      highlights: ['Eye-catching premium retail box design', 'Print-ready vector assets'],
      imageColor: 'from-[#0B1F3A] to-[#E63946]',
    },
    {
      title: 'Web-Based AR Product Viewer',
      category: 'creative-branding-ar',
      tag: 'Creative Branding & AR',
      metric: '35% Online Purchase Boost',
      desc: 'Developed a web-based Augmented Reality viewer allowing customers to preview products in 3D directly in their rooms without downloading an app.',
      tech: ['WebXR API', 'Model-Viewer', 'GLTF Optimization', 'Mobile Compatibility'],
      highlights: ['App-free AR view compatibility', 'Optimized 3D models layout'],
      imageColor: 'from-emerald-600 to-teal-500',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
            Our Work
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Proven Client Case Studies
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Inspect our verified scaling projects across technical software development, performance-based search marketing, and AI automations.
          </p>
        </div>
      </section>

      {/* Filter Toggles */}
      <section className="max-w-7xl mx-auto px-6 pt-16 flex justify-center">
        <div className="flex flex-wrap gap-2 bg-gray-light p-1.5 rounded-xl border border-gray-200 shadow-inner">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === cat.value 
                  ? 'bg-white text-navy-deep shadow-sm' 
                  : 'text-text-secondary hover:text-navy-deep'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((study, idx) => (
            <div 
              key={idx}
              className="group border border-gray-200 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col animate-in fade-in zoom-in-95 duration-200"
            >
              {/* Image Block */}
              <div className={`h-64 bg-gradient-to-tr ${study.imageColor} p-8 flex flex-col justify-between text-white relative`}>
                <div className="absolute inset-0 bg-cover pointer-events-none opacity-5" 
                     style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                    {study.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-white/90 font-mono">
                    <Star className="w-3.5 h-3.5 fill-accent-red stroke-accent-red" />
                    Featured Project
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-white mb-1">
                    {study.title}
                  </h3>
                  <span className="text-accent-red font-mono font-bold text-sm tracking-wide bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {study.metric}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 text-left flex flex-col gap-6 justify-between flex-1">
                <div className="flex flex-col gap-3">
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                    {study.desc}
                  </p>
                  
                  <ul className="text-[11px] text-slate-400 space-y-2 border-t border-slate-100 pt-4 font-semibold">
                    {study.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="h-px bg-slate-100" />
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">Technology Applied</span>
                  <div className="flex flex-wrap gap-1">
                    {study.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="bg-gray-light text-slate-500 text-[9px] font-bold uppercase px-2 py-0.5 rounded border border-slate-200/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-navy-deep text-white rounded-3xl p-10 sm:p-14 shadow-2xl flex flex-col items-center gap-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/20 blur-xl pointer-events-none" />
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Ready to become our next success story?
          </h2>
          <p className="text-slate-300 text-sm font-light max-w-md leading-relaxed">
            Connect with a lead tech architect today and co-author a custom execution plan tailored for your brand.
          </p>
          <button 
            onClick={() => handleNavClick('contact')}
            className="rounded-xl bg-accent-red hover:bg-white hover:text-navy-deep hover:scale-105 px-8 py-3.5 font-heading text-xs font-bold text-white transition-all mt-2 cursor-pointer"
          >
            Initiate Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
