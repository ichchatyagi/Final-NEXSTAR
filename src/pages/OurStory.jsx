import nexLogo from '../assets/nex.webp';
import whyChooseUsImg from '../assets/why_choose_us.png';
import { Compass, Target, Eye, Star, CheckCircle2 } from 'lucide-react';


export default function OurStory({ setCurrentPage }) {

  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const indianTestimonials = [
    {
      name: 'Rohan Sharma',
      role: 'VP of Engineering',
      company: 'JioStream',
      location: 'Noida, India 🇮🇳',
      quote: 'Nexstar Media revamped our entire OTT media delivery architecture. Their custom compilation nodes reduced latency by 42% globally.',
      rating: 5,
    },
    {
      name: 'Priya Nair',
      role: 'Co-Founder',
      company: 'D2C Pulse',
      location: 'Bangalore, India 🇮🇳',
      quote: 'The AI lead validation engine Nexstar deployed has completely streamlined our customer acquisition. Incredible ROI from day one.',
      rating: 5,
    },
    {
      name: 'Amitabh Verma',
      role: 'Director of Cybersecurity',
      company: 'FinSafe India',
      location: 'Mumbai, India 🇮🇳',
      quote: 'Outstanding cybersecurity audit and cloud hardening. The team integrated advanced telemetry scripts that block budget leaks and attacks.',
      rating: 5,
    },
    {
      name: 'Deepika Sen',
      role: 'Chief Marketing Officer',
      company: 'Zenia Fashion',
      location: 'Delhi, India 🇮🇳',
      quote: 'Nexstar beautifully fused technology and creative media for our brand launch. Our direct conversions soared by 55% within months.',
      rating: 5,
    },
  ];

  const internationalTestimonials = [
    {
      name: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Aether Digital LLC',
      location: 'New York, USA 🇺🇸',
      quote: "Nexstar's strategic intelligence in Global Operations and cloud scalability completely restructured our international sales framework.",
      rating: 5,
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of OTT Strategy',
      company: 'SkyStream Play',
      location: 'London, UK 🇬🇧',
      quote: 'The OTT and broadcast engine they built is outstanding. We achieved sub-100ms load times and seamless live stream integrations.',
      rating: 5,
    },
    {
      name: 'Kenji Takahashi',
      role: 'Operations Lead',
      company: 'Nippon Compilers',
      location: 'Tokyo, Japan 🇯🇵',
      quote: 'Excellent data science and React telemetry setups. The analytical transparency they provided allowed us to hit all our target scales.',
      rating: 5,
    },
    {
      name: 'Elena Rossi',
      role: 'Creative Director',
      company: 'Vela Luxury Group',
      location: 'Milan, Italy 🇮🇹',
      quote: 'Nexstar Live Technologies designed an absolute masterpiece for our digital transformation journey. Standard-compliant, sleek, and elegant.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-soft-bg min-h-screen relative font-body text-text-primary pb-24">

      {/* Page Header */}
      <section className="bg-navy-deep py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-10 w-64 h-64 rounded-full bg-highlight-blue/10 blur-[60px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest mb-3 block">
            About Us
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Our Story &amp; Vision
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Innovating the Future of Technology and Media
          </p>
        </div>
      </section>

      {/* About Us Split Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Logo */}
          <div className="lg:col-span-5 flex justify-center animate-in fade-in duration-700">
            <div className="bg-white border border-gray-200/80 p-10 sm:p-14 rounded-3xl shadow-xl shadow-slate-100/50 flex justify-center items-center transition-all duration-300 hover:shadow-2xl hover:border-gray-300 max-w-md w-full aspect-square">
              <img 
                src={nexLogo} 
                alt="Nexstar Logo" 
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side: Paragraph */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left animate-in fade-in duration-700 delay-150">
            <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep leading-tight">
              Innovating the Future of Technology and Media
            </h2>
            <div className="h-1 w-20 bg-accent-red rounded-full" />
            
            <div className="text-text-secondary text-sm sm:text-base font-light leading-relaxed flex flex-col gap-4">
              <p>
                <strong className="text-navy-deep font-semibold">Nexstar Live Technologies LLC</strong> is a global leader at the intersection of technology, media, and digital transformation. Operating across the U.S., U.K., and India, our registered trademark symbolizes a commitment to innovation, credibility, and global excellence.
              </p>
              <p>
                We provide a comprehensive portfolio of advanced solutions—from Data Science, AI, and Product Engineering to Cybersecurity, Cloud, and IT Management—designed to drive agile, secure, and scalable growth. Our expertise extends to pioneering digital media, broadcast, and OTT platforms, fused with creative advertising and marketing strategies to amplify brand impact.
              </p>
              <p>
                Beyond technology, we deliver strategic intelligence in Sales, Finance, and Global Operations, empowering enterprises with competitive insights and innovative business models. By seamlessly integrating cutting-edge technology with strategic vision, Nexstar Live Technologies LLC doesn't just deliver solutions; we shape the future of industry worldwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Pillars Section: History, Mission, Vision */}
      <section className="py-24 bg-gradient-to-b from-gray-light/30 to-gray-light/80 border-y border-gray-200/60 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-highlight-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest bg-accent-red/5 px-4 py-1.5 rounded-full border border-accent-red/10">
              Our Foundations
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep mt-5 leading-tight">
              The Principles That Drive Our Global Success
            </h2>
            <p className="text-text-secondary text-sm sm:text-base font-light mt-4 leading-relaxed">
              Exploring the history, mission, and long-term vision at the core of Nexstar Live Technologies LLC.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Card 1: Our History */}
            <div className="group bg-white border border-gray-200/80 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-highlight-blue/5 hover:border-highlight-blue/30 hover:-translate-y-2.5 transition-all duration-300 flex flex-col gap-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-highlight-blue/5 rounded-full blur-2xl pointer-events-none group-hover:bg-highlight-blue/15 transition-all duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-highlight-blue/10 border border-highlight-blue/20 flex items-center justify-center text-highlight-blue shrink-0 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Compass className="w-7 h-7" />
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-deep mb-4">
                  Our History
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed">
                  Nexstar Live Technologies LLC is a global company committed to excellence in technology, media, fashion, and digital transformation. Founded on innovation, creativity, and trust, it delivers customer-centric solutions with quality and integrity. With international presence and a dedicated team, Nexstar continues driving sustainable growth, shaping modern industries, and empowering global success.
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="h-1.5 w-0 bg-highlight-blue group-hover:w-full transition-all duration-500 mt-6 rounded-full" />
            </div>

            {/* Card 2: Our Mission */}
            <div className="group bg-white border border-gray-200/80 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-accent-red/5 hover:border-accent-red/30 hover:-translate-y-2.5 transition-all duration-300 flex flex-col gap-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent-red/15 transition-all duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-accent-red/10 border border-accent-red/20 flex items-center justify-center text-accent-red shrink-0 shadow-inner group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <Target className="w-7 h-7" />
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-deep mb-4">
                  Our Mission
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed">
                  Our mission at Nexstar Live Technologies LLC, is to empower businesses, brands, and individuals with innovative, technology-driven, and creative solutions. We are dedicated to delivering excellence across IT, media, fashion, and digital platforms while upholding trust, quality, and customer satisfaction, fostering sustainable growth, innovation, and global success.
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="h-1.5 w-0 bg-accent-red group-hover:w-full transition-all duration-500 mt-6 rounded-full" />
            </div>

            {/* Card 3: Our Vision */}
            <div className="group bg-white border border-gray-200/80 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/30 hover:-translate-y-2.5 transition-all duration-300 flex flex-col gap-6 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/15 transition-all duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 shrink-0 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Eye className="w-7 h-7" />
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-deep mb-4">
                  Our Vision
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed">
                  Our vision at Nexstar Live Technologies LLC, is to be a global leader in technology, media, fashion, and digital innovation. We aspire to create transformative solutions that empower businesses and individuals, foster sustainable growth, and redefine industries, while upholding trust, integrity, and excellence to shape a smarter, connected, and progressive future.
                </p>
              </div>

              {/* Decorative bottom line */}
              <div className="h-1.5 w-0 bg-indigo-500 group-hover:w-full transition-all duration-500 mt-6 rounded-full" />
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-200/50">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Details Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left animate-in fade-in duration-700">
            <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest bg-accent-red/5 px-4 py-1.5 rounded-full border border-accent-red/10 self-start">
              Strategic Advantage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep leading-tight">
              Why You Should Choose Us
            </h2>
            <div className="h-1 w-20 bg-accent-red rounded-full" />
            
            <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed">
              We provide the most comprehensive set of content, technology, and solutions designed with your brand and customers in mind. At Nexstar Live Technologies LLC, we bridge the gap between creative visual media and robust software performance.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              
              {/* Point 1 */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-highlight-blue/10 border border-highlight-blue/20 flex items-center justify-center text-highlight-blue shrink-0 group-hover:scale-110 group-hover:bg-highlight-blue/20 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-navy-deep mb-1">
                    Comprehensive Content Technology
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed">
                    Custom-built React compile nodes that load under 50ms, ensuring that up to 40% more of your media ad traffic is successfully retained.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-accent-red/10 border border-accent-red/20 flex items-center justify-center text-accent-red shrink-0 group-hover:scale-110 group-hover:bg-accent-red/20 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-navy-deep mb-1">
                    AI &amp; Data Science Scaling
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed">
                    Automated lead validation workflows and AI filters that lower annual operating validation costs by up to $1.4M for corporate partnerships.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 shrink-0 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-navy-deep mb-1">
                    Global Operation Integrity
                  </h4>
                  <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed">
                    Operating continuously across the U.S., U.K., and India. Our global structure provides round-the-clock technical audits, support, and security.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 flex justify-center animate-in fade-in duration-700 delay-150">
            <div className="relative group max-w-md sm:max-w-lg w-full">
              {/* Background glowing aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-highlight-blue to-accent-red rounded-[2.5rem] blur-2xl opacity-15 group-hover:opacity-30 transition duration-500 pointer-events-none" />
              
              <div className="relative bg-white border border-gray-200 p-4 rounded-[2.2rem] shadow-xl overflow-hidden group-hover:shadow-2xl group-hover:border-slate-300 transition-all duration-300">
                <img 
                  src={whyChooseUsImg} 
                  alt="Why Choose Nexstar Live Technologies" 
                  className="rounded-3xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 max-w-full overflow-hidden bg-soft-bg relative border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest bg-accent-red/5 px-4 py-1.5 rounded-full border border-accent-red/10">
            Success Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-deep mt-5 leading-tight">
            Client Success is Our Success
          </h2>
          <p className="text-text-secondary text-sm sm:text-base font-light mt-4 leading-relaxed max-w-2xl mx-auto">
            See how Nexstar Live Technologies LLC partners with pioneering brands from India and around the globe to scale tech-engineered digital architectures.
          </p>
        </div>

        {/* Double Marquee Stream */}
        <div className="flex flex-col gap-8 relative select-none">
          
          {/* Row 1: India Clients (Marquee Moving Left) */}
          <div className="relative w-full overflow-hidden py-2">
            {/* Soft gradient fading masks on left & right edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-soft-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-soft-bg to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee-left gap-6 flex">
              {[...indianTestimonials, ...indianTestimonials, ...indianTestimonials, ...indianTestimonials].map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-[300px] sm:w-[360px] flex-shrink-0 bg-white border border-gray-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-accent-red/20 transition-all duration-300 flex flex-col gap-4 mx-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-heading font-extrabold text-sm sm:text-base text-navy-deep">
                        {item.name}
                      </h4>
                      <p className="text-text-secondary text-[11px] font-medium mt-0.5">
                        {item.role}, <span className="text-navy-deep font-semibold">{item.company}</span>
                      </p>
                    </div>
                    <span className="text-xs font-semibold bg-gray-light text-navy-deep px-2.5 py-1 rounded-full border border-slate-200/30 whitespace-nowrap">
                      {item.location}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: International Clients (Marquee Moving Right) */}
          <div className="relative w-full overflow-hidden py-2">
            {/* Soft gradient fading masks on left & right edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-soft-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-soft-bg to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee-right gap-6 flex">
              {[...internationalTestimonials, ...internationalTestimonials, ...internationalTestimonials, ...internationalTestimonials].map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-[300px] sm:w-[360px] flex-shrink-0 bg-white border border-gray-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-highlight-blue/20 transition-all duration-300 flex flex-col gap-4 mx-2"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-heading font-extrabold text-sm sm:text-base text-navy-deep">
                        {item.name}
                      </h4>
                      <p className="text-text-secondary text-[11px] font-medium mt-0.5">
                        {item.role}, <span className="text-navy-deep font-semibold">{item.company}</span>
                      </p>
                    </div>
                    <span className="text-xs font-semibold bg-gray-light text-navy-deep px-2.5 py-1 rounded-full border border-slate-200/30 whitespace-nowrap">
                      {item.location}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-text-secondary text-xs sm:text-sm font-light leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}


