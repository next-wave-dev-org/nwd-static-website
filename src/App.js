import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Main from './pages/Main'
import Contact from './pages/Contact'
import ContactThankYou from './pages/ContactThankYou';
import About from './pages/About'
import PortfolioPage from './pages/PortfolioPage'
import DevelopersPage from './pages/DevelopersPage'
import GraduatesPage from './pages/GraduatesPage'
import CompaniesPage from './pages/CompaniesPage'
import Donation from './pages/Donation';

// Pageview tracker component
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    const page = location.hash.replace("#", "") || "/Home";

    // GA4
    ReactGA.send({ hitType: "pageview", page });

    // Google Ads
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

  return (
    <Router>
      <PageTracker />

      <Routes>
        <Route exact path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Main />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Contact-Thank-You" element={<ContactThankYou />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/Developers" element={<DevelopersPage />} />
        <Route path="/graduates" element={<GraduatesPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/Donation" element={<Donation />} />
      </Routes>
    </Router>
  );
}

export default App;
