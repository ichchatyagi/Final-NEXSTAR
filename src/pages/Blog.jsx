import { useState } from 'react';
import { ArrowRight, Clock, Calendar, ArrowLeft, Send } from 'lucide-react';
import { insightsData } from '../data/insightsData';

export default function Blog({ setCurrentPage }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'AI Automation', 'SEO & Web Dev', 'PPC & Paid Ads', 'Branding & Creative'];

  const filteredArticles = activeCategory === 'All' 
    ? insightsData 
    : insightsData.filter(art => art.category === activeCategory);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get related articles (same category, excluding current one, max 3)
  const getRelatedArticles = (article) => {
    return insightsData
      .filter(art => art.category === article.category && art.id !== article.id)
      .slice(0, 3);
  };

  return (
    <div className="bg-soft-bg min-h-screen relative font-body text-text-primary pb-24">
      {/* Light futuristic ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-96 h-96 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      {selectedArticle ? (
        /* ==================== DETAILED ARTICLE READING VIEW ==================== */
        <div>
          {/* Article Header */}
          <section className="bg-navy-deep py-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-10 w-64 h-64 rounded-full bg-accent-red/10 blur-[60px] pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-left">
              <button 
                onClick={handleBackToList}
                className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all insights
              </button>
              
              <div className="inline-block bg-accent-red/20 text-accent-red border border-accent-red/35 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {selectedArticle.category}
              </div>
              
              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center gap-6 text-xs text-slate-300 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-accent-red" />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent-red" />
                  {selectedArticle.readTime}
                </span>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-16 px-6 max-w-4xl mx-auto text-left">
            
            {/* Center Banner Image (Smaller/Restricted height) */}
            <div className="relative w-full max-h-[380px] overflow-hidden rounded-3xl shadow-xl mb-12 border border-gray-200/80">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover max-h-[380px]"
              />
            </div>

            {/* Content Cards Stacked Vertically */}
            <div className="max-w-3xl mx-auto flex flex-col gap-10">
              
              {/* 1. The Challenge */}
              <div className="bg-white border-l-4 border-accent-red border-y border-r border-gray-200/80 rounded-r-3xl rounded-l-lg p-8 shadow-sm flex flex-col gap-3 text-left">
                <h3 className="font-heading text-xl font-bold text-navy-deep">
                  The Challenge
                </h3>
                <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed">
                  {selectedArticle.content[0]}
                </p>
              </div>

              {/* 2. Our Approach */}
              <div className="bg-white border-l-4 border-highlight-blue border-y border-r border-gray-200/80 rounded-r-3xl rounded-l-lg p-8 shadow-sm flex flex-col gap-3 text-left">
                <h3 className="font-heading text-xl font-bold text-navy-deep">
                  Our Approach
                </h3>
                <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed">
                  {selectedArticle.content[1]}
                </p>
              </div>

              {/* 3. Execution & Impact */}
              <div className="bg-white border-l-4 border-emerald-500 border-y border-r border-gray-200/80 rounded-r-3xl rounded-l-lg p-8 shadow-sm flex flex-col gap-3 text-left">
                <h3 className="font-heading text-xl font-bold text-navy-deep">
                  Execution &amp; Impact
                </h3>
                <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed">
                  {selectedArticle.content[2]}
                </p>
                {selectedArticle.content[3] && (
                  <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed mt-2 pt-4 border-t border-slate-100">
                    {selectedArticle.content[3]}
                  </p>
                )}
              </div>

              {/* Quote Highlight */}
              <div className="p-8 bg-navy-deep/5 border-l-4 border-accent-red rounded-r-3xl rounded-l-lg mt-2">
                <p className="font-heading text-navy-deep font-bold text-xs sm:text-sm leading-relaxed italic">
                  "Nexstar Media is committed to driving real-world ROI and performance metrics by engineering modular, standard-compliant digital frameworks."
                </p>
              </div>

            </div>

            {/* Back button links footer */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
              <button 
                onClick={handleBackToList}
                className="flex items-center gap-2 text-xs font-bold text-navy-deep hover:text-accent-red transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to insights list
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex items-center gap-2 rounded-xl bg-navy-deep px-5 py-3.5 font-heading text-xs font-bold text-white hover:bg-accent-red transition-all cursor-pointer"
              >
                Discuss this report
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* Related Articles Showcase */}
          {getRelatedArticles(selectedArticle).length > 0 && (
            <section className="py-16 px-6 bg-navy-deep/5 border-t border-gray-200/50 text-left">
              <div className="max-w-6xl mx-auto">
                <h3 className="font-heading text-lg font-bold text-navy-deep mb-8">
                  Related Technical Reports
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {getRelatedArticles(selectedArticle).map((art, idx) => (
                    <div 
                      key={idx}
                      className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between p-6 group cursor-pointer"
                      onClick={() => handleArticleClick(art)}
                    >
                      <div className="flex flex-col gap-3">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-accent-red">
                          {art.category}
                        </span>
                        <h4 className="font-heading text-sm font-extrabold text-navy-deep group-hover:text-highlight-blue transition-colors line-clamp-2">
                          {art.title}
                        </h4>
                        <p className="text-text-secondary text-xs line-clamp-3 leading-relaxed">
                          {art.desc}
                        </p>
                      </div>
                      <span className="text-[10px] text-navy-deep font-bold mt-4 flex items-center gap-1 group-hover:text-accent-red transition-colors">
                        Read Report &rarr;
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      ) : (
        /* ==================== FILTERABLE LIST VIEW ==================== */
        <div>
          {/* Page Header */}
          <section className="bg-navy-deep py-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-10 w-64 h-64 rounded-full bg-accent-red/10 blur-[60px] pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto px-6">
              <span className="text-accent-red font-heading text-xs font-extrabold uppercase tracking-widest mb-3 block">
                Corporate Insights
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                Agency Marketing &amp; Tech Intelligence
              </h1>
              <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
                Analytical campaign analyses, technical SEO frameworks, and programmatic updates compiled by our exec engineers.
              </p>
            </div>
          </section>

          {/* Filtering Pills */}
          <section className="pt-16 pb-8 px-6 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-3">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-heading text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-accent-red text-white shadow-md shadow-accent-red/25 border border-accent-red'
                      : 'bg-white text-navy-deep border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-12 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((art, idx) => (
                <div 
                  key={art.id}
                  className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300/60 transition-all duration-300 flex flex-col group text-left"
                >
                  {/* Image Block */}
                  <div className="h-48 overflow-hidden relative border-b border-gray-100">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    <span className="absolute top-4 left-4 text-[9px] font-extrabold uppercase tracking-widest bg-white/95 text-navy-deep px-3 py-1.5 rounded-full shadow-sm">
                      {art.category}
                    </span>

                    <div className="absolute bottom-4 left-4 flex items-center gap-3 text-[10px] font-bold text-white font-mono">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{art.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{art.readTime}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-navy-deep leading-tight group-hover:text-highlight-blue transition-colors min-h-[50px] line-clamp-2">
                        {art.title}
                      </h3>
                      <p className="text-text-secondary text-xs leading-relaxed line-clamp-3">
                        {art.desc}
                      </p>
                    </div>

                    <button 
                      onClick={() => handleArticleClick(art)}
                      className="text-xs font-bold text-navy-deep group-hover:text-accent-red transition-colors flex items-center gap-1.5 w-fit cursor-pointer"
                    >
                      Read Full Technical Report
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <p className="text-text-secondary text-sm">No technical reports found in this category.</p>
              </div>
            )}
          </section>
        </div>
      )}

      {/* Subscription Banner */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-12">
        <div className="bg-navy-deep text-white rounded-3xl p-10 sm:p-14 shadow-2xl flex flex-col items-center gap-5 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/20 blur-xl pointer-events-none" />
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Receive technical reports bi-weekly
          </h2>
          <p className="text-slate-300 text-sm font-light max-w-md leading-relaxed">
            Join 1,200+ enterprise CMOs, venture founders, and engineering executives who read our programmatic indexing reviews.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
            <input 
              type="email" 
              placeholder="Enter corporate email" 
              className="bg-white/10 border border-white/20 px-4 py-3 rounded-xl text-xs font-semibold text-white placeholder-slate-400 focus:outline-none focus:border-white/40 w-full sm:w-64"
            />
            <button 
              onClick={() => alert('Subscription successfully confirmed!')}
              className="rounded-xl bg-accent-red hover:bg-white hover:text-navy-deep hover:scale-105 px-6 py-3 font-heading text-xs font-bold text-white transition-all w-full sm:w-auto cursor-pointer flex items-center justify-center gap-1.5"
            >
              Subscribe
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
