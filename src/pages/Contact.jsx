import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import InteractiveMap from '../components/InteractiveMap';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    { label: 'Web Application Development', value: 'web-development' },
    { label: 'Mobile App Engineering', value: 'mobile-app' },
    { label: 'Social Media Marketing (SMO)', value: 'smo' },
    { label: 'SEO & Search Services', value: 'seo' },
    { label: 'Luxury Brand Identity', value: 'branding' },
    { label: 'AI Automation Integration', value: 'ai' },
    { label: 'Digital TV & Media buying', value: 'digital-tv' },
    { label: 'Premium Content Production', value: 'content' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // NOTE: Replace these with your actual EmailJS credentials
      const serviceId = 'service_h63l6ik';
      const templateId = 'template_6hjf6fk';
      const publicKey = 'tukteHI0GgQbqTLen';

      const templateParams = {
        from_email: 'support@nexstarinternal@gmail.com',
        to_email: 'Contact@nexstarmedia.in',
        name: formData.name,
        company: formData.company,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', service: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-soft-bg min-h-screen relative font-body text-text-primary pb-24">

      {/* Page Header */}
      <section className="bg-navy-deep py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-10 w-64 h-64 rounded-full bg-accent-red/10 blur-[60px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest mb-3 block">
            Initiate Contact
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Connect With Our Tech Architects
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Discuss automated bidding integrations, semantic SEO conquest campaigns, and premium cloud development.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

        {/* Left Side: Contact details */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">

          {/* Details list */}
          <div className="flex flex-col gap-6">

            {/* US Coordinate */}
            <div className="bg-white border border-gray-200/60 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue">Global Headquarters</span>

              <div className="flex gap-3.5 items-start">
                <MapPin className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-navy-deep uppercase tracking-wider">United States</h4>
                  <p className="text-text-secondary text-xs font-semibold mt-1">845 3rd Ave 6th floor, New York, NY 10022, United States</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start border-t border-gray-100 pt-4">
                <MapPin className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-navy-deep uppercase tracking-wider">United Kingdom</h4>
                  <p className="text-text-secondary text-xs font-semibold mt-1">1st Floor, 239 Kensington High St, London W8 6SN, United Kingdom</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <Phone className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-navy-deep uppercase tracking-wider">Phone Inquiries</h4>
                  <a href="tel:+19176721794" className="text-text-secondary hover:text-navy-deep text-xs font-semibold mt-1 block">+1-917-672-1794</a>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <Mail className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-navy-deep uppercase tracking-wider">Email Channels</h4>
                  <a href="mailto:contact@nexstarlive.com" className="text-text-secondary hover:text-navy-deep text-xs font-semibold mt-1 block">contact@nexstarlive.com</a>
                </div>
              </div>
            </div>

            {/* India Coordinate */}
            <div className="bg-white border border-gray-200/60 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue">Corporate Office</span>

              <div className="flex gap-3.5 items-start">
                <MapPin className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-navy-deep uppercase tracking-wider">Delhi NCR </h4>
                  <p className="text-text-secondary text-xs font-semibold mt-1">Level - 16th & 17th DND Flyway, Plot No.C-001A, Sector 16B, Noida, Uttar Pradesh 201301</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <Phone className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-navy-deep uppercase tracking-wider">Phone Inquiries</h4>
                  <a href="tel:+919821000921" className="text-text-secondary hover:text-navy-deep text-xs font-semibold mt-1 block">+91 98210 00921</a>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <Mail className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-navy-deep uppercase tracking-wider">Email Channels</h4>
                  <a href="mailto:contact@nexstarmedia.in" className="text-text-secondary hover:text-navy-deep text-xs font-semibold mt-1 block">contact@nexstarmedia.in</a>
                </div>
              </div>
            </div>

            {/* Social Coordinates */}
            <div className="bg-white border border-gray-200/60 p-6 rounded-2xl shadow-sm flex flex-col gap-4 animate-in fade-in duration-300">
              <span className="text-xs font-extrabold uppercase tracking-widest text-highlight-blue">Social Coordinates</span>
              <div className="flex flex-wrap gap-2.5 mt-1">
                <a
                  href="https://www.facebook.com/nexstarmediaindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gray-light hover:bg-navy-deep hover:text-white px-3.5 py-2 font-heading text-xs font-bold text-navy-deep transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/nexstarmediaindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gray-light hover:bg-navy-deep hover:text-white px-3.5 py-2 font-heading text-xs font-bold text-navy-deep transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/nexstarmedialive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gray-light hover:bg-navy-deep hover:text-white px-3.5 py-2 font-heading text-xs font-bold text-navy-deep transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>

          </div>

          <div className="h-px bg-slate-200" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Security Note</span>
          <p className="text-slate-400 text-xs font-semibold leading-relaxed">
            All submitted specifications are validated via automated scripts and indexed inside encrypted corporate databases to ensure strict client confidentiality.
          </p>

        </div>

        {/* Right Side: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-xl">
          {submitted ? (
            <div className="py-12 flex flex-col items-center gap-5 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-deep">Submission Received</h3>
              <p className="text-text-secondary text-xs leading-relaxed max-w-sm">
                Thank you for initiating contact. A specialized Nexstar Technical Architect will review your specifications and establish communications in under 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-gray-light text-navy-deep text-xs font-bold font-heading hover:bg-slate-200/50 transition-colors cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Lead Representative */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Representative Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Your Name"
                    className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                  />
                </div>

                {/* Corporate Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Corporate Name</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Nexstar Media Inc."
                    className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                  />
                </div>
              </div>

              {/* Corporate Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Corporate Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. partner@corporate.com"
                  className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                />
              </div>

              {/* Required Capability */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Required Capability</label>
                <input
                  type="text"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  placeholder="e.g. Web Application Development"
                  className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Project Specifications</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Give your project specifications"
                  className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy-deep hover:bg-accent-red hover:scale-102 py-4 font-heading text-xs font-bold text-white shadow-md transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Project Specifications'}
                {!isSubmitting && <ArrowRight className="w-4 h-4 text-white" />}
              </button>

            </form>
          )}
        </div>

      </section>

      {/* Map Integration Section */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <InteractiveMap />
      </section>

    </div>
  );
}
