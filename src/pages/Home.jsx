import { useState, useEffect } from 'react';
import {
  Sparkles,
  TrendingUp,
  Globe2,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Workflow,
  Lightbulb,
  Star,
  Quote
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import heroBanner0 from '../assets/herobanner.png';
import heroBanner1 from '../assets/herobanner1.png';
import heroBanner2 from '../assets/herobanner2.png';
import hostImg from '../assets/host.png';
import marketingBanner from '../assets/marketing_banner.png';
import whyChooseUsBanner from '../assets/why_choose_us.png';
import webDevBanner from '../assets/web_dev_banner.png';
import brandingBanner from '../assets/branding_banner.png';
import socialMediaBanner from '../assets/social_media_banner.png';
import websiteDevHomeService from '../assets/home services/Website development.png';
import zohoSuiteHomeService from '../assets/home services/Zoho Suite.png';
import socialMediaHomeService from '../assets/home services/social media advertising.png';

// New Minimal Value Illustrations
import philosophyIllustration from '../assets/values/philosophy.png';
import approachIllustration from '../assets/values/approach.png';
import globalPresenceIllustration from '../assets/values/global_presence.png';
import agileIllustration from '../assets/values/agile.png';
import clientFocusIllustration from '../assets/values/client_focus.png';
import sustainableGrowthIllustration from '../assets/values/sustainable_growth.png';
import missionIllustration from '../assets/values/mission.png';

// Brand Logos
import renaultLogo from '../assets/logos/renault-removebg-preview.png';
import philipsLogo from '../assets/logos/philips-removebg-preview.png';
import audiLogo from '../assets/logos/audi.png';
import bajajLogo from '../assets/logos/bajaj.png';
import bmwLogo from '../assets/logos/BMW.png';
import hpLogo from '../assets/logos/hp.png';
import godaddyLogo from '../assets/logos/Godaddy.png';
import samsungLogo from '../assets/logos/samsung-removebg-preview.png';
import googleLogo from '../assets/logos/google-removebg-preview.png';
import idfcLogo from '../assets/logos/IDFC-removebg-preview.png';
import hdfcLogo from '../assets/logos/hdfc-removebg-preview.png';
import pgLogo from '../assets/logos/p_g-removebg-preview.png';


const slides = [heroBanner0, heroBanner1, heroBanner2];

export default function Home({ setCurrentPage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const stats = [
    { label: 'Projects Delivered', value: '3500+', change: 'Verified Success', icon: CheckCircle2 },
    { label: 'Accuracy & Quality', value: '99%', change: 'Success Rate', icon: TrendingUp },
    { label: 'Years of Experience', value: '20+', change: 'In this field', icon: Globe2 },
  ];

  const homeTestimonials = [
    {
      name: 'Rohan Sharma',
      role: 'VP of Engineering',
      company: 'JioStream',
      quote: 'Nexstar Media revamped our entire OTT media delivery architecture. Their custom compilation nodes reduced latency by 42% globally.',
      rating: 5
    },
    {
      name: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Aether Digital LLC',
      quote: "Nexstar's strategic intelligence in Global Operations and cloud scalability completely restructured our international sales framework.",
      rating: 5
    },
    {
      name: 'Priya Nair',
      role: 'Co-Founder',
      company: 'D2C Pulse',
      quote: 'The AI lead validation engine Nexstar deployed has completely streamlined our customer acquisition. Incredible ROI from day one.',
      rating: 5
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of OTT Strategy',
      company: 'SkyStream Play',
      quote: 'The OTT and broadcast engine they built is outstanding. We achieved sub-100ms load times and seamless live stream integrations.',
      rating: 5
    },
    {
      name: 'Deepika Sen',
      role: 'Chief Marketing Officer',
      company: 'Zenia Fashion',
      quote: 'Nexstar beautifully fused technology and creative media for our brand launch. Our direct conversions soared by 55% within months.',
      rating: 5
    },
    {
      name: 'Kenji Takahashi',
      role: 'Operations Lead',
      company: 'Nippon Compilers',
      quote: 'Excellent data science and React telemetry setups. The analytical transparency they provided allowed us to hit all our target scales.',
      rating: 5
    }
  ];

  const clientLogos = [
    { name: 'Renault', logo: renaultLogo },
    { name: 'Philips', logo: philipsLogo },
    { name: 'Audi', logo: audiLogo },
    { name: 'Bajaj', logo: bajajLogo },
    { name: 'BMW', logo: bmwLogo },
    { name: 'HP', logo: hpLogo },
    { name: 'GoDaddy', logo: godaddyLogo },
    { name: 'Samsung', logo: samsungLogo },
    { name: 'Google', logo: googleLogo },
    { name: 'IDFC Bank', logo: idfcLogo },
    { name: 'HDFC Bank', logo: hdfcLogo },
    { name: 'P&G', logo: pgLogo }
  ];

  const companyValues = [
    {
      title: 'Our Philosophy',
      imageOverlay: 'OUR PHILOSOPHY',
      desc: 'We thrive on challenges and innovation. From cutting-edge IT development to digital marketing, media production, and brand storytelling, our team\'s diverse expertise ensures we deliver not just services, but experiences that create real impact.',
      image: philosophyIllustration,
      buttonText: 'Learn More',
      actionPage: 'about',
      borderClass: 'border-violet-500/60 hover:border-violet-600'
    },
    {
      title: 'Our Approach',
      imageOverlay: 'OUR APPROACH',
      desc: 'We believe in collaboration, growth, and pushing boundaries. We work as an extension of your team, ensuring that our solutions are perfectly aligned with your vision and goals to help you achieve lasting success in today\'s digital-first world.',
      image: approachIllustration,
      buttonText: 'Partner with Us',
      actionPage: 'contact',
      borderClass: 'border-cyan-500/60 hover:border-cyan-600'
    },
    {
      title: 'Our Global Presence',
      imageOverlay: 'GLOBAL PRESENCE',
      desc: 'With our headquarters in New York, and specialized offices in the UK and India, we unite creativity, technology, and strategic intelligence to serve diverse international markets and fuel innovation on a worldwide scale.',
      image: globalPresenceIllustration,
      buttonText: 'More About Us',
      actionPage: 'about',
      borderClass: 'border-indigo-500/60 hover:border-indigo-600'
    },
    {
      title: 'Agile Methodology',
      imageOverlay: 'AGILE METHODOLOGY',
      desc: 'We prioritize flexible, adaptive workflows and iterative development. By working in transparent, focused sprints, we deliver functional software and marketing results that pivot seamlessly to match your market needs.',
      image: agileIllustration,
      buttonText: 'Discover Agile',
      actionPage: 'about',
      borderClass: 'border-rose-500/60 hover:border-rose-600'
    },
    {
      title: 'Client-Centric Focus',
      imageOverlay: 'CLIENT FOCUS',
      desc: 'Your core objectives steer our designs and code architectures. We align our multi-disciplinary media and engineering teams with your business targets to establish deep-seated trust and long-term partnership.',
      image: clientFocusIllustration,
      buttonText: 'Partner with Us',
      actionPage: 'contact',
      borderClass: 'border-emerald-500/60 hover:border-emerald-600'
    },
    {
      title: 'Sustainable Growth',
      imageOverlay: 'SUSTAINABLE GROWTH',
      desc: 'We architect applications and optimize digital marketing ad spends to secure scalable, durable growth. Our focus remains on high-retention infrastructure and cost-effective conversions for durable business scalability.',
      image: sustainableGrowthIllustration,
      buttonText: 'Scale With Us',
      actionPage: 'services',
      borderClass: 'border-amber-500/60 hover:border-amber-600'
    },
    {
      title: 'Our Mission',
      imageOverlay: 'OUR MISSION',
      desc: 'Our mission is to empower organizations with innovative technology and creative media solutions. We strive to be a catalyst for digital transformation, enabling businesses to scale efficiently, communicate effectively, and lead their industries.',
      image: missionIllustration,
      buttonText: 'Discover More',
      actionPage: 'services',
      borderClass: 'border-pink-500/60 hover:border-pink-600'
    }
  ];





  const featuredServices = [
    {
      id: 'social-media-ads',
      title: 'Social Media Advertising',
      desc: 'High-conversion campaigns on Meta, LinkedIn, and TikTok using paid pixel analytics.',
      icon: TrendingUp,
      color: 'text-pink-600 bg-pink-50/5 border-pink-100',
      borderClass: 'border-pink-500/60 hover:border-pink-600',
      bullets: ['Pixel conversions setups', 'Paid audience filtering'],
      bgImage: socialMediaHomeService
    },
    {
      id: 'web-development',
      title: 'Website Development',
      desc: 'High-performance React frontend architectures compiled cleanly for edge CDN speed.',
      icon: Code2,
      color: 'text-indigo-600 bg-indigo-50/5 border-indigo-100',
      borderClass: 'border-indigo-500/60 hover:border-indigo-600',
      bullets: ['React 19 & Vite 8', 'Edge CDN caching nodes'],
      bgImage: websiteDevHomeService
    },
    {
      id: 'zoho-services',
      title: 'Zoho Suite Services',
      desc: 'Establish and automate CRM pipelines and operational workflows inside Zoho.',
      icon: Workflow,
      color: 'text-indigo-600 bg-indigo-50/10 border-indigo-200/50',
      borderClass: 'border-indigo-600/60 hover:border-indigo-700',
      bullets: ['Zoho CRM synchronization', 'Custom workflow triggers'],
      bgImage: zohoSuiteHomeService
    }
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId) => {
    setCurrentPage({ name: 'service-detail', id: serviceId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-soft-bg min-h-screen relative font-body text-text-primary">

      {/* Light futuristic ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-8 pb-20 lg:pt-12 lg:pb-28 px-6 group/hero">

        {/* Background Slideshow Images */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${currentSlide === idx
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105 pointer-events-none'
                }`}
            >
              <img
                src={slide}
                alt={`Nexstar Hero Banner ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Cyber Vignette Overlay & Grid Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/45 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-soft-bg via-transparent to-navy-deep/20 z-10" />
          <div className="absolute inset-0 bg-navy-deep/25 z-10" />
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 relative z-20 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-accent-red animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-white font-heading">
                Nexstar Media and Technologies
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
              Technology That Moves. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-accent-red">
                Creativity That Connects.
              </span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl drop-shadow-sm">
              NEXSTAR Media & Technologies is a  company helping businesses grow through digital innovation, strategic marketing, creative branding, web development, and immersive content experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-accent-red px-8 py-4 font-heading text-sm font-bold text-white hover:bg-white hover:text-navy-deep hover:scale-105 shadow-xl shadow-accent-red/20 transition-all duration-300 cursor-pointer"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm px-8 py-4 font-heading text-sm font-bold text-white hover:bg-white hover:text-navy-deep transition-all cursor-pointer"
              >
                Explore Our Services
              </button>
            </div>

            {/* Glass stats overlays */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10 mt-6 max-w-xl">
              <div>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">98%</h4>
                <p className="text-slate-300 text-xs font-semibold mt-1">Client Retention</p>
              </div>
              <div>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">2.4x</h4>
                <p className="text-slate-300 text-xs font-semibold mt-1">Average ROAS Scale</p>
              </div>
              <div>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">100%</h4>
                <p className="text-slate-300 text-xs font-semibold mt-1">Elite Tech Standards</p>
              </div>
            </div>
          </div>

        </div>

        {/* Manual Left/Right Slide Controls */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/10 bg-white/10 hover:bg-white hover:text-navy-deep text-white opacity-0 group-hover/hero:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center cursor-pointer backdrop-blur-md shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/10 bg-white/10 hover:bg-white hover:text-navy-deep text-white opacity-0 group-hover/hero:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center cursor-pointer backdrop-blur-md shadow-lg"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicator Dashes */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx
                ? 'w-8 bg-accent-red shadow-lg shadow-accent-red/50'
                : 'w-3 bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="mx-auto max-w-4xl text-center flex flex-col gap-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue">
            Who We Are
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep leading-tight">
            Who We Are: A Dynamic Fusion of Creativity and Technology
          </h2>
          <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed max-w-3xl mx-auto">
            At Nexstar, we are more than just an IT and media company. We are a team of passionate innovators, thinkers, and creators. Our strength lies in blending technology with creativity to deliver solutions that don't just solve problems, but inspire and engage.
          </p>
        </div>

        {/* Values Cards Marquee */}
        <div className="relative w-full overflow-hidden mt-10 flex">
          {/* Subtle fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-left gap-6 py-4">
            {/* First group of cards */}
            {companyValues.map((val, idx) => (
              <div
                key={`val-1-${idx}`}
                className="flex flex-col bg-[#F0F4F8] border border-slate-200/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 shrink-0 w-[300px] sm:w-[320px]"
              >
                {/* Top Card Image & Translucent Banner Overlay */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-white">
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/60 backdrop-blur-md border border-white/20 py-2 rounded-xl text-center shadow-sm">
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-slate-800">
                      {val.imageOverlay}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col gap-4 text-left justify-between flex-1">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5">
                      <Lightbulb className="w-5 h-5 text-navy-deep flex-shrink-0" />
                      <h3 className="font-heading text-base sm:text-lg font-bold text-navy-deep leading-tight">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-xs sm:text-sm font-semibold leading-relaxed min-h-[110px] sm:min-h-[96px]">
                      {val.desc}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-fit inline-flex items-center gap-2 rounded-xl bg-navy-deep px-5 py-2.5 font-heading text-xs font-bold text-white hover:bg-accent-red hover:scale-105 transition-all duration-200 cursor-pointer shadow-md shadow-navy-deep/10"
                  >
                    Scale With Us
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Second group of cards for seamless infinite loop */}
            {companyValues.map((val, idx) => (
              <div
                key={`val-2-${idx}`}
                className="flex flex-col bg-[#F0F4F8] border border-slate-200/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 shrink-0 w-[300px] sm:w-[320px]"
              >
                {/* Top Card Image & Translucent Banner Overlay */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-white">
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/60 backdrop-blur-md border border-white/20 py-2 rounded-xl text-center shadow-sm">
                    <span className="font-heading text-xs font-bold uppercase tracking-widest text-slate-800">
                      {val.imageOverlay}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col gap-4 text-left justify-between flex-1">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5">
                      <Lightbulb className="w-5 h-5 text-navy-deep flex-shrink-0" />
                      <h3 className="font-heading text-base sm:text-lg font-bold text-navy-deep leading-tight">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-xs sm:text-sm font-semibold leading-relaxed min-h-[110px] sm:min-h-[96px]">
                      {val.desc}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-fit inline-flex items-center gap-2 rounded-xl bg-navy-deep px-5 py-2.5 font-heading text-xs font-bold text-white hover:bg-accent-red hover:scale-105 transition-all duration-200 cursor-pointer shadow-md shadow-navy-deep/10"
                  >
                    Scale With Us
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Stat Ticker */}
      <section className="bg-navy-deep py-12 text-white relative z-10 shadow-inner">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 text-left">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent-red shrink-0 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-white">{item.value}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-slate-400 text-xs font-semibold">{item.label}</span>
                    <span className="text-[10px] bg-accent-red/20 text-accent-red px-2 py-0.5 rounded-full font-mono font-bold uppercase">{item.change}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How We Work (Roadmap) */}
      <section className="py-24 px-6 bg-white border-b border-gray-200/50 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-red/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-xs font-extrabold uppercase tracking-widest text-accent-red">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep mt-3 mb-16">
              Our Simple 4-Step Process
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Horizontal timeline connecting line (desktop) */}
            <div className="absolute top-5 left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-accent-red/20 via-highlight-blue/20 to-accent-red/20 hidden md:block animate-pulse" />

            {/* Vertical timeline connecting line (mobile) */}
            <div className="absolute top-5 bottom-5 left-[20px] w-[3px] bg-gradient-to-b from-accent-red/20 via-highlight-blue/20 to-accent-red/20 md:hidden" />

            <div className="grid md:grid-cols-4 gap-12 md:gap-8 text-left relative">

              {/* Step 1 */}
              <ScrollReveal direction="up" delay={0.2} className="relative pl-14 md:pl-0">
                <div className="absolute left-0 top-0 md:static md:mb-6 z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-[3px] border-accent-red flex items-center justify-center shadow-md font-heading text-xs font-extrabold text-navy-deep hover:scale-110 transition-transform">
                    01
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-navy-deep mb-2">Understand Your Needs</h4>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                    We talk with you to understand your specific business goals, challenges, and project requirements so we are completely aligned from day one.
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal direction="up" delay={0.4} className="relative pl-14 md:pl-0">
                <div className="absolute left-0 top-0 md:static md:mb-6 z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-[3px] border-highlight-blue flex items-center justify-center shadow-md font-heading text-xs font-extrabold text-navy-deep hover:scale-110 transition-transform">
                    02
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-navy-deep mb-2">Create a Custom Plan</h4>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                    We lay out a clear strategy, timeline, and design mockups for your approval, ensuring you know exactly what is being built.
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal direction="up" delay={0.6} className="relative pl-14 md:pl-0">
                <div className="absolute left-0 top-0 md:static md:mb-6 z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-[3px] border-accent-red flex items-center justify-center shadow-md font-heading text-xs font-extrabold text-navy-deep hover:scale-110 transition-transform">
                    03
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-navy-deep mb-2">Build & Launch</h4>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                    Our development team writes clean code, integrates necessary tools, conducts testing, and successfully launches your project live.
                  </p>
                </div>
              </ScrollReveal>

              {/* Step 4 */}
              <ScrollReveal direction="up" delay={0.8} className="relative pl-14 md:pl-0">
                <div className="absolute left-0 top-0 md:static md:mb-6 z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-[3px] border-highlight-blue flex items-center justify-center shadow-md font-heading text-xs font-extrabold text-navy-deep hover:scale-110 transition-transform">
                    04
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-navy-deep mb-2">Support & Improve</h4>
                  <p className="text-text-secondary text-xs font-semibold leading-relaxed">
                    We monitor performance, fix bugs, keep your software updated, and work together on future enhancements as your business grows.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20 px-6 bg-soft-bg border-b border-gray-200/50">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep mt-3 mb-4">
            Services We Provide
          </h2>
          <p className="text-text-secondary font-light max-w-2xl mx-auto leading-relaxed text-sm sm:text-base mb-12">
            We provide standard-compliant software development, targeted search advertisements, full-scale Zoho CRM blueprints, cyber threat auditing, and premium brand designs tailored for modern business scaling.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => {
              const ctaText = service.title.endsWith('Services')
                ? service.title.slice(0, -1)
                : `${service.title} Service`;
              return (
                <ScrollReveal
                  key={service.id}
                  direction="up"
                  delay={0.1 * (idx + 1)}
                  className="flex"
                >
                  <div
                    onClick={() => handleServiceClick(service.id)}
                    className={`relative overflow-hidden bg-white border-[3px] ${service.borderClass} rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-end text-left group cursor-pointer w-full min-h-[340px]`}
                  >
                    {service.bgImage && (
                      <div
                        className="absolute inset-0 z-0 bg-cover bg-center opacity-100 pointer-events-none transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${service.bgImage})` }}
                      />
                    )}

                    <div className="relative z-10 w-full">
                      {/* Arrow trigger CTA */}
                      <div className="w-full mt-2 flex items-center justify-between rounded-xl bg-gray-light group-hover:bg-navy-deep group-hover:text-white px-4 py-3 font-heading text-xs font-bold text-navy-deep transition-all duration-200">
                        {ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <button
            onClick={() => handleNavClick('services')}
            className="mt-12 inline-flex items-center gap-2 rounded-xl bg-navy-deep px-8 py-3.5 font-heading text-xs font-bold text-white hover:bg-accent-red hover:scale-105 transition-all cursor-pointer shadow-lg shadow-navy-deep/15"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>



      {/* Web Hosting Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <a
          href="https://www.nexstar.host"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer"
        >
          <img
            src={hostImg}
            alt="Nexstar Managed Web Hosting Banner"
            className="w-full h-auto object-cover"
          />
        </a>
      </section>

      {/* Clients Marquee Section */}
      <section className="py-12 bg-white border-t border-gray-100 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            We Have Collaborated With
          </span>
        </div>

        <div className="relative w-full overflow-hidden flex">
          {/* Subtle fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-left gap-16 items-center py-2">
            {/* First group of logos */}
            {clientLogos.map((client, idx) => (
              <div key={`logo-1-${idx}`} className="shrink-0 flex items-center justify-center transition-all duration-300 w-[130px] h-[65px] hover:scale-105">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Second group of logos for seamless scroll */}
            {clientLogos.map((client, idx) => (
              <div key={`logo-2-${idx}`} className="shrink-0 flex items-center justify-center transition-all duration-300 w-[130px] h-[65px] hover:scale-105">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid Gallery */}
      <section className="py-20 px-6 bg-soft-bg border-t border-gray-200/50">
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
                Client Success
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep mt-5 leading-tight">
                Our Clients' Success: Stories of Impact and Scale
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-text-secondary text-sm sm:text-base font-light mt-4 leading-relaxed">
                Read how engineering leaders and founders from around the world partner with Nexstar Media to deliver next-generation software platforms and high-retention user experiences.
              </p>
            </ScrollReveal>
          </div>

          {/* Staggered Masonry Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {[homeTestimonials[0], homeTestimonials[3]].map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.1 * (idx + 1)}>
                  <div className={`p-8 rounded-3xl border-3 border-slate-100 bg-white hover:border-navy-deep/20 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col gap-6 relative group`}>
                    <div className="absolute top-6 right-8 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity">
                      <Quote className="w-10 h-10 text-navy-deep fill-current" />
                    </div>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-text-primary text-sm font-light leading-relaxed italic relative z-10">
                      "{item.quote}"
                    </p>
                    <div className="border-t border-slate-100 pt-5 flex flex-col">
                      <span className="font-heading font-extrabold text-sm text-navy-deep">{item.name}</span>
                      <span className="text-text-secondary text-[11px] font-semibold mt-0.5">
                        {item.role}, <span className="text-navy-deep font-bold">{item.company}</span>
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 md:mt-8 lg:mt-12">
              {[homeTestimonials[1], homeTestimonials[4]].map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.15 * (idx + 1)}>
                  <div className={`p-8 rounded-3xl border-3 border-slate-100 bg-white hover:border-navy-deep/20 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col gap-6 relative group`}>
                    <div className="absolute top-6 right-8 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity">
                      <Quote className="w-10 h-10 text-navy-deep fill-current" />
                    </div>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-text-primary text-sm font-light leading-relaxed italic relative z-10">
                      "{item.quote}"
                    </p>
                    <div className="border-t border-slate-100 pt-5 flex flex-col">
                      <span className="font-heading font-extrabold text-sm text-navy-deep">{item.name}</span>
                      <span className="text-text-secondary text-[11px] font-semibold mt-0.5">
                        {item.role}, <span className="text-navy-deep font-bold">{item.company}</span>
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 lg:mt-6">
              {[homeTestimonials[2], homeTestimonials[5]].map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.2 * (idx + 1)}>
                  <div className={`p-8 rounded-3xl border-3 border-slate-100 bg-white hover:border-navy-deep/20 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col gap-6 relative group`}>
                    <div className="absolute top-6 right-8 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity">
                      <Quote className="w-10 h-10 text-navy-deep fill-current" />
                    </div>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-text-primary text-sm font-light leading-relaxed italic relative z-10">
                      "{item.quote}"
                    </p>
                    <div className="border-t border-slate-100 pt-5 flex flex-col">
                      <span className="font-heading font-extrabold text-sm text-navy-deep">{item.name}</span>
                      <span className="text-text-secondary text-[11px] font-semibold mt-0.5">
                        {item.role}, <span className="text-navy-deep font-bold">{item.company}</span>
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
