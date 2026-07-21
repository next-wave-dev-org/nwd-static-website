import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import TestimonialsSection from "../components/TestimonialsSection";
import Button from "../components/Button";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";

function CompaniesPage() {
  const metadata = pageMetadata.companies;

  return (
    <>
      <Navbar />

<div className="services-page-wrapper">
  <div className="section-container services-page">
            <Helmet>
              {/* Primary Meta Tags */}
              <title>{metadata.title}</title>
              <meta
                name="description"
                content={metadata.description}
              />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link
                rel="canonical"
                href={`${BASE_URL}/#${metadata.pageUrl}`}
              />

              {/* Open Graph */}
              <meta
                property="og:type"
                content={metadata.type}
              />
              <meta
                property="og:title"
                content={metadata.title}
              />
              <meta
                property="og:description"
                content={metadata.description}
              />
              <meta
                property="og:image"
                content={`${BASE_URL}/og-logo.png`}
              />
              <meta
                property="og:image:alt"
                content="Next Wave Dev Companies"
              />
              <meta
                property="og:url"
                content={`${BASE_URL}/#${metadata.pageUrl}`}
              />
              <meta
                property="og:site_name"
                content="Next Wave Dev"
              />

              {/* Twitter */}
              <meta
                name="twitter:card"
                content="summary_large_image"
              />
              <meta
                name="twitter:title"
                content={metadata.title}
              />
              <meta
                name="twitter:description"
                content={metadata.description}
              />
              <meta
                name="twitter:image"
                content={`${BASE_URL}/og-logo.png`}
              />

              <meta
                name="keywords"
                content="companies, partnerships, talent pipeline, project collaboration"
              />
              <meta
                name="author"
                content="Next Wave Dev"
              />
            </Helmet>

            {/* Hero */}

            <h1
              style={{
                textAlign: "center",
                fontSize: "3rem",
                lineHeight: "1.15",
                marginBottom: "2rem",
                color: "var(--primary-black)",
              }}
            >
              Secure Your Future Talent Pipeline
            </h1>

            <div style={sectionCardStyle}>
              <p
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  lineHeight: "1.8",
                  fontSize: "1.15rem",
                }}
              >
                Partner with Next Wave Dev to accelerate internal
                projects, support your engineering teams, and identify
                high-potential future hires before they reach the broader
                job market.
              </p>

              <div
                style={{
                  marginTop: "2rem",
                  textAlign: "center",
                }}
              >
                <Button to="/contact" variant="primary">
                  Schedule a Call
                </Button>
              </div>
            </div>

            {/* Momentum */}

            <div style={sectionCardStyle}>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                }}
              >
                Get Project Momentum & Identify Future Hires
              </h2>

              <p
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  marginBottom: 0,
                }}
              >
                Are your junior developers overwhelmed? Do you have
                small, high-value projects waiting on the back burner?
                Next Wave Dev connects your business with enthusiastic,
                trained, and academically fresh graduates ready to
                deliver immediate value while building your future talent
                pipeline.
              </p>
            </div>

            {/* Next Wave Advantage */}

            <div style={sectionCardStyle}>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                }}
              >
                The Next Wave Advantage
              </h2>

              <p
                style={{
                  marginBottom: "2rem",
                  lineHeight: "1.8",
                }}
              >
                We provide a zero-risk way to address project needs while
                scouting high-potential talent before they enter the
                broader job market.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "30px",
                }}
              >
                 {[
                  {
                    title: "Project Acceleration",
                    description:
                      "Get motivated, current talent to tackle important business initiatives.",
                    items: [
                      "Feature Development: Support new features, testing, and implementation.",
                      "Documentation & Cleanup: Improve maintainability and internal processes.",
                      "Internal Tools: Build dashboards, automations, and operational tools.",
                      "Bug Fixing & QA: Increase reliability through debugging and testing support.",
                    ],
                  },
                  {
                    title: "Risk-Free Talent Evaluation",
                    description:
                      "Assess a graduate's work ethic, technical skills, communication, and team fit throughout a real-world project. It's the ultimate extended interview process.",
                  },
                  {
                    title: "Cost-Effective Resource",
                    description:
                      "Gain valuable project support without the immediate overhead of a full-time hire while still moving critical initiatives forward.",
                  },
                  {
                    title: "Current Skill Set",
                    description:
                      "Our graduates bring modern programming languages, frameworks, cloud technologies, and development practices directly from today's academic programs.",
                  },
                ].map(({ title, description, items }) => (
                  <div
                    key={title}
                    style={featureCardStyle}
                  >
                    <h3
                      style={{
                        margin: "0 0 12px",
                        color: "var(--primary-blue)",
                        fontSize: "1.5rem",
                      }}
                    >
                      {title}
                    </h3>

                    <p
                      style={{
                        marginBottom: items ? "20px" : 0,
                        lineHeight: "1.7",
                        color: "#444",
                      }}
                    >
                      {description}
                    </p>

                    {items && (
                      <ul
                        style={{
                          paddingLeft: "20px",
                          margin: 0,
                          lineHeight: "1.8",
                        }}
                      >
                        {items.map((item) => (
                          <li
                            key={item}
                            style={{
                              marginBottom: "10px",
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership */}

            <div style={sectionCardStyle}>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                }}
              >
                A Simple, Structured Partnership
              </h2>

              <p
                style={{
                  marginBottom: "2rem",
                  lineHeight: "1.8",
                }}
              >
                Working with Next Wave Dev is designed to be simple,
                collaborative, and transparent. We guide you through each
                stage of the engagement while helping you build a lasting
                talent pipeline.
              </p>

              <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        > 
                              {[
                  {
                    step: "1. Definition",
                    ourRole:
                      "We help define project scope, timelines, deliverables, and the technical skills needed for success.",
                    yourRole:
                      "Share your project goals, priorities, and the skills you're looking for in potential graduates.",
                  },
                  {
                    step: "2. Matching",
                    ourRole:
                      "We carefully vet, interview, and match your company with graduates whose technical abilities and career goals align with your project.",
                    yourRole:
                      "Review your selected candidates and introduce your team through our integrated communication platform.",
                  },
                  {
                    step: "3. Project",
                    ourRole:
                      "We provide onboarding assistance, periodic check-ins, and ongoing support throughout the engagement.",
                    yourRole:
                      "Mentor your team, provide feedback, and integrate graduates into your existing development workflow.",
                  },
                  {
                    step: "4. Outcome",
                    ourRole:
                      "Help ensure project success while strengthening your long-term recruiting pipeline.",
                    yourRole:
                      "Evaluate performance and decide whether to extend internships, future projects, or full-time employment opportunities.",
                  },
                ].map(({ step, ourRole, yourRole }) => (
                  <div
                    key={step}
                    style={featureCardStyle}
                  >
                    <h3
                      style={{
                        margin: "0 0 12px",
                        color: "var(--primary-blue)",
                        fontSize: "1.5rem",
                      }}
                    >
                      {step}
                    </h3>

                    <p
                      style={{
                        lineHeight: "1.7",
                        marginBottom: "18px",
                      }}
                    >
                      <strong>Our Role:</strong> {ourRole}
                    </p>

                    <p
                      style={{
                        lineHeight: "1.7",
                        marginBottom: 0,
                      }}
                    >
                      <strong>Your Role:</strong> {yourRole}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}

            <div
              style={{
                ...sectionCardStyle,
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                }}
              >
                Invest in Development, Not Just Hiring
              </h2>

              <p
                style={{
                  maxWidth: "800px",
                  margin: "0 auto 2rem",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                }}
              >
                We are committed to providing your organization with
                talented graduates who are eager to learn, contribute,
                and grow. Solve today's project challenges while building
                tomorrow's workforce through a partnership with Next Wave
                Dev.
              </p>

              <Button
                to="/contact"
                variant="primary"
              >
                Schedule a Call to Discuss Your Project Needs
              </Button>
            </div>
          </div>

        <TestimonialsSection type="companies" />
      </div>

      <Footer />
    </>
  );
}            
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
  height: "100%",
};

export default CompaniesPage;