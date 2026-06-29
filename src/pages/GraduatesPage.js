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
            backgroundColor: "#bbd7fa",
            width: "100%",
            minHeight: "100vh",
            padding: "2rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: "#cfe3ff",
            borderRadius: "24px",
            padding: "clamp(2rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem) 5rem",
          }}
        >
          <Helmet>
            <title>Graduates - Next Wave Dev</title>
          </Helmet>

          <h1
            style={{
              textAlign: "center",
              fontSize: "3rem",
              lineHeight: "1.15",
              marginBottom: "2rem",
              color: "var(--primary-black)",
            }}
>
            Launch Your Career with The Next Wave Dev
          </h1>

          <div style={sectionCardStyle}>
            <h2 style={{
                marginTop: 0,
                marginBottom: "1.5rem",
                color: "var(--primary-blue)",
              }}>
              Welcome, Future Tech Leader!
            </h2>

            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.8",
                fontSize: "1.15rem",
              }}
            >
              You’ve got the skills. You’ve got the drive. Now, you need the
              experience that unlocks the door to your dream job. Next Wave Dev
              is your fast-track solution to transforming your academic
              knowledge into professional expertise.
            </p>
          </div>

          <div style={sectionCardStyle}>
            <h2 style={{
                  marginTop: 0,
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                }}>
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
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
                marginTop: "2rem",
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
                      color: "var(--primary-blue)",
                      fontSize: "1.5rem",
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

          <div
            style={{
              ...sectionCardStyle,
              textAlign: "center",
            }}
>
            <h2 style={{
                  marginTop: 0,
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                }}>
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
            <h2 style={{
                  marginTop: 0,
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                }}>
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
            <h2 style={{
                  marginTop: 0,
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                }}>
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
  backgroundColor: "#e8f2ff",
  borderRadius: "20px",
  padding: "2.25rem",
  marginBottom: "2.5rem",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(255,255,255,0.45)",
  backdropFilter: "blur(6px)",
};

const featureCardStyle = {
  backgroundColor: "#e8f2ff",
  borderRadius: "20px",
  padding: "2rem",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(255,255,255,0.45)",
  transition: "transform .2s ease, box-shadow .2s ease",
};

export default GraduatesPage;
