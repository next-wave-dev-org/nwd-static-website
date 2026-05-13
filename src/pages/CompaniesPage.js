import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import TestimonialsSection from "../components/TestimonialsSection";
import Button from "../components/Button";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";


function CompaniesPage() {
    const metadata = pageMetadata.companies;
    
    return (
        <>
            <Navbar />

            <div>

                <div className="section-container companies-page">

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

                    {/* Hero Section */}
                    <h1>
                        For Companies – Secure Your Future Talent Pipeline
                    </h1>

                    <p style={{ marginBottom: "20px", lineHeight: "1.7" }}>
                        Partner with Next Wave Dev to accelerate internal projects,
                        support your engineering teams, and identify high-potential
                        future hires before they reach the broader job market.
                    </p>

                    <Button to="/contact" variant="primary">
                        Schedule a Call
                    </Button>

                    {/* Momentum Section */}
                    <h2 style={{ marginTop: "60px" }}>
                        Get Project Momentum & Identify Future Hires
                    </h2>

                    <p style={{ marginBottom: "40px", lineHeight: "1.7" }}>
                        Are your junior developers overwhelmed? Do you have small,
                        high-value projects waiting on the back burner? Next Wave Dev
                        connects your business with enthusiastic, trained, and
                        academically fresh graduates ready to deliver immediate value.
                    </p>

                    {/* Advantage Section */}
                    <h2>The Next Wave Advantage</h2>

                    <p style={{ marginBottom: "30px", lineHeight: "1.7" }}>
                        We provide a zero-risk way to address project needs while
                        scouting high-potential talent before they hit the general
                        job market.
                    </p>

                    <div style={gridStyle}>

                        <div style={cardStyle}>
                            <h3>Project Acceleration</h3>

                            <ul>
                                <li>
                                    <strong>Feature Development:</strong> Support new
                                    features, testing, and implementation.
                                </li>

                                <li>
                                    <strong>Documentation & Cleanup:</strong> Improve
                                    maintainability and internal processes.
                                </li>

                                <li>
                                    <strong>Internal Tools:</strong> Build dashboards,
                                    automations, and operational tools.
                                </li>

                                <li>
                                    <strong>Bug Fixing & QA:</strong> Increase reliability
                                    through debugging and testing support.
                                </li>
                            </ul>
                        </div>

                        <div style={cardStyle}>
                            <h3>Risk-Free Talent Evaluation</h3>

                            <p style={{ lineHeight: "1.7" }}>
                                Assess a graduate’s work ethic, technical skills, and
                                team fit over the course of a real-world project. It’s
                                the ultimate extended interview process.
                            </p>
                        </div>

                        <div style={cardStyle}>
                            <h3>Cost-Effective Resource</h3>

                            <p style={{ lineHeight: "1.7" }}>
                                Gain project support without the immediate overhead of
                                a full-time hire while still moving initiatives forward.
                            </p>
                        </div>

                        <div style={cardStyle}>
                            <h3>Current Skill Set</h3>

                            <p style={{ lineHeight: "1.7" }}>
                                Our graduates bring the latest knowledge in modern
                                programming languages, frameworks, and development
                                practices directly from top academic programs.
                            </p>
                        </div>

                    </div>

                    {/* Partnership Section */}
                    <h2>A Simple, Structured Partnership</h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "30px",
                            marginTop: "30px",
                            marginBottom: "60px"
                        }}
                    >

                        <div style={cardStyle}>
                            <h3>1. Definition</h3>

                            <p>
                                <strong>Our Role:</strong> We help define project scope,
                                timelines, and required skills.
                            </p>

                            <p>
                                <strong>Your Role:</strong> Provide project goals and
                                desired skill sets.
                            </p>
                        </div>

                        <div style={cardStyle}>
                            <h3>2. Matching</h3>

                            <p>
                                <strong>Our Role:</strong> We vet and match the top
                                candidates for your project.
                            </p>

                            <p>
                                <strong>Your Role:</strong> Interview final candidates
                                and select your preferred team members.
                            </p>
                        </div>

                        <div style={cardStyle}>
                            <h3>3. Project</h3>

                            <p>
                                <strong>Our Role:</strong> We provide onboarding support
                                and partnership check-ins.
                            </p>

                            <p>
                                <strong>Your Role:</strong> Offer mentorship, feedback,
                                and workflow integration.
                            </p>
                        </div>

                        <div style={cardStyle}>
                            <h3>4. Outcome</h3>

                            <p>
                                <strong>Our Role:</strong> Help ensure successful project
                                completion and talent pipeline development.
                            </p>

                            <p>
                                <strong>Your Role:</strong> Decide whether to extend
                                future opportunities or full-time offers.
                            </p>
                        </div>

                    </div>

                    {/* Final CTA */}
                    <h2>Invest in Development, Not Just Hiring</h2>

                    <p style={{ marginBottom: "30px", lineHeight: "1.7" }}>
                        We are committed to providing you with talent that is eager,
                        capable, and ready to learn. Start solving your project
                        challenges today and build your talent pipeline for tomorrow.
                    </p>

                    <Button to="/contact" variant="primary">
                        Schedule a Call to Discuss Your Project Needs
                    </Button>

                </div>

                <TestimonialsSection type="companies" />

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

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "30px",
    marginBottom: "60px"
};

export default CompaniesPage;