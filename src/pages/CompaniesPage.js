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
    const CTA_LINK = "#/Contact";
    
    return (
        <>
            <Navbar />


            <div>

        <Section>

            <div style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto"}}>

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
                    <meta property="og:image:alt" content="Next Wave Dev Companies" />
                    <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
                    <meta property="og:site_name" content="Next Wave Dev" />
                    
                    {/* Twitter Card Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metadata.title} />
                    <meta name="twitter:description" content={metadata.description} />
                    <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
                    
                    {/* Additional Meta Tags */}
                    <meta name="keywords" content="companies, partnerships, talent pipeline, project collaboration" />
                    <meta name="author" content="Next Wave Dev" />
                </Helmet>

                <h1 style={{marginBottom: "25px"}}>
                    Secure Your Future Talent Pipeline
                </h1>

                <h2 style={{ marginTop: "40px", marginBottom: "15px"}}>
                    Get Project Momentum and Identify Future Hires
                </h2>
                <p style={{ marginBottom: "40px", lineHeight: "1.7" }}>
                    Are your junior developers overwhelmed? Do you have small, high-value projects 
                    waiting on the back burner? Next Wave Dev connects your business with enthusiastic, 
                    trained, and academically fresh graduates ready to deliver immediate value.
                </p>

                <h2 style={{ marginTop: "40px", marginBottom: "15px"}}>
                    The Next Wave Advantage
                </h2>
                <p style={{ marginBottom: "40px", lineHeight: "1.7" }}>
                    We provide a zero-risk way to address project needs while scouting high-potential 
                    talent before they hit the general job market.
                </p>

                {/* ✅ REPLACED TABLE WITH CARDS */}
                <div style={{ marginBottom: "60px" }}>
                  <div style={cardContainer}>
                    
                    <div style={card}>
                      <h3 style={cardTitle}>Project Acceleration</h3>
                      <p style={cardText}>
                        Get motivated and current talent to tackle projects like:
                      </p>
                      <ul style={cardList}>
                        <li>Feature development and testing</li>
                        <li>Documentation and code cleanup</li>
                        <li>Internal tool creation</li>
                        <li>Bug fixing and QA</li>
                      </ul>
                    </div>

                    <div style={card}>
                      <h3 style={cardTitle}>Risk-Free Talent Evaluation</h3>
                      <p style={cardText}>
                        Assess a graduate’s work ethic, technical skills, and team fit over the course of a project. 
                        It’s the ultimate extended interview.
                      </p>
                    </div>

                    <div style={card}>
                      <h3 style={cardTitle}>Cost-Effective Resource</h3>
                      <p style={cardText}>
                        Gain project support without the immediate overhead of a full-time hire.
                      </p>
                    </div>

                    <div style={card}>
                      <h3 style={cardTitle}>Current Skill Set</h3>
                      <p style={cardText}>
                        Our graduates bring the latest knowledge in modern programming languages and 
                        frameworks directly from top academic programs.
                      </p>
                    </div>

                  </div>
                </div>

                <h2>
                    A Simple, Structured Partnership
                </h2>

                {/* ✅ REPLACED SECOND TABLE WITH CARDS */}
                <div style={{ marginBottom: "60px" }}>
                  <div style={cardContainer}>
                    
                    <div style={card}>
                      <h3 style={cardTitle}>1. Definition</h3>
                      <p><strong>Our Role:</strong> We help you clearly define the project scope, required skills, and timelines.</p>
                      <p><strong>Your Role:</strong> Provide project brief and required skill set.</p>
                    </div>

                    <div style={card}>
                      <h3 style={cardTitle}>2. Matching</h3>
                      <p><strong>Our Role:</strong> We vet, interview, and match you with the top 2-3 candidates whose skills align perfectly.</p>
                      <p><strong>Your Role:</strong> Interview final candidates and select your team member(s).</p>
                    </div>

                    <div style={card}>
                      <h3 style={cardTitle}>3. Project</h3>
                      <p><strong>Our Role:</strong> We provide onboarding support and check-ins to ensure a smooth partnership.</p>
                      <p><strong>Your Role:</strong> Provide mentorship, feedback, and integrate the graduate into your workflow.</p>
                    </div>

                    <div style={card}>
                      <h3 style={cardTitle}>4. Outcome</h3>
                      <p><strong>Our Role:</strong> You complete your project and have a vetted candidate pipeline.</p>
                      <p><strong>Your Role:</strong> Decide whether to offer the graduate a full-time role.</p>
                    </div>

                  </div>
                </div>

                <h2>
                    Invest in Development, Not Just Hiring
                </h2>
                <p style={{ marginBottom: "30px", lineHeight: "1.7" }}>
                    We are committed to providing you with talent that is eager, capable, and ready to learn. Start solving your project challenges today and build your talent pipeline for tomorrow.
                </p>

                <Button to="/contact" variant="primary">
                    Schedule a Call to Discuss Your Project Needs
                </Button>
            </div>

            </Section>

            <TestimonialsSection type="companies" />
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



// Card styling
const cardContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const card = {
  padding: "20px",
  borderRadius: "12px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
};

const cardTitle = {
  marginBottom: "10px",
};

const cardText = {
  lineHeight: "1.6",
};

const cardList = {
  paddingLeft: "20px",
  marginTop: "10px",
  lineHeight: "1.6",
};

export default CompaniesPage;