import { useState } from 'react';
import { CheckCircle2, ArrowRight, UploadCloud, User, FileText, Send } from 'lucide-react';

export default function ApplyNow() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    portfolioUrl: '',
    resumeLink: '',
    message: ''
  });

  const roles = [
    { label: 'Technical Media Architect', value: 'media-architect' },
    { label: 'Senior Search Optimizer (SEO)', value: 'seo-optimizer' },
    { label: 'Full-Stack React Developer', value: 'react-dev' },
    { label: 'Performance Ads Manager (SEM)', value: 'sem-manager' },
    { label: 'AI Operations Specialist', value: 'ai-ops' },
    { label: 'Corporate Partner Program', value: 'partner' }
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-soft-bg min-h-screen relative font-body text-text-primary pb-24">
      
      {/* Page Header */}
      <section className="bg-navy-deep py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-10 w-64 h-64 rounded-full bg-accent-red/10 blur-[60px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest mb-3 block">
            Join the Network
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Apply to Join Nexstar
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            We are always looking for elite developer minds, performance marketing directors, and active corporate partners.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        
        {/* Step Ticker Indicators */}
        <div className="flex items-center justify-between mb-12 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-3">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-bold ${
              step >= 1 ? 'bg-navy-deep text-white shadow' : 'bg-gray-light text-slate-400'
            }`}>
              1
            </span>
            <span className={`text-xs font-bold uppercase tracking-wider hidden sm:inline ${
              step >= 1 ? 'text-navy-deep' : 'text-slate-400'
            }`}>
              Primary Profile
            </span>
          </div>
          
          <div className="h-px bg-slate-200 flex-1 mx-4" />

          <div className="flex items-center gap-3">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-bold ${
              step >= 2 ? 'bg-navy-deep text-white shadow' : 'bg-gray-light text-slate-400'
            }`}>
              2
            </span>
            <span className={`text-xs font-bold uppercase tracking-wider hidden sm:inline ${
              step >= 2 ? 'text-navy-deep' : 'text-slate-400'
            }`}>
              Role Coordinates
            </span>
          </div>

          <div className="h-px bg-slate-200 flex-1 mx-4" />

          <div className="flex items-center gap-3">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-bold ${
              step >= 3 ? 'bg-navy-deep text-white shadow' : 'bg-gray-light text-slate-400'
            }`}>
              3
            </span>
            <span className={`text-xs font-bold uppercase tracking-wider hidden sm:inline ${
              step >= 3 ? 'text-navy-deep' : 'text-slate-400'
            }`}>
              Complete Specs
            </span>
          </div>
        </div>

        {/* Application Card Form */}
        <div className="bg-white border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-xl">
          {submitted ? (
            <div className="py-12 flex flex-col items-center gap-5 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-deep">Application Submitted</h3>
              <p className="text-text-secondary text-xs leading-relaxed max-w-sm">
                Thank you for submitting your coordinates. Our executive board reviews all candidates weekly and will reach out to you if there is a skills alignment.
              </p>
            </div>
          ) : (
            <form onSubmit={step === 3 ? handleSubmit : handleNext} className="flex flex-col gap-6 text-left">
              
              {/* STEP 1: Primary Profile */}
              {step === 1 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right duration-200">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Example: Your Name"
                      className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Contact Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Example: Your Email"
                      className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Contact Phone</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Example: Your Phone Number"
                      className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Role Coordinates */}
              {step === 2 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right duration-200">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Category</label>
                    <input 
                      type="text" 
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      placeholder="Example: acting, modeling, job, etc."
                      className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Portfolio / LinkedIn URL</label>
                    <input 
                      type="url" 
                      required
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({...formData, portfolioUrl: e.target.value})}
                      placeholder="Example: Your Portfolio URL"
                      className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Complete Specs */}
              {step === 3 && (
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right duration-200">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Executive Cover Message</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Example: Summarize your past milestones or project coordinates"
                      className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-extrabold text-navy-deep uppercase tracking-wider">Resume Link</label>
                    <input 
                      type="url" 
                      required
                      value={formData.resumeLink}
                      onChange={(e) => setFormData({...formData, resumeLink: e.target.value})}
                      placeholder="Your Resume Link"
                      className="border border-slate-200 bg-gray-light px-4 py-3.5 rounded-xl text-xs font-semibold text-text-primary placeholder-slate-400 focus:outline-none focus:border-navy-deep transition-colors w-full"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Action Buttons */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100 mt-4">
                {step > 1 && (
                  <button 
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-3.5 rounded-xl bg-gray-light hover:bg-slate-200/50 text-navy-deep text-xs font-bold font-heading transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                )}
                
                <button 
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-navy-deep hover:bg-accent-red hover:scale-102 py-4 font-heading text-xs font-bold text-white shadow-md transition-all duration-300 cursor-pointer"
                >
                  {step === 3 ? (
                    <>
                      Submit Coordination Form
                      <Send className="w-4 h-4 text-white" />
                    </>
                  ) : (
                    <>
                      Proceed to Next Step
                      <ArrowRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </section>

    </div>
  );
}
