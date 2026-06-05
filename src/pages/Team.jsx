import { Cpu, Sparkles, Trophy } from 'lucide-react';
import atulImg from '../assets/atul.jpeg';
import mubbasherImg from '../assets/Mubbasher Yasin.png';
import robertsonImg from '../assets/Robertson .png';
import arpitaImg from '../assets/arpita.png';
import kristinImg from '../assets/Kristin Watson.png';
import aadityaImg from '../assets/Aaditya.png';
import aliImg from '../assets/Ali.png';
import mehakImg from '../assets/Mehak Steward.png';
import aleenaImg from '../assets/Aleena Chenail.png';
import priyankaImg from '../assets/Priyanka.png';
import anchalImg from '../assets/Anchal.png';
import ichchaImg from '../assets/Ichcha.png';

export default function Team({ setCurrentPage }) {
  
  const members = [
    {
      name: 'Atul Srivastava',
      role: 'Director & CEO',
      desc: 'Director and Chief Executive leading Nexstar\'s global strategy, technology solutions, and digital innovation networks across the U.S., U.K., and India.',
      skills: ['Enterprise Strategy', 'Corporate Governance', 'Growth Architecture'],
      imageColor: 'from-[#0B1F3A] to-[#1E293B]',
      image: atulImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Arpita',
      role: 'Corporate Affairs',
      desc: 'Manages corporate legal structures, brand licensing, trademark compliance, and international communications across our global branches.',
      skills: ['Corporate Law', 'Trademark Management', 'Global Compliance'],
      imageColor: 'from-[#E63946] to-pink-500',
      image: arpitaImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Mubbasher Yasin',
      role: 'Web Designer',
      desc: 'Crafts high-fidelity UI wireframes and visual guidelines designed with modern aesthetics, premium dark-mode styles, and sleek transitions.',
      skills: ['Figma Design System', 'UI/UX Prototypes', 'Design Aesthetics'],
      imageColor: 'from-violet-600 to-indigo-500',
      image: mubbasherImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Ali',
      role: 'Web Designer',
      desc: 'Designs responsive layouts and custom illustrations, translating user workflows into beautiful, standard-compliant design components.',
      skills: ['Responsive Layouts', 'Creative Media', 'Asset Creation'],
      imageColor: 'from-blue-600 to-cyan-500',
      image: aliImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Ichcha',
      role: 'Developer',
      desc: 'Full-stack compiler specialist building React 19 and Tailwind CSS v4 frontend nodes with sub-50ms hot builds and edge deployment.',
      skills: ['React & Vite Engine', 'CSS Keyframes', 'API Telemetry'],
      imageColor: 'from-emerald-600 to-teal-500',
      image: ichchaImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Mehak Steward',
      role: 'SEO Specialist',
      desc: 'Directs algorithmic keyword allocation and paid attribution networks to eliminate click leakage and maximize paid search ROI.',
      skills: ['Performance SEM', 'Keyword Mining', 'Google Partner Tools'],
      imageColor: 'from-amber-600 to-orange-500',
      image: mehakImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Robertson',
      role: 'Marketing Coordinator',
      desc: 'Coordinates multi-channel advertising matrices and campaign sync schedules between North American, European, and Asian markets.',
      skills: ['Omni-channel Campaigns', 'Logistics Synchronization', 'Ad Strategy'],
      imageColor: 'from-purple-600 to-fuchsia-400',
      image: robertsonImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Aleena Chenail',
      role: 'Member',
      desc: 'Supports customer experience design and operational analysis, aligning client target scales with core software solutions.',
      skills: ['Client Onboarding', 'Customer Retention', 'Quality Assurance'],
      imageColor: 'from-pink-600 to-rose-400',
      image: aleenaImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Kristin Watson',
      role: 'Team Member',
      desc: 'Collaborates on product roadmaps and UI validations, helping design comprehensive, customer-centric digital transformation paths.',
      skills: ['Product Roadmapping', 'User Psychology', 'Visual Validation'],
      imageColor: 'from-slate-700 to-zinc-500',
      image: kristinImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Aaditya',
      role: 'Team',
      desc: 'Core frontend architect building interactive visual components, smooth micro-animations, and fast CDNs setups.',
      skills: ['Component Engineering', 'Tailwind Utilities', 'CDN Caching'],
      imageColor: 'from-sky-600 to-blue-400',
      image: aadityaImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Priyanka',
      role: 'Team',
      desc: 'Specializes in reputation management auditing and digital PR coordination to amplify international brand impact.',
      skills: ['Reputation Auditing', 'Digital Media PR', 'Brand Placements'],
      imageColor: 'from-red-600 to-orange-500',
      image: priyankaImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
      name: 'Anchal',
      role: 'Member',
      desc: 'Designs custom analytics integrations and telemetry dashboards, empowering partners with competitive business insights.',
      skills: ['Analytical Telemetry', 'BI Dashboarding', 'Data Governance'],
      imageColor: 'from-teal-600 to-emerald-400',
      image: anchalImg,
      socials: { twitter: '#', linkedin: '#', github: '#' }
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
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-accent-red/10 blur-[60px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest mb-3 block">
            Agency Leadership
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Meet Our Tech Architects
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Highly specialized engineering minds combining direct corporate marketing intelligence with robust digital setups.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Profile Image Place-block */}
              <div className={`h-64 bg-gradient-to-tr ${member.imageColor} relative flex items-center justify-center p-6 text-white overflow-hidden`}>
                <div className="absolute inset-0 bg-cover pointer-events-none opacity-5" 
                     style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  /* Floating Initials */
                  <div className="w-18 h-18 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center font-heading text-2xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-6 text-center flex flex-col gap-1.5 bg-white border-t border-slate-100 justify-center items-center">
                <h3 className="font-heading text-base sm:text-lg font-bold text-navy-deep group-hover:text-highlight-blue transition-colors duration-200">
                  {member.name}
                </h3>
                <span className="text-accent-red font-heading text-[10px] sm:text-xs font-extrabold uppercase tracking-widest">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory board details */}
      <section className="bg-gray-light/60 py-20 px-6 border-t border-gray-200/50 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="w-10 h-10 rounded-xl bg-navy-deep/5 border border-navy-deep/10 flex items-center justify-center text-navy-deep">
            <Trophy className="w-5 h-5 text-accent-red" />
          </div>
          <h2 className="font-heading text-2xl font-extrabold text-navy-deep">
            Our Elite Partner Ecosystem
          </h2>
          <p className="text-text-secondary text-sm font-light max-w-xl leading-relaxed">
            In addition to our core engineering leaders, Nexstar retains an advisory board of search marketing experts and cloud developers who audit and validate our client roadmaps quarterly.
          </p>
          <button 
            onClick={() => handleNavClick('contact')}
            className="rounded-xl bg-navy-deep hover:bg-accent-red hover:scale-105 px-6 py-3 font-heading text-xs font-bold text-white transition-all cursor-pointer"
          >
            Work With Our Team
          </button>
        </div>
      </section>

    </div>
  );
}
