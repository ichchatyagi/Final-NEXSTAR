import { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  LayoutGrid,
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
  Layers
} from 'lucide-react';
import nexLogo from '../assets/nex.webp';
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

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const navRef = useRef(null);

  const handleMouseEnter = (idx) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(idx);
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 280); // Holds for 280ms grace period so moving mouse into dropdown is completely smooth
  };

  const handleDropdownClick = (e, idx) => {
    e.stopPropagation();
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown((prev) => (prev === idx ? null : idx));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const toggleMobileDropdown = (idx) => {
    setMobileActiveDropdown(mobileActiveDropdown === idx ? null : idx);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileActiveDropdown(null);
  };

  const getPageName = () => {
    return typeof currentPage === 'string' ? currentPage : currentPage?.name;
  };

  const navLinks = [
    { label: 'Home', page: 'home' },
    {
      label: 'About',
      dropdown: [
        { label: 'Our Story', page: 'our-story' },
        { label: 'Our Team', page: 'team' },
        { label: 'Portfolio', page: 'portfolio' },
      ],
    },
    {
      label: 'Services',
      page: 'services',
      dropdown: coreServices,
    },
    {
      label: 'Pricing',
      page: 'seo-pricing',
      dropdown: [
        { label: 'SEO/GEO Campaign Plans', page: 'seo-pricing' },
        { label: 'SMO/SMM Campaign Plans', page: 'smo-pricing' },
        { label: 'PPC/Paid Campaign Plans', page: 'ppc-pricing' },
      ],
    },
    {
      label: 'Insights',
      page: 'blog',
      dropdown: [
        { label: 'All Insights', page: 'blog' },
      ],
    },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (targetPage) => {
    setCurrentPage(targetPage);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isLinkActive = (item) => {
    const currentName = getPageName();
    if (item.page) {
      const targetName = typeof item.page === 'string' ? item.page : item.page?.name;
      if (currentName === targetName) return true;
    }
    if (item.dropdown) {
      return item.dropdown.some(subItem => {
        const subName = typeof subItem.page === 'string' ? subItem.page : subItem.page?.name;
        return currentName === subName;
      });
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/85 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 relative">

        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex cursor-pointer items-center group animate-in fade-in duration-300"
        >
          <img
            src={nexLogo}
            alt="NEXSTAR Logo"
            className="h-32 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Navigation Link Flow */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-8 font-body text-sm font-medium h-full">
          {navLinks.map((item, idx) => (
            <div
              key={idx}
              className="relative h-20 flex items-center"
              onMouseEnter={() => item.dropdown && handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={(e) => {
                  if (item.dropdown) {
                    handleDropdownClick(e, idx);
                  } else if (item.page) {
                    handleNavClick(item.page);
                  }
                }}
                className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${isLinkActive(item)
                  ? 'text-navy-deep font-bold border-b-2 border-navy-deep'
                  : 'text-text-secondary hover:text-navy-deep'
                  }`}
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
                      activeDropdown === idx ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Dropdown Container */}
              {item.dropdown && activeDropdown === idx && (
                <div
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full z-50 pt-1.5 animate-in fade-in slide-in-from-top-1 duration-150 ${
                    item.label === 'Services'
                      ? 'left-1/2 -translate-x-[42%] w-[820px] max-w-[95vw]'
                      : 'left-1/2 -translate-x-1/2 w-64'
                  }`}
                >
                  {/* Invisible Bridge to prevent any hover gap */}
                  <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent pointer-events-auto" />

                  <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-2xl shadow-slate-300/40 backdrop-blur-xl">
                    {item.label === 'Services' ? (
                      <div>
                        {/* Top Header Bar */}
                        <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3.5">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="flex items-center gap-3 text-left group/hub cursor-pointer"
                          >
                            <div className="w-8 h-8 rounded-xl bg-navy-deep text-white group-hover/hub:bg-navy-deep/90 flex items-center justify-center transition-colors shadow-sm shrink-0">
                              <LayoutGrid className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="font-heading text-xs font-extrabold text-navy-deep group-hover/hub:text-highlight-blue transition-colors block">
                                Overview &amp; Main Services Hub
                              </span>
                              <span className="text-[10.5px] text-slate-400 block">
                                Explore all 10 corporate verticals &amp; 66 specialized enterprise capabilities
                              </span>
                            </div>
                          </button>

                          <button
                            onClick={() => handleNavClick('services')}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-navy-deep hover:bg-slate-800 text-white font-heading text-xs font-bold transition-all cursor-pointer shrink-0 shadow-sm"
                          >
                            <span>Explore Main Hub</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* 2-Column Grid: Showcasing ONLY the 10 Main Services */}
                        <div className="grid grid-cols-2 gap-2.5">
                          {coreServices.map((service) => {
                            const IconComponent = serviceIcons[service.id] || Layers;

                            return (
                              <button
                                key={service.id}
                                onClick={() => handleNavClick({ name: 'service-detail', id: service.id })}
                                className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-navy-deep/40 hover:shadow-xs transition-all group text-left cursor-pointer"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${service.theme.iconBox} group-hover:scale-105 transition-transform`}>
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] font-mono font-bold text-slate-400">
                                        {service.number}.
                                      </span>
                                      <span className="font-heading text-xs font-bold text-navy-deep group-hover:text-highlight-blue transition-colors truncate block">
                                        {service.title}
                                      </span>
                                    </div>
                                    <span className="text-[10.5px] text-slate-400 font-body block truncate">
                                      {service.subServices.length} specialized capabilities
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-1.5 pl-2 shrink-0">
                                  <span className="text-[11px] font-heading font-semibold text-slate-400 group-hover:text-navy-deep transition-colors">
                                    Show more
                                  </span>
                                  <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-navy-deep group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {/* Bottom Bar */}
                        <div className="border-t border-gray-100 pt-2.5 mt-3 flex items-center justify-between text-xs text-slate-400">
                          <span className="font-heading text-[11px] font-semibold text-slate-500">
                            Looking for a custom cross-vertical solution?
                          </span>
                          <button
                            onClick={() => handleNavClick('contact')}
                            className="font-heading text-xs font-bold text-navy-deep hover:text-highlight-blue inline-flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <span>Consult With Our Architects</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-1">
                        {item.dropdown.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleNavClick(sub.page)}
                            className="w-full rounded-lg px-3 py-2 text-left text-xs font-semibold text-text-secondary hover:bg-gray-light hover:text-navy-deep transition-all duration-150 cursor-pointer"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Apply CTA Block */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('apply-now')}
            className="flex items-center gap-2 rounded-xl bg-navy-deep px-5 py-2.5 font-heading text-xs font-bold tracking-wide text-white hover:bg-highlight-blue hover:scale-105 shadow-md shadow-navy-deep/15 transition-all duration-300 cursor-pointer"
          >
            Apply Now
            <ArrowRight className="h-3.5 w-3.5 text-white/90" />
          </button>
        </div>

        {/* Mobile Toggle Trigger */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => handleNavClick('apply-now')}
            className="rounded-lg bg-navy-deep px-4 py-2 font-heading text-xs font-bold text-white hover:bg-highlight-blue transition-colors"
          >
            Apply
          </button>
          <button
            onClick={handleMobileMenuToggle}
            className="rounded-lg p-2 text-text-primary hover:bg-gray-light hover:text-navy-deep transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200/80 bg-white/98 px-6 py-6 shadow-lg animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-5">
            {navLinks.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    if (item.dropdown) {
                      toggleMobileDropdown(idx);
                    } else if (item.page) {
                      handleNavClick(item.page);
                    }
                  }}
                  className={`text-left text-base font-semibold tracking-wide border-b border-gray-100 pb-1.5 flex items-center justify-between ${isLinkActive(item) ? 'text-navy-deep font-bold' : 'text-text-primary'
                    }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`h-4 w-4 opacity-70 transition-transform duration-200 ${mobileActiveDropdown === idx ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </button>

                {item.dropdown && mobileActiveDropdown === idx && (
                  <div className="grid grid-cols-1 gap-2 pl-3 py-2 border-l-2 border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.label === 'Services' ? (
                      <>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="w-full text-left p-2.5 rounded-xl bg-navy-deep text-white font-heading text-xs font-bold mb-2 flex items-center justify-between shadow-sm"
                        >
                          <div className="flex items-center gap-2">
                            <LayoutGrid className="w-3.5 h-3.5 text-highlight-blue" />
                            <span>Overview &amp; Main Services Hub</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex flex-col gap-2">
                          {coreServices.map((service) => {
                            const IconComponent = serviceIcons[service.id] || Layers;

                            return (
                              <button
                                key={service.id}
                                onClick={() => handleNavClick({ name: 'service-detail', id: service.id })}
                                className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-200/70 bg-slate-50/70 hover:bg-white text-left cursor-pointer group transition-all"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${service.theme.iconBox}`}>
                                    <IconComponent className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] font-mono font-bold text-slate-400">
                                        {service.number}.
                                      </span>
                                      <span className="font-heading text-xs font-bold text-navy-deep group-hover:text-highlight-blue truncate block">
                                        {service.title}
                                      </span>
                                    </div>
                                    <span className="text-[10px] text-slate-400 block">
                                      {service.subServices.length} specialized capabilities
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-1 pl-2 shrink-0">
                                  <span className="text-[10.5px] font-heading font-bold text-highlight-blue group-hover:text-navy-deep transition-colors">
                                    Show more
                                  </span>
                                  <div className="w-5 h-5 rounded-full bg-blue-50 group-hover:bg-navy-deep group-hover:text-white flex items-center justify-center transition-colors">
                                    <ArrowRight className="w-3 h-3 text-highlight-blue group-hover:text-white" />
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        {item.dropdown.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleNavClick(sub.page)}
                            className="text-left text-xs font-medium text-text-secondary hover:text-navy-deep py-1"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
