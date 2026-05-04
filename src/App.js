import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";

import Main from './pages/Main';
import Contact from './pages/Contact';
import ContactThankYou from './pages/ContactThankYou';
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import DevelopersPage from './pages/DevelopersPage';
import GraduatesPage from './pages/GraduatesPage';
import CompaniesPage from './pages/CompaniesPage';
import ApplyPage from "./pages/ApplyPage";
import Donation from './pages/Donation';
import ServicesPage from './pages/ServicesPage';
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";
import { BASE_URL } from './utils/metadataConfig';

// Pageview tracker component
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    const page = location.hash.replace("#", "") || "/Home";

    ReactGA.send({ hitType: "pageview", page });

    if (window.gtag) {
      window.gtag("config", "AW-17737966605", {
        page_path: page,
      });
    }
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    ReactGA.initialize("G-G27MNF49YJ");
  }, []);

  const title = "Next Wave Dev - Tech Career Program";
  const description = "Bridge classroom learning to career success. Real-world projects, professional mentorship, and tech experience for graduates.";

  return (
    <>
      <Helmet>
        {/* Base Meta Tags - overridden by individual pages */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#004da8" />
        
        {/* Base Open Graph Tags - overridden by individual pages */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${BASE_URL}/og-logo.png`} />
        <meta property="og:site_name" content="Next Wave Dev" />
        
        {/* Base Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="tech career, developer program, graduate employment, mentorship, coding bootcamp" />
        <meta name="author" content="Next Wave Dev" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Canonical URL - will be overridden by page-specific canonicals */}
        <link rel="canonical" href={`${BASE_URL}/#/Home`} />
        
        {/* Additional SEO Enhancements */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
      <Router>
        <PageTracker />

        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Main />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Contact-Thank-You" element={<ContactThankYou />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<PortfolioPage />} />
          <Route path="/Developers" element={<DevelopersPage />} />
          <Route path="/Graduates" element={<GraduatesPage />} />
          <Route path="/Companies" element={<CompaniesPage />} />
          <Route path="/Donation" element={<Donation />} />
          <Route path="/Donate" element={<Donation />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Apply" element={<ApplyPage />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;