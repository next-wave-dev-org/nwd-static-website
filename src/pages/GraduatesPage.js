import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import TestimonialsSection from "../components/TestimonialsSection";
import Button from "../components/Button";

function GraduatesPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          backgroundColor: "#eef7fb",
          minHeight: "100vh",
          padding: "60px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <Helmet>
            <title>Graduates - Next Wave Dev</title>
          </Helmet>

          <h1 style={{ marginBottom: "25px" }}>
            Launch Your Career with The Next Wave Dev
          </h1>

          <div style={sectionCardStyle}>
            <h2 style={{ marginTop: 0, marginBottom: "15px" }}>
              Welcome, Future Tech Leader!
            </h2>

            <p style={{ marginBottom: 0, lineHeight: "1.7" }}>
              You’ve got the skills. You’ve got the drive. Now, you need the
              experience that unlocks the door to your dream job. Next Wave Dev
              is your fast-track solution to transforming your academic
              knowledge into professional expertise.
            </p>
          </div>

          <div style={sectionCardStyle}>
            <h2 style={{ marginTop: 0, marginBottom: "24px" }}>
              Why Join The Next Wave?
            </h2>

            <p style={{ marginBottom: "30px" }}>
              The biggest barrier for new graduates is the “experience required”
              wall. We smash that wall by placing you directly into real-world
              development environments.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  feature: "Real Company Projects",
                  benefit:
                    "Work on live, tangible projects used by businesses, not simulated assignments.",
                },
                {
                  feature: "Professional Mentorship",
                  benefit:
                    "Get guidance from industry veterans who will review your code and share best practices.",
                },
                {
                  feature: "Portfolio Builder",
                  benefit:
                    "Complete projects that you can proudly showcase during interviews, demonstrating capability over theory.",
                },
                {
                  feature: "Industry Workflow",
                  benefit:
                    "Learn to use modern tools (like Git, Jira, Agile methodologies) and work within a professional team structure.",
                },
              ].map(({ feature, benefit }) => (
                <div key={feature} style={featureCardStyle}>
                  <h3
                    style={{
                      margin: "0 0 12px",
                      color: "#004da8",
                    }}
                  >
                    {feature}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      lineHeight: "1.7",
                      color: "#444",
                    }}
                  >
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={sectionCardStyle}>
            <h2 style={{ marginTop: 0, marginBottom: "15px" }}>
              What You Will Gain
            </h2>

            <ul
              style={{
                marginBottom: 0,
                paddingLeft: 0,
                listStyle: "none",
              }}
            >
              <li style={gainItemStyle}>
                <span style={iconStyle}>⏱️</span>
                <span>
                  <strong>Verified Experience Hours:</strong> A proven track
                  record of professional development work.
                </span>
              </li>

              <li style={gainItemStyle}>
                <span style={iconStyle}>🤝</span>
                <span>
                  <strong>Strong Professional References:</strong> Connect with
                  project managers and developers who can vouch for your skills.
                </span>
              </li>

              <li style={gainItemStyle}>
                <span style={iconStyle}>🌐</span>
                <span>
                  <strong>Networking Opportunities:</strong> Build relationships
                  with key contacts at potential hiring companies.
                </span>
              </li>

              <li style={gainItemStyle}>
                <span style={iconStyle}>💪</span>
                <span>
                  <strong>Confidence:</strong> Step into your next interview
                  knowing you have already successfully contributed to a
                  company’s success.
                </span>
              </li>
            </ul>
          </div>

          <div style={sectionCardStyle}>
            <h2 style={{ marginTop: 0, marginBottom: "20px" }}>
              How It Works (3 Simple Steps)
            </h2>

            <ol
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.9",
                color: "#333",
                paddingLeft: "1.25rem",
                marginBottom: 0,
              }}
            >
              <li>
                <strong>Apply:</strong> Tell us about your background, skills
                (languages, frameworks), and career goals.
              </li>

              <li>
                <strong>Match:</strong> We carefully pair you with a company
                project that aligns with your skillset and development
                interests.
              </li>

              <li>
                <strong>Develop:</strong> You begin working with the company
                team, gaining experience, and building your portfolio under
                mentorship.
              </li>
            </ol>
          </div>

          <div style={sectionCardStyle}>
            <h2 style={{ marginTop: 0, marginBottom: "15px" }}>
              Ready to Stop Applying and Start Doing?
            </h2>

            <Button to="/apply" variant="primary">
              Start Now
            </Button>
          </div>
        </div>
      </div>

      <TestimonialsSection type="graduates" />
      <Footer />
    </>
  );
}

const gainItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "15px",
};

const iconStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.5",
};

const sectionCardStyle = {
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "32px",
  marginBottom: "32px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
};

const featureCardStyle = {
  backgroundColor: "#fff",
  border: "1px solid #d9e4ec",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
};

export default GraduatesPage;