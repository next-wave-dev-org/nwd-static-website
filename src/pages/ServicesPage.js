import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";


function ServicesPage() {
  const metadata = pageMetadata.services;
  
  return (
    <>
      <Navbar />
  
      <div>

      <Helmet>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${BASE_URL}/#${metadata.pageUrl}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.type} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${BASE_URL}/og-logo.png`} />
        <meta property="og:image:alt" content="Next Wave Dev Services" />
        <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:site_name" content="Next Wave Dev" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="services, development, web design, mobile apps, AI integration" />
        <meta name="author" content="Next Wave Dev" />
      </Helmet>

      {/* Hero Section */}
      <h1>Empowering the Next Wave of Digital Innovation</h1>
      <p style={{ marginBottom: "20px" }}>
        From vision to deployment, our developers build scalable,
        high-performance solutions your business deserves.
      </p>

      <Button to="/contact" variant="primary">
        Let’s Build Together
      </Button>

      {/* Services Section */}
      <h2>Our Services</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          marginTop: "30px",
          marginBottom: "60px"
        }}
      >

        {/* Card 1 */}
        <div style={cardStyle}>
          <h3>Development & Engineering</h3>
          <ul>
            <li><strong>Custom Web Development:</strong> High-performance, SEO-optimized websites and landing pages built to convert.</li>
            <li><strong>Full-Stack Web Applications:</strong> Complex SaaS platforms, dashboards, and portals using modern reactive frameworks.</li>
            <li><strong>Mobile App Development:</strong> Cross-platform iOS & Android applications with a seamless native feel.</li>
            <li><strong>API Development & Integration:</strong> Custom APIs and third-party integrations like Stripe, Salesforce, and HubSpot.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <h3>Modernization & Optimization</h3>
          <ul>
            <li><strong>Legacy Rebuilds:</strong> Migrating outdated systems to modern tech stacks without losing data or uptime.</li>
            <li><strong>Performance Tuning & Debugging:</strong> Expert error resolution, security patching, and performance optimization.</li>
            <li><strong>UI/UX Design & Prototyping:</strong> Professional Figma designs and interactive prototypes before development begins.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <h3>Intelligence & Infrastructure</h3>
          <ul>
            <li><strong>AI & Machine Learning Integration:</strong> GPT-4, Claude, custom chatbots, and automated workflows.</li>
            <li><strong>Cloud & DevOps:</strong> CI/CD pipelines, infrastructure management, and 99.9% uptime deployment.</li>
            <li><strong>QA & Automated Testing:</strong> Robust Cypress and Playwright testing suites for reliability.</li>
          </ul>
        </div>

      </div>

      {/* Tech Stack */}
      <h2>The Next Wave Tech Stack</h2>

      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "60px" }}>
        <tbody>
          <tr><td style={tdTitle}>Frontend</td><td style={tdContent}>React, Next.js, Astro, HTML5, CSS3, Tailwind CSS, TypeScript</td></tr>
          <tr><td style={tdTitle}>Backend</td><td style={tdContent}>Node.js, NestJS, Python (FastAPI/Flask), Java (Spring Boot)</td></tr>
          <tr><td style={tdTitle}>Mobile</td><td style={tdContent}>React Native, Flutter, Expo</td></tr>
          <tr><td style={tdTitle}>Database</td><td style={tdContent}>PostgreSQL, MongoDB, Supabase, Redis, MySQL</td></tr>
          <tr><td style={tdTitle}>Data & AI</td><td style={tdContent}>Pandas, Jupyter Lab, NumPy, OpenAI API, LangChain</td></tr>
          <tr><td style={tdTitle}>Cloud / DevOps</td><td style={tdContent}>AWS, Azure, Google Cloud, Terraform, Docker, Kubernetes</td></tr>
          <tr><td style={tdTitle}>Deployment</td><td style={tdContent}>Netlify, Vercel, Railway, GitHub Actions</td></tr>
        </tbody>
      </table>

      {/* Why Hire Section */}
      <h2>Why Hire Next Wave Dev?</h2>
      <ul style={{ marginBottom: "60px" }}>
        <li><strong>Built for Scale:</strong> We architect solutions that grow with your user base.</li>
        <li><strong>Clean Code Standards:</strong> Secure, accessible, and well-documented code following WCAG best practices.</li>
        <li><strong>Agile & Adaptive:</strong> Rapid sprints with transparent updates as your project evolves.</li>
      </ul>

      {/* Final CTA */}
      <h2>Ready to Build the Future?</h2>
      <p>
        Whether you have a fully scoped project or just a rough idea on a napkin,
        our developers are ready to jump in.
      </p>

      <Button to="/contact" variant="primary">
        Contact Us
      </Button>

      </div>

    <Footer />
  </>
  );
}

const cardStyle = {
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
};

const tdTitle = {
  padding: "10px",
  fontWeight: "bold",
  width: "200px"
};

const tdContent = {
  padding: "10px"
};

export default ServicesPage;
