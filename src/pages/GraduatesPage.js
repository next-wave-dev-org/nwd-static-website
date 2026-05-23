import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import TestimonialsSection from "../components/TestimonialsSection";
import Button from "../components/Button";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";

function GraduatesPage() {
  const metadata = pageMetadata.graduates;

  return (
    <>
      <Navbar />

      <div>
        <Section>
          <div style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
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

            <h1 style={{ marginBottom: "25px" }}>
              Welcome
            </h1>
            <p style={{ marginBottom: "30px", lineHeight: "1.7", fontSize: "1.2rem" }}>
              Launch Your Career with The Next Wave Dev
            </p>

            <h2 style={{ marginTop: "40px", marginBottom: "15px" }}>
              Future Tech Leader
            </h2>
            <p style={{ marginBottom: "40px", lineHeight: "1.7" }}>
              You’ve got the skills. You’ve got the drive. Now, you need the experience that unlocks the door
              to your dream job. Next Wave Dev is your fast-track solution to transforming your academic
              knowledge into professional expertise.
            </p>

            <h2 style={{ marginTop: "40px", marginBottom: "15px" }}>
              Why Join Next Wave?
            </h2>
            <p style={{ marginBottom: "40px", lineHeight: "1.7" }}>
              The biggest barrier for new graduates is the “experience required” wall. We smash that wall by
              placing you directly into real-world development environments.
            </p>

            <div style={{ overflowX: "auto", marginBottom: "60px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Feature</th>
                    <th style={thStyle}>Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdBold}>Real Company Projects</td>
                    <td style={tdStyle}>Work on live, tangible projects used by businesses, not simulated assignments.</td>
                  </tr>
                  <tr>
                    <td style={tdBold}>Professional Mentorship</td>
                    <td style={tdStyle}>Get guidance from industry veterans who will review your code and share best practices.</td>
                  </tr>
                  <tr>
                    <td style={tdBold}>Portfolio Builder</td>
                    <td style={tdStyle}>Complete projects that you can proudly showcase during interviews, demonstrating capability over theory.</td>
                  </tr>
                  <tr>
                    <td style={tdBold}>Industry Workflow</td>
                    <td style={tdStyle}>Learn to use modern tools and work within a professional team structure.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "15px" }}>
              What You Will Gain
            </h2>
            <ul style={{ marginBottom: "60px", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "15px", lineHeight: "1.7" }}><strong>Verified Experience Hours:</strong> A proven track record of professional development work.</li>
              <li style={{ marginBottom: "15px", lineHeight: "1.7" }}><strong>Strong Professional References:</strong> Connect with project managers and developers who can vouch for your skills.</li>
              <li style={{ marginBottom: "15px", lineHeight: "1.7" }}><strong>Networking Opportunities:</strong> Build relationships with key contacts at potential hiring companies.</li>
              <li style={{ marginBottom: "15px", lineHeight: "1.7" }}><strong>Confidence:</strong> Step into interviews knowing you have contributed to a company’s success.</li>
            </ul>

            <h2 style={{ marginTop: "40px", marginBottom: "15px" }}>
              How It Works
            </h2>
            <ol style={{ fontSize: "1.2rem", lineHeight: "1.9", color: "#333", paddingLeft: "1.25rem", marginBottom: "60px" }}>
              <li><strong>Apply:</strong> Tell us about your background, skills, and career goals.</li>
              <li><strong>Match:</strong> We pair you with a company project that aligns with your skillset.</li>
              <li><strong>Develop:</strong> You work with the company team and build your portfolio under mentorship.</li>
            </ol>

            <h2 style={{ marginTop: "40px", marginBottom: "15px" }}>
              Ready to Stop Applying and Start Doing?
            </h2>

            <Button to="/apply" variant="primary">
              Apply Now & Start Building Your Portfolio
            </Button>
          </div>
        </Section>

        <TestimonialsSection type="graduates" />
      </div>
      <Footer />
    </>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "10px",
};

const tdStyle = {
  padding: "10px",
};

const tdBold = {
  padding: "10px",
  fontWeight: "bold",
  verticalAlign: "top",
  whiteSpace: "nowrap",
};

export default GraduatesPage;