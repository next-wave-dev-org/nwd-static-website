import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import TestimonialsSection from "../components/TestimonialsSection";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";


function CompaniesPage() {
    const metadata = pageMetadata.companies;
    const CTA_LINK = "#/Contact";
    
    return (
        <>
            <Navbar />

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

                    For Companies – Secure Your Future Talent Pipeline
                </h1>

                <h2 style={{ marginTop: "40px", marginBottom: "15px"}}>
                    Get Project Momentum and Identify Future Hires
                </h2>
                <p style={{ marginBottom: "30px", lineHeight: "1.7" }}>
                    Are your junior developers overwhelmed? Do you have small, high-value projects 
                    waiting on the back burner? Next Wave Dev connects your business with enthusiastic, 
                    trained, and academically fresh graduates ready to deliver immediate value.
                </p>

                <h2 style={{ marginTop: "40px", marginBottom: "15px"}}>
                    The Next Wave Advantage
                </h2>
                <p style={{ marginBottom: "30px" }}>
                    We provide a zero-risk way to address project needs while scouting high-potential 
                    talent before they hit the general job market.
                </p>

                <div style={{ overflowX: "auto", marginBottom: "60px" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <tbody>
                            <tr>
                                <td style={tdBold}>Project Acceleration:</td>
                                <td style={tdStyle}>
                                    Get motivated and current talent to tackle projects like:
                                    <ul style={{paddingLeft: "20px", marginTop: "10px" }}>
                                        <li style={{ marginBottom: "12px", marginTop: "4px" }}>Feature development and testing</li>
                                        <li style={{ marginBottom: "12px" }}>Documentation and code cleanup</li>
                                        <li style={{ marginBottom: "12px" }}>Internal tool creation</li>
                                        <li style={{ marginBottom: "4px" }}>Bug fixing and QA</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td style={tdBold}>Risk-Free Talent Evaluation:</td> 
                                <td style={tdStyle}>
                                    Assess a graduate’s work ethic, technical skills, and team fit over the course of a project. 
                                    It’s the ultimate extended interview.
                                </td>
                            </tr>
                            <tr>
                                <td style={tdBold}>Cost-Effective Resource:</td>
                                <td style={tdStyle}>
                                    Gain project support without the immediate overhead of a full-time hire.
                                </td>
                            </tr>
                            <tr>
                                <td style={tdBold}>Current Skill Set:</td>
                                <td style={tdStyle}>
                                    Our graduates bring the latest knowledge in modern programming languages and 
                                    frameworks directly from top academic programs.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>
                    A Simple, Structured Partnership
                </h2>
                <div style={{ overflowX: "auto", marginBottom: "60px" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Phase</th>
                                <th style={thStyle}>Our Role</th>
                                <th style={thStyle}>Your Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdBold}>1. Definition</td>
                                <td style={tdStyle}>We help you clearly define the project scope, required skills, and timelines.</td>
                                <td style={tdStyle}>Provide project brief and required skill set.</td>
                            </tr>
                            <tr>
                                <td style={tdBold}>2. Matching</td>
                                <td style={tdStyle}>We vet, interview, and match you with the top 2-3 candidates whose skills align perfectly.</td>
                                <td style={tdStyle}>Interview final candidates and select your team member(s).</td>
                            </tr>
                            <tr>
                                <td style={tdBold}>3. Project</td>
                                <td style={tdStyle}>We provide onboarding support and check-ins to ensure a smooth partnership.</td>
                                <td style={tdStyle}>Provide mentorship, feedback, and integrate the graduate into your workflow.</td>
                            </tr>
                            <tr>
                                <td style={tdBold}>4. Outcome</td>
                                <td style={tdStyle}>You complete your project and have a vetted candidate pipeline.</td>
                                <td style={tdStyle}>Decide whether to offer the graduate a full-time role.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>
                    Invest in Development, Not Just Hiring
                </h2>
                <p style={{ marginBottom: "30px", lineHeight: "1.7" }}>
                    We are committed to providing you with talent that is eager, capable, and ready to learn. Start solving your project challenges today and build your talent pipeline for tomorrow.
                </p>

                <a
                    href={CTA_LINK}
                    style={{
                        display: "inline-block",
                        padding: "12px 20px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontWeight: "bold"
                    }}
                    aria-label="Schedule a Call to Discuss Your Project Needs"
                >
                    Schedule a Call to Discuss Your Project Needs
                </a>
            </div>

            </Section>

            <TestimonialsSection type="companies" />

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

export default CompaniesPage;
