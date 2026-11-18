
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import TestimonialsSection from "../components/TestimonialsSection";
import Button from "../components/Button";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";
import "./CompaniesPage.css";

function CompaniesPage() {
    const metadata = pageMetadata.companies;

    return (
        <>
            <Navbar />

            <main className="companies-page">
                <Section>
                    <div className="companies-container">

                        <Helmet>
                            {/* Primary Meta Tags */}
                            <title>{metadata.title}</title>
                            <meta name="description" content={metadata.description} />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link
                                rel="canonical"
                                href={`${BASE_URL}/#${metadata.pageUrl}`}
                            />

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
                            <meta
                                name="keywords"
                                content="companies, partnerships, talent pipeline, project collaboration"
                            />
                            <meta name="author" content="Next Wave Dev" />
                        </Helmet>

                        {/* Hero Section */}
                        <h1 className="companies-heading companies-hero-title">
                            For Companies – Secure Your Future Talent Pipeline
                        </h1>

                        <p className="companies-paragraph companies-hero-description">
                            Partner with Next Wave Dev to accelerate internal projects,
                            support your engineering teams, and identify high-potential
                            future hires before they reach the broader job market.
                        </p>

                        <Button to="/contact" variant="primary">
                            Schedule a Call
                        </Button>

                        {/* Momentum Section */}
                        <section className="companies-content-section">
                            <h2 className="companies-heading">
                                Get Project Momentum & Identify Future Hires
                            </h2>

                            <p className="companies-paragraph">
                                Are your junior developers overwhelmed? Do you have small,
                                high-value projects waiting on the back burner? Next Wave Dev
                                connects your business with enthusiastic, trained, and
                                academically fresh graduates ready to deliver immediate value.
                            </p>
                        </section>

                        {/* Advantage Section */}
                        <section className="companies-content-section">
                            <h2 className="companies-heading">
                                The Next Wave Advantage
                            </h2>

                            <p className="companies-paragraph">
                                We provide a zero-risk way to address project needs while
                                scouting high-potential talent before they hit the general
                                job market.
                            </p>

                            <div className="companies-card-grid">

                                <article className="companies-card">
                                    <h3 className="companies-card-title">
                                        Project Acceleration
                                    </h3>

                                    <p className="companies-paragraph">
                                        Get motivated and current talent to tackle projects like:
                                    </p>

                                    <ul className="companies-card-list">
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
                                </article>

                                <article className="companies-card">
                                    <h3 className="companies-card-title">
                                        Risk-Free Talent Evaluation
                                    </h3>

                                    <p className="companies-paragraph">
                                        Assess a graduate’s work ethic, technical skills, and
                                        team fit over the course of a real-world project. It’s
                                        the ultimate extended interview process.
                                    </p>
                                </article>

                                <article className="companies-card">
                                    <h3 className="companies-card-title">
                                        Cost-Effective Resource
                                    </h3>

                                    <p className="companies-paragraph">
                                        Gain project support without the immediate overhead of
                                        a full-time hire while still moving initiatives forward.
                                    </p>
                                </article>

                                <article className="companies-card">
                                    <h3 className="companies-card-title">
                                        Current Skill Set
                                    </h3>

                                    <p className="companies-paragraph">
                                        Our graduates bring the latest knowledge in modern
                                        programming languages, frameworks, and development
                                        practices directly from top academic programs.
                                    </p>
                                </article>

                            </div>
                        </section>

                        {/* Partnership Section */}
                        <section className="companies-content-section">
                            <h2 className="companies-heading">
                                A Simple, Structured Partnership
                            </h2>

                            <div className="companies-card-grid">

                                <article className="companies-card">
                                    <h3 className="companies-card-title">
                                        1. Definition
                                    </h3>

                                    <p className="companies-paragraph">
                                        <strong>Our Role:</strong> We help define project scope,
                                        timelines, and required skills.
                                    </p>

                                    <p className="companies-paragraph">
                                        <strong>Your Role:</strong> Provide project goals and
                                        desired skill sets.
                                    </p>
                                </article>

                                <article className="companies-card">
                                    <h3 className="companies-card-title">
                                        2. Matching
                                    </h3>

                                    <p className="companies-paragraph">
                                        <strong>Our Role:</strong> We vet, interview, and match
                                        you with our top candidates whose skills align perfectly.
                                    </p>

                                    <p className="companies-paragraph">
                                        <strong>Your Role:</strong> Once your team has been
                                        selected, introduce yourselves through our integrated
                                        messaging system.
                                    </p>
                                </article>

                                <article className="companies-card">
                                    <h3 className="companies-card-title">
                                        3. Project
                                    </h3>

                                    <p className="companies-paragraph">
                                        <strong>Our Role:</strong> We provide onboarding support
                                        and partnership check-ins.
                                    </p>

                                    <p className="companies-paragraph">
                                        <strong>Your Role:</strong> Offer mentorship, feedback,
                                        and workflow integration.
                                    </p>
                                </article>

                                <article className="companies-card">
                                    <h3 className="companies-card-title">
                                        4. Outcome
                                    </h3>

                                    <p className="companies-paragraph">
                                        <strong>Our Role:</strong> Help ensure successful project
                                        completion and talent pipeline development.
                                    </p>

                                    <p className="companies-paragraph">
                                        <strong>Your Role:</strong> Decide whether to extend
                                        future opportunities or full-time offers.
                                    </p>
                                </article>

                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="companies-content-section companies-final-cta">
                            <h2 className="companies-heading">
                                Invest in Development, Not Just Hiring
                            </h2>

                            <p className="companies-paragraph">
                                We are committed to providing you with talent that is eager,
                                capable, and ready to learn. Start solving your project
                                challenges today and build your talent pipeline for tomorrow.
                            </p>

                            <Button to="/contact" variant="primary">
                                Schedule a Call to Discuss Your Project Needs
                            </Button>
                        </section>

                    </div>
                </Section>

                <TestimonialsSection type="companies" />
            </main>

            <Footer />
        </>
    );
}

export default CompaniesPage;
