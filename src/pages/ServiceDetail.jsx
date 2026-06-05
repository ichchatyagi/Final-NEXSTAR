import { useState } from 'react';
import {
  Code2,
  Smartphone,
  TrendingUp,
  Search,
  Palette,
  Cpu,
  Video,
  CheckCircle2,
  ArrowRight,
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
  Globe,
  ChevronDown,
  ChevronUp,
  Quote,
  Layers,
  Building
} from 'lucide-react';

// Import our custom ScrollReveal wrapper for scroll-triggered entrance transitions
import ScrollReveal from '../components/ScrollReveal';

// Import our central, structured services database
import { servicesContent } from '../data/servicesContent';

// Import our custom premium assets
import socialMediaBanner from '../assets/social_media_banner.png';
import webDevBanner from '../assets/web_dev_banner.png';
import brandingBanner from '../assets/branding_banner.png';
import marketingBanner from '../assets/marketing_banner.png';

// Import our custom background image assets for all 20 services
import socialMediaBg from '../assets/services/socialmedia.png';
import brandingBg from '../assets/services/Creative & Branding Solutions.png';
import marketingBg from '../assets/services/B2B Marketing Campaigns.png';
import searchBg from '../assets/services/Search Marketing Strategy.png';
import videoBg from '../assets/services/Cinematic Video Production.png';
import reputationBg from '../assets/services/Online Reputation Management.png';
import ecommerceBg from '../assets/services/E-commerce Development.png';
import webDevBg from '../assets/services/Website Development.png';
import mobileAppBg from '../assets/services/Mobile App Engineering.png';
import arBg from '../assets/services/Augmented Reality Systems.png';
import techBg from '../assets/services/Web & Tech Solutions.png';
import databaseBg from '../assets/services/Database & Data Science.png';
import productBg from '../assets/services/Bespoke Product Engineering.png';
import itBg from '../assets/services/Managed IT & Tech Services.png';
import cyberBg from '../assets/services/Cybersecurity & AI Dev.png';
import cloudBg from '../assets/services/Cloud & Hosting Services.png';
import mediaBg from '../assets/services/Media & Programmatic Broadcast.png';
import socialMediaAdsBg from '../assets/services/Social Media Advertising.png';
import zohoBg from '../assets/services/zoho.png';
import domainBg from '../assets/services/Secure Domain Booking.png';

// Icon mapper linking service IDs to Lucide components
const iconMap = {
  'social-media': Share2,
  'creative-branding': Palette,
  'b2b-marketing': Target,
  'search-marketing': Search,
  'video-production': Video,
  'online-reputation': ShieldAlert,
  'ecommerce': ShoppingBag,
  'web-development': Code2,
  'mobile-app': Smartphone,
  'augmented-reality': Eye,
  'web-tech-solutions': Cpu,
  'database-data-science': Database,
  'product-engineering': Settings,
  'it-management': Server,
  'cybersecurity-ai': Lock,
  'cloud-hosting': Cloud,
  'media-broadcast': Radio,
  'social-media-ads': TrendingUp,
  'zoho-services': Workflow,
  'domain-booking': Globe
};

// Artwork banner mapper linking service IDs to assets
const bannerMap = {
  'social-media': socialMediaBanner,
  'creative-branding': brandingBanner,
  'b2b-marketing': marketingBanner,
  'search-marketing': marketingBanner,
  'video-production': brandingBanner,
  'online-reputation': brandingBanner,
  'ecommerce': webDevBanner,
  'web-development': webDevBanner,
  'mobile-app': webDevBanner,
  'augmented-reality': webDevBanner,
  'web-tech-solutions': webDevBanner,
  'database-data-science': webDevBanner,
  'product-engineering': webDevBanner,
  'it-management': webDevBanner,
  'cybersecurity-ai': webDevBanner,
  'cloud-hosting': webDevBanner,
  'media-broadcast': marketingBanner,
  'social-media-ads': marketingBanner,
  'zoho-services': webDevBanner,
  'domain-booking': webDevBanner
};

