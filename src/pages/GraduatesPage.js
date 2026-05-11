import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import TestimonialsSection from "../components/TestimonialsSection";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";
import { Link } from "react-router-dom";

function GraduatesPage() {
  const metadata = pageMetadata.graduates;

  return (
    <>
      <Navbar />

      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${BASE_URL}/og-logo.png`} />
        <meta property="og:image:alt" content="Next Wave Dev Graduates" />
        <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:site_name" content="Next Wave Dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
        <meta name="keywords" content="graduates, career launch, tech program, mentorship, experience" />
        <meta name="author" content="Next Wave Dev" />
      </Helmet>

      {/* Welcome Section */}
      <Section>
        <div style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ marginBottom: "20px", fontSize: "3.5rem", color: "var(--primary-blue)" }}>
            Welcome
          </h1>
          <p style={{ fontSize: "1.5rem", color: "#555", maxWidth: "800px", margin: "0 auto" }}>
            For Graduates – Launch Your Career with The Next Wave Dev
          </p>
        </div>
      </Section>

      {/* Future Tech Leader Section */}
      <Section>
        <div style={{ backgroundColor: "#f8f9fa" }}>
          <div style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "25px", fontSize: "2.5rem", color: "var(--primary-blue)" }}>
              Future Tech Leader
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333", maxWidth: "900px" }}>
              You’ve got the skills. You’ve got the drive. Now, you need the experience that unlocks the door
              to your dream job. Next Wave Dev is your fast-track solution to transforming your academic
              knowledge into professional expertise.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Join Next Wave Section */}
      <Section>
        <div style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ marginBottom: "25px", fontSize: "2.5rem", color: "var(--primary-blue)" }}>
            Why Join Next Wave?
          </h2>
          <p style={{ marginBottom: "40px", fontSize: "1.2rem", color: "#333", maxWidth: "900px" }}>
            The biggest barrier for new graduates is the “experience required” wall. We smash that wall by
            placing you directly into real-world development environments.
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1.1rem" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--primary-blue)", color: "white" }}>
                  <th style={thStyle}>Feature</th>
                  <th style={thStyle}>Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={tdStyle}><strong>Real Company Projects</strong></td>
                  <td style={tdStyle}>Work on live, tangible projects used by businesses, not simulated assignments.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={tdStyle}><strong>Professional Mentorship</strong></td>
                  <td style={tdStyle}>Get guidance from industry veterans who will review your code and share best practices.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #eee" }}>
                  <td style={tdStyle}><strong>Portfolio Builder</strong></td>
                  <td style={tdStyle}>Complete projects that you can proudly showcase during interviews, demonstrating capability over theory.</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Industry Workflow</strong></td>
                  <td style={tdStyle}>Learn to use modern tools and work within a professional team structure.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* What You Will Gain Section */}
      <Section>
        <div style={{ backgroundColor: "#f8f9fa" }}>
          <div style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "25px", fontSize: "2.5rem", color: "var(--primary-blue)" }}>
              What You Will Gain
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
              <div style={cardStyle}>
                <h3 style={{ marginBottom: "15px", color: "var(--primary-blue)" }}>Verified Experience Hours</h3>
                <p>A proven track record of professional development work.</p>
              </div>
              <div style={cardStyle}>
                <h3 style={{ marginBottom: "15px", color: "var(--primary-blue)" }}>Strong Professional References</h3>
                <p>Connect with project managers and developers who can vouch for your skills.</p>
              </div>
              <div style={cardStyle}>
                <h3 style={{ marginBottom: "15px", color: "var(--primary-blue)" }}>Networking Opportunities</h3>
                <p>Build relationships with key contacts at potential hiring companies.</p>
              </div>
              <div style={cardStyle}>
                <h3 style={{ marginBottom: "15px", color: "var(--primary-blue)" }}>Confidence</h3>
                <p>Step into interviews knowing you have contributed to a company’s success.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section>
        <div style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ marginBottom: "30px", fontSize: "2.5rem", color: "var(--primary-blue)", textAlign: "center" }}>
            How It Works
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "800px", margin: "0 auto 60px auto" }}>
            <div style={stepStyle}>
              <div style={stepNumberStyle}>1</div>
              <div>
                <strong style={{ fontSize: "1.3rem", display: "block", marginBottom: "5px" }}>Apply</strong>
                <span style={{ fontSize: "1.1rem", color: "#444" }}>Tell us about your background, skills, and career goals.</span>
              </div>
            </div>
            <div style={stepStyle}>
              <div style={stepNumberStyle}>2</div>
              <div>
                <strong style={{ fontSize: "1.3rem", display: "block", marginBottom: "5px" }}>Match</strong>
                <span style={{ fontSize: "1.1rem", color: "#444" }}>We pair you with a company project that aligns with your skillset.</span>
              </div>
            </div>
            <div style={stepStyle}>
              <div style={stepNumberStyle}>3</div>
              <div>
                <strong style={{ fontSize: "1.3rem", display: "block", marginBottom: "5px" }}>Develop</strong>
                <span style={{ fontSize: "1.1rem", color: "#444" }}>You work with the company team and build your portfolio under mentorship.</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px", padding: "40px", backgroundColor: "var(--secondary-green)", borderRadius: "12px" }}>
            <h2 style={{ marginBottom: "25px", fontSize: "2rem", color: "var(--primary-blue)" }}>
              Ready to Stop Applying and Start Doing?
            </h2>
            <Link
              to="/apply"
              style={{
                display: "inline-block",
                padding: "16px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.2rem",
                backgroundColor: "var(--primary-blue)",
                color: "white",
                transition: "background-color 0.3s ease, transform 0.2s ease",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
              onMouseOver={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.backgroundColor = "#003a7a"; }}
              onMouseOut={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.backgroundColor = "var(--primary-blue)"; }}
              aria-label="Apply Now & Start Building Your Portfolio"
            >
              Apply Now &amp; Start Building Your Portfolio
            </Link>
          </div>
        </div>
      </Section>

      <TestimonialsSection type="graduates" />
      <Footer />
    </>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "16px",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "16px",
  verticalAlign: "top",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  border: "1px solid #eaeaea",
};

const stepStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "20px",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  border: "1px solid #eaeaea",
};

const stepNumberStyle = {
  backgroundColor: "var(--primary-blue)",
  color: "white",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "1.2rem",
  flexShrink: 0,
};

export default GraduatesPage;