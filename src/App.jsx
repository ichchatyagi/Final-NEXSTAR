import { useState } from 'react';
import Layout from './components/Layout';

// Core Pages imports
import Home from './pages/Home';
import About from './pages/About';
import OurStory from './pages/OurStory';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import SEOPricing from './pages/SEOPricing';
import SMOPricing from './pages/SMOPricing';
import PPCPricing from './pages/PPCPricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ApplyNow from './pages/ApplyNow';

export default function App() {
  // Client-side router tracking current view. Can be string or object (e.g. { name: 'service-detail', id: 'web-dev' })
  const [currentPage, setCurrentPage] = useState('home');

  const renderActiveView = () => {
    const pageName = typeof currentPage === 'string' ? currentPage : currentPage?.name;

    switch (pageName) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'our-story':
        return <OurStory setCurrentPage={setCurrentPage} />;
      case 'team':
        return <Team setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'service-detail':
        return <ServiceDetail currentPage={currentPage} setCurrentPage={setCurrentPage} />;
      case 'seo-pricing':
        return <SEOPricing setCurrentPage={setCurrentPage} />;
      case 'smo-pricing':
        return <SMOPricing setCurrentPage={setCurrentPage} />;
      case 'ppc-pricing':
        return <PPCPricing setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <Blog setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'apply-now':
        return <ApplyNow />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderActiveView()}
    </Layout>
  );
}
