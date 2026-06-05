import nexLogo from '../assets/nex.webp';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-light border-t border-gray-200/50 py-16 relative z-10 font-body">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 pb-12 border-b border-slate-200">

          {/* Logo and Brand tagline */}
          <div className="col-span-1 sm:col-span-2 flex flex-col gap-2">
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center cursor-pointer group w-fit -mt-5"
            >
              <img
                src={nexLogo}
                alt="NEXSTAR Logo"
                className="h-28 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed -mt-4">
              Nexstar Media &amp; Technologies is a premium global corporate agency engineering bespoke digital infrastructure, AI automations, and performance-led brand designs.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.facebook.com/nexstarmediaindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-6 h-6 transition-all duration-300 hover:scale-110" viewBox="0 0 24 24">
                  <path fill="#1877F2" d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/nexstarmediaindia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-6 h-6 transition-all duration-300 hover:scale-110" viewBox="0 0 24 24">
                  <path fill="#0A66C2" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z"/>
                  <path fill="#FFF" d="M8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/nexstarmedialive" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-6 h-6 transition-all duration-300 hover:scale-110" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagram-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FEC564" />
                      <stop offset="30%" stopColor="#FD3A5B" />
                      <stop offset="70%" stopColor="#D9318A" />
                      <stop offset="100%" stopColor="#A22EA2" />
                    </linearGradient>
                  </defs>
                  <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#instagram-grad)" />
                  <rect x="5" y="5" width="14" height="14" rx="3.5" fill="none" stroke="#FFF" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" fill="none" stroke="#FFF" strokeWidth="1.5" />
                  <circle cx="16" cy="8" r="1" fill="#FFF" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Informational Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold text-navy-deep uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold text-text-secondary">
              <li><button onClick={() => handleNavClick('about')} className="hover:text-navy-deep transition-colors cursor-pointer">About Us</button></li>
              <li><button onClick={() => handleNavClick('our-story')} className="hover:text-navy-deep transition-colors cursor-pointer">Our Story</button></li>
              <li><button onClick={() => handleNavClick('team')} className="hover:text-navy-deep transition-colors cursor-pointer">Meet the Team</button></li>
              <li><button onClick={() => handleNavClick('portfolio')} className="hover:text-navy-deep transition-colors cursor-pointer">Case Studies</button></li>
            </ul>
          </div>

          {/* Column 3: Corporate Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold text-navy-deep uppercase tracking-wider">Services</h3>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold text-text-secondary">
              <li><button onClick={() => handleNavClick({ name: 'service-detail', id: 'web-development' })} className="hover:text-navy-deep transition-colors cursor-pointer">Web Application Development</button></li>
              <li><button onClick={() => handleNavClick({ name: 'service-detail', id: 'mobile-app' })} className="hover:text-navy-deep transition-colors cursor-pointer">Mobile App Engineering</button></li>
              <li><button onClick={() => handleNavClick({ name: 'service-detail', id: 'search-marketing' })} className="hover:text-navy-deep transition-colors cursor-pointer">Search Engine Optimization</button></li>
              <li><button onClick={() => handleNavClick({ name: 'service-detail', id: 'cybersecurity-ai' })} className="hover:text-navy-deep transition-colors cursor-pointer">AI Automation Integration</button></li>
              <li><button onClick={() => handleNavClick('services')} className="text-highlight-blue hover:underline cursor-pointer">Browse All 20 Services</button></li>
            </ul>
          </div>

          {/* Column 4: Pricing and Inquiries */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold text-navy-deep uppercase tracking-wider">Solutions</h3>
            <ul className="flex flex-col gap-2.5 text-xs font-semibold text-text-secondary">
              <li><button onClick={() => handleNavClick('seo-pricing')} className="hover:text-navy-deep transition-colors cursor-pointer">SEO/GEO Campaign Tiers</button></li>
              <li><button onClick={() => handleNavClick('smo-pricing')} className="hover:text-navy-deep transition-colors cursor-pointer">SMO Package Matrix</button></li>
              <li><button onClick={() => handleNavClick('ppc-pricing')} className="hover:text-navy-deep transition-colors cursor-pointer">PPC/Paid Campaign Fees</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs font-semibold text-slate-500">
          <p>©️ 2019 Nexstar Media. All rights reserved.</p>
          <p>The Flagship Company of Nexstar Live Technologies LLC, United States.</p>
        </div>

      </div>
    </footer>
  );
}
