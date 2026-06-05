import { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import nexLogo from '../assets/nex.webp';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

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
      dropdown: [
        { label: 'Overview & Main Hub', page: 'services' },
        { label: 'Social Media', page: { name: 'service-detail', id: 'social-media' } },
        { label: 'Creative & Branding', page: { name: 'service-detail', id: 'creative-branding' } },
        { label: 'B2B Marketing', page: { name: 'service-detail', id: 'b2b-marketing' } },
        { label: 'Search Marketing', page: { name: 'service-detail', id: 'search-marketing' } },
        { label: 'Video Production', page: { name: 'service-detail', id: 'video-production' } },
        { label: 'Reputation Management', page: { name: 'service-detail', id: 'online-reputation' } },
        { label: 'E-commerce Dev', page: { name: 'service-detail', id: 'ecommerce' } },
        { label: 'Website Development', page: { name: 'service-detail', id: 'web-development' } },
        { label: 'Mobile App Dev', page: { name: 'service-detail', id: 'mobile-app' } },
        { label: 'Augmented Reality', page: { name: 'service-detail', id: 'augmented-reality' } },
        { label: 'Web & Tech Solutions', page: { name: 'service-detail', id: 'web-tech-solutions' } },
        { label: 'Database & Data Science', page: { name: 'service-detail', id: 'database-data-science' } },
        { label: 'Product Engineering', page: { name: 'service-detail', id: 'product-engineering' } },
        { label: 'IT Management', page: { name: 'service-detail', id: 'it-management' } },
        { label: 'Cybersecurity & AI Dev', page: { name: 'service-detail', id: 'cybersecurity-ai' } },
        { label: 'Cloud & Hosting', page: { name: 'service-detail', id: 'cloud-hosting' } },
        { label: 'Media & Broadcast', page: { name: 'service-detail', id: 'media-broadcast' } },
        { label: 'Social Media Ads', page: { name: 'service-detail', id: 'social-media-ads' } },
        { label: 'Zoho Services', page: { name: 'service-detail', id: 'zoho-services' } },
        { label: 'Domain Booking', page: { name: 'service-detail', id: 'domain-booking' } },
      ],
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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

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
        <nav className="hidden lg:flex items-center gap-8 font-body text-sm font-medium">
          {navLinks.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  if (item.dropdown) {
                    setActiveDropdown(activeDropdown === idx ? null : idx);
                  } else if (item.page) {
                    handleNavClick(item.page);
                  }
                }}
                className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${isLinkActive(item)
                  ? 'text-navy-deep font-bold border-b-2 border-accent-red'
                  : 'text-text-secondary hover:text-navy-deep'
                  }`}
              >
                <span>{item.label}</span>
                {item.dropdown && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </button>

              {/* Mega/Simple Dropdown Container */}
              {item.dropdown && activeDropdown === idx && (
                <div className={`absolute top-full z-50 pt-2 animate-in fade-in slide-in-from-top-2 duration-200 ${item.label === 'Services'
                  ? 'left-1/2 w-[760px] -translate-x-1/2'
                  : 'left-1/2 w-64 -translate-x-1/2'
                  }`}>
                  <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-xl shadow-slate-200/50 backdrop-blur-xl">
                    <div className={item.label === 'Services' ? 'grid grid-cols-3 gap-x-3 gap-y-1' : 'grid gap-1'}>
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
            className="flex items-center gap-2 rounded-xl bg-navy-deep px-5 py-2.5 font-heading text-xs font-bold tracking-wide text-white hover:bg-accent-red hover:scale-105 shadow-md shadow-navy-deep/15 transition-all duration-300 cursor-pointer"
          >
            Apply Now
            <ArrowRight className="h-3.5 w-3.5 text-white/90" />
          </button>
        </div>

        {/* Mobile Toggle Trigger */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => handleNavClick('apply-now')}
            className="rounded-lg bg-navy-deep px-4 py-2 font-heading text-xs font-bold text-white hover:bg-accent-red transition-colors"
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
                  <div className="grid grid-cols-2 gap-2 pl-4 py-2 border-l border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
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
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