export default function ServiceDetail({ currentPage, setCurrentPage }) {
  const serviceId = currentPage?.id || 'web-development';

  // State trackers for interactive elements
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  // Background image mapper for all 20 services
  const bgImageMap = {
    'social-media': socialMediaBg,
    'creative-branding': brandingBg,
    'b2b-marketing': marketingBg,
    'search-marketing': searchBg,
    'video-production': videoBg,
    'online-reputation': reputationBg,
    'ecommerce': ecommerceBg,
    'web-development': webDevBg,
    'mobile-app': mobileAppBg,
    'augmented-reality': arBg,
    'web-tech-solutions': techBg,
    'database-data-science': databaseBg,
    'product-engineering': productBg,
    'it-management': itBg,
    'cybersecurity-ai': cyberBg,
    'cloud-hosting': cloudBg,
    'media-broadcast': mediaBg,
    'social-media-ads': socialMediaAdsBg,
    'zoho-services': zohoBg,
    'domain-booking': domainBg
  };

  const bgImage = bgImageMap[serviceId];

  // Dynamic content resolution
  const selectedService = servicesContent[serviceId] || servicesContent['web-development'];
  const Icon = iconMap[serviceId] || Code2;
  const imageBanner = bannerMap[serviceId] || webDevBanner;

  const handleNavClick = (page) => {
    // Reset state before navigating
    setOpenFaq(null);
    setActiveStep(0);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRelatedClick = (relatedId) => {
    setOpenFaq(null);
    setActiveStep(0);
    setCurrentPage({ name: 'service-detail', id: relatedId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div key={serviceId} className="bg-soft-bg min-h-screen relative font-body text-text-primary pb-24 overflow-x-hidden">

      {/* 1. Sticky Sub-Header Navigation */}
      <div className="sticky top-20 z-40 bg-white/85 backdrop-blur-md border-b border-gray-200/80 py-3.5 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => handleNavClick('services')}
            className="text-text-secondary hover:text-navy-deep text-xs font-heading font-extrabold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
          >
            &larr; Back to all Services
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('seo-pricing')}
              className="text-[10px] bg-accent-red text-white hover:bg-navy-deep px-4 py-2 rounded-lg font-heading font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow"
            >
              Solutions Pricing
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-20 pb-28 text-white overflow-hidden min-h-[70vh] flex items-center">
        {/* Dynamic Background: Full-cover image overlay for all 20 services */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={bgImage}
              alt={`${selectedService.title} Background`}
              className="w-full h-full object-cover object-center"
            />
            {/* Soft backdrop blur and light gradient overlay for readability of dark text */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] lg:bg-gradient-to-r lg:from-white/95 lg:via-white/90 lg:to-white/40" />
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left w-full">

          {/* Hero Left Content: Text details (strictly 50% width and left shifted) */}
          <div className="lg:col-span-6 lg:pr-12 relative z-20 flex flex-col gap-4">
            <ScrollReveal direction="left" delay={0.1}>
              <span className="text-accent-red font-heading text-[10px] font-extrabold uppercase tracking-widest block mb-1">
                Capabilities Ecosystem Showcase
              </span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <h1 className="font-heading font-extrabold tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl text-navy-deep">
                {selectedService.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <h2 className="font-heading tracking-normal leading-relaxed text-xs sm:text-sm lg:text-base text-slate-900 font-extrabold">
                {selectedService.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <p className="font-light leading-relaxed max-w-lg text-xs sm:text-sm text-slate-800 font-semibold">
                {selectedService.subheadline}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.5}>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="rounded-2xl p-4 shrink-0 flex items-center gap-3 bg-navy-deep/5 border border-navy-deep/10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-navy-deep/10 text-accent-red">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest block leading-none mb-1 text-slate-500">Performance Standard</span>
                    <span className="font-heading text-sm font-extrabold text-navy-deep">{selectedService.metric}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. Service Overview & 4. Key Offerings Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-left relative">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* Left Column: Detailed Service Overview */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ScrollReveal direction="left" delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue block">Operational Blueprint</span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <h2 className="font-heading text-3xl font-extrabold text-navy-deep leading-tight">
                Service Overview
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="flex flex-col gap-4 text-text-secondary text-sm font-light leading-relaxed">
                <p>{selectedService.overview[0]}</p>
                <p>{selectedService.overview[1]}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.4}>
              <div className="h-1 bg-gradient-to-r from-accent-red to-highlight-blue w-24 rounded-full mt-4" />
            </ScrollReveal>
          </div>

          {/* Right Column: Key Offerings Grid */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="font-heading text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                Core Capabilities & Key Offerings
              </h3>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {selectedService.features.map((item, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  delay={0.1 + idx * 0.08}
                  className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-navy-deep/10 transition-all duration-300 flex flex-col gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-deep/5 border border-navy-deep/10 flex items-center justify-center text-navy-deep group-hover:bg-navy-deep group-hover:text-white transition-all shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-navy-deep mb-2 tracking-tight group-hover:text-highlight-blue transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Benefits and Business Outcomes (Animated Grid with stat blocks) */}
      <section className="bg-navy-deep/5 py-24 px-6 border-y border-gray-200/50 text-left">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">

          <div className="flex flex-col gap-3 max-w-2xl">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue block">Tangible ROI Impact</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-heading text-3xl font-extrabold text-navy-deep leading-tight">
                Benefits & Business Outcomes
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                We translate technical features into clear operational metrics that directly scale business value, optimize budget yield, and drive long-term segment growth.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {selectedService.benefits.map((benefit, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={0.1 + idx * 0.1}
                className="bg-white border border-gray-200/60 rounded-3xl p-8 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-accent-red font-heading text-2xl font-extrabold border-b border-gray-100 pb-4">
                    {benefit.stat}
                  </div>
                  <h3 className="font-heading text-base font-extrabold text-navy-deep">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Process/Workflow (Interactive Timeline Stepper) */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-left">
        <div className="flex flex-col gap-12">

          {/* Header */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <ScrollReveal direction="left" delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue block">Structured Engineering</span>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <h2 className="font-heading text-3xl font-extrabold text-navy-deep leading-tight">
                Process & Execution Workflow
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Our operations conform strictly to an engineering-first execution lifecycle. Click any phase below to inspect the key milestones.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive Stepper Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Step triggers (Left side / Horizontal on mobile) */}
            <div className="lg:col-span-5 flex flex-row lg:flex-col gap-2 sm:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 justify-between lg:justify-start">
              {selectedService.process.map((p, idx) => (
                <ScrollReveal key={idx} direction="left" delay={0.1 + idx * 0.08} className="flex-1 lg:flex-none">
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-3 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 cursor-pointer ${activeStep === idx
                      ? 'bg-navy-deep border-navy-deep text-white shadow-lg lg:translate-x-2'
                      : 'bg-white border-gray-200 hover:border-navy-deep/20 text-navy-deep hover:bg-gray-50'
                      }`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-heading font-extrabold text-xs shrink-0 ${activeStep === idx ? 'bg-accent-red text-white' : 'bg-navy-deep/5 text-navy-deep'
                      }`}>
                      {p.step}
                    </span>
                    <span className="font-heading text-xs sm:text-sm font-extrabold tracking-tight hidden md:inline lg:inline">
                      {p.title}
                    </span>
                  </button>
                </ScrollReveal>
              ))}
            </div>

            {/* Step details card (Right side) */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden min-h-[250px] flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/5 blur-xl pointer-events-none" />

                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] bg-accent-red/10 text-accent-red px-3.5 py-1 rounded-full font-bold uppercase tracking-wider w-max">
                      Phase {selectedService.process[activeStep].step}
                    </span>

                    <h3 className="font-heading text-2xl font-extrabold text-navy-deep tracking-tight">
                      {selectedService.process[activeStep].title}
                    </h3>

                    <p className="text-text-secondary text-sm font-semibold leading-relaxed mt-2">
                      {selectedService.process[activeStep].desc}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-6 mt-8 flex items-center justify-between text-xs font-semibold text-slate-400">
                    <span>Engineering Milestone Verification</span>
                    <span className="text-emerald-500 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 shrink-0" /> Checked
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Technologies & Tools & 8. Industries Served Grid */}
      <section className="bg-navy-deep/5 py-24 px-6 border-y border-gray-200/50 text-left">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">

          {/* Tech Grid Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="font-heading text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                Mastered Platforms & Native Tools
              </h3>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {selectedService.tech.map((platform, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  delay={0.1 + idx * 0.08}
                  className="bg-white border border-gray-200/50 rounded-2xl p-6 shadow-sm flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-accent-red shrink-0" />
                    <h4 className="font-heading text-sm font-extrabold text-navy-deep tracking-tight">
                      {platform.name}
                    </h4>
                  </div>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                    {platform.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between py-2">
            <div className="flex flex-col gap-4">
              <ScrollReveal direction="right" delay={0.1}>
                <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue block">Target Verticals</span>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <h2 className="font-heading text-3xl font-extrabold text-navy-deep leading-tight">
                  Industries We Serve Natively
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  Our pipelines are configured natively to match the compliance rules, technical grids, and communication coordinates of high-value business sectors.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-6">
                {selectedService.industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="bg-navy-deep/5 text-navy-deep border border-navy-deep/10 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    <Building className="w-3.5 h-3.5 shrink-0 text-accent-red" />
                    {ind}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 9. Why Choose Us Section */}
      <section className="bg-navy-deep text-white py-24 px-6 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent-red/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col gap-12">

          {/* Title */}
          <div className="max-w-3xl flex flex-col gap-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest block">Unfair Advantage</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
                Why Choose Nexstar Media?
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                We separate ourselves from traditional advertising agencies by applying rigorous engineering, serverless performance parameters, and absolute data transparency.
              </p>
            </ScrollReveal>
          </div>

          {/* Three Advantage Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {selectedService.whyChooseUs.map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={0.1 + idx * 0.1}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-inner flex flex-col gap-4 hover:border-accent-red/35 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-red font-heading font-extrabold text-sm shrink-0">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-heading text-base font-extrabold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Case Study Highlight & 11. Client Testimonial */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-left grid lg:grid-cols-12 gap-12">

        {/* Case Study Block (Left/7cols) */}
        <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between gap-8 hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-4">
            <ScrollReveal direction="left" delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue block">Verified Performance Benchmark</span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <h3 className="font-heading text-2xl font-extrabold text-navy-deep tracking-tight">
                Case Highlight: {selectedService.caseHighlight.title}
              </h3>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                {selectedService.caseHighlight.desc}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={0.4}>
            <div className="bg-gray-light/60 border border-gray-200/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Audited Outcome Metrics</span>
                <span className="font-heading text-base sm:text-lg font-extrabold text-navy-deep mt-1 block">
                  {selectedService.caseHighlight.outcome}
                </span>
              </div>
              <button
                onClick={() => handleNavClick('portfolio')}
                className="flex items-center justify-center gap-2 rounded-xl bg-navy-deep hover:bg-accent-red text-white px-5 py-3 font-heading text-xs font-bold transition-all shrink-0 cursor-pointer shadow-sm"
              >
                Inspect Portfolio
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonial Block (Right/5cols) */}
        <div className="lg:col-span-5 bg-navy-deep text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/10 blur-xl pointer-events-none" />

          <ScrollReveal direction="right" delay={0.1} className="flex flex-col gap-6 relative z-10">
            <Quote className="w-8 h-8 text-accent-red shrink-0" />
            <p className="text-slate-200 text-sm sm:text-base font-light italic leading-relaxed">
              "{selectedService.testimonial.quote}"
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="relative z-10 border-t border-white/10 pt-6">
            <h4 className="font-heading text-sm font-extrabold text-white">
              {selectedService.testimonial.author}
            </h4>
            <p className="text-slate-400 text-xs font-semibold mt-1">
              {selectedService.testimonial.role}, <span className="text-highlight-blue">{selectedService.testimonial.company}</span>
            </p>
          </ScrollReveal>
        </div>

      </section>

      {/* 12. State-of-the-Art FAQ Accordion */}
      <section className="bg-navy-deep/5 py-24 px-6 border-y border-gray-200/50 text-left">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">

          <div className="flex flex-col gap-3 text-center items-center">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue block">Direct Resolution</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-heading text-3xl font-extrabold text-navy-deep leading-tight">
                Frequently Asked Queries
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-text-secondary text-sm font-light leading-relaxed max-w-md">
                Get immediate responses to key operational parameters, security details, and alignment guidelines.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {selectedService.faqs.map((faq, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={0.1 + idx * 0.08}
              >
                <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm hover:border-navy-deep/20 transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-heading text-sm font-extrabold text-navy-deep cursor-pointer hover:bg-gray-50/50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="w-6 h-6 rounded-lg bg-navy-deep/5 flex items-center justify-center text-navy-deep shrink-0">
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-56 border-t border-gray-100 p-5' : 'max-h-0'
                      }`}
                  >
                    <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 13. Related Services Navigation */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-left">
        <div className="flex flex-col gap-12">

          <div className="flex flex-col gap-3">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue block">Synergistic Alignment</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-heading text-3xl font-extrabold text-navy-deep leading-tight">
                Related Solutions & Synergies
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Nexstar Media solutions operate inside an integrated digital ecosystem. Explore these complementary B2B configurations.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {selectedService.related.map((relatedId, idx) => {
              const relatedService = servicesContent[relatedId];
              if (!relatedService) return null;
              const RelatedIcon = iconMap[relatedId] || Code2;

              return (
                <ScrollReveal
                  key={relatedId}
                  direction="up"
                  delay={0.1 + idx * 0.1}
                  className="bg-white border border-gray-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-navy-deep/20 transition-all flex flex-col justify-between min-h-[220px]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-deep/5 border border-navy-deep/10 flex items-center justify-center text-navy-deep shrink-0">
                      <RelatedIcon className="w-5 h-5 text-accent-red" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-extrabold text-navy-deep mb-2">
                        {relatedService.title}
                      </h3>
                      <p className="text-text-secondary text-[11px] font-semibold leading-relaxed line-clamp-3">
                        {relatedService.desc}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRelatedClick(relatedId)}
                    className="w-full mt-4 flex items-center justify-between rounded-xl bg-gray-light hover:bg-navy-deep hover:text-white px-4 py-3 font-heading text-xs font-bold text-navy-deep transition-all cursor-pointer"
                  >
                    Explore Synergy
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 14. Final Call-to-Action Section */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-navy-deep text-white rounded-3xl p-10 sm:p-16 shadow-2xl flex flex-col items-center gap-6 relative overflow-hidden">
            {/* Glowing aesthetic elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/20 blur-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-highlight-blue/20 blur-xl pointer-events-none" />

            <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest block">
              Direct Strategic Integration
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white max-w-2xl leading-tight">
              Ready to Secure and Scale Your Corporate Metrics?
            </h2>

            <p className="text-slate-300 text-sm font-light max-w-lg leading-relaxed">
              Consult with our principal systems architects, request an offline solutions quotation, or choose a specialized monthly integration plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto z-10">
              <button
                onClick={() => handleNavClick('seo-pricing')}
                className="w-full sm:w-auto rounded-xl bg-accent-red hover:bg-white hover:text-navy-deep hover:scale-105 px-8 py-3.5 font-heading text-xs font-bold text-white transition-all cursor-pointer"
              >
                Explore Solutions Pricing
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full sm:w-auto rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-3.5 font-heading text-xs font-bold text-white transition-all cursor-pointer"
              >
                Consult Principal Architect &rarr;
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
