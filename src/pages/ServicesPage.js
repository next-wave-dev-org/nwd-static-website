import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaCloud,
  FaMobileAlt,
  FaRocket
} from "react-icons/fa";

function ServicesPage() {
  const metadata = pageMetadata.services;

  return (
    <>
      <Navbar />

      <div className="services-page-wrapper">
        <div className="section-container services-page">
          <Helmet>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="canonical"
              href={`${BASE_URL}/#${metadata.pageUrl}`}
            />

            <meta property="og:type" content={metadata.type} />
            <meta property="og:title" content={metadata.title} />
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
              content="Next Wave Dev Services"
            />
            <meta
              property="og:url"
              content={`${BASE_URL}/#${metadata.pageUrl}`}
            />
            <meta property="og:site_name" content="Next Wave Dev" />

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
              content="services, development, web design, mobile apps, AI integration"
            />
            <meta name="author" content="Next Wave Dev" />
          </Helmet>

          {/* HERO */}
          <section className="services-page__hero">
            <h1>
              Empowering the Next Wave of Digital Innovation
            </h1>

            <p>
              From vision to deployment, our developers build scalable,
              high-performance solutions your business deserves.
            </p>

            <Button to="/contact" variant="primary">
              Let’s Build Together
            </Button>
          </section>

          {/* SERVICES */}
          <section className="services-page__section">
            <h2>Our Services</h2>

            <div className="services-grid">
              <div className="services-card">
                <h3>Development & Engineering</h3>

                <ul>
                  <li>
                    <strong>Custom Web Development:</strong>{" "}
                    High-performance, SEO-optimized websites and landing
                    pages built to convert.
                  </li>

                  <li>
                    <strong>Full-Stack Web Applications:</strong>{" "}
                    Complex SaaS platforms, dashboards, and portals using
                    modern reactive frameworks.
                  </li>

                  <li>
                    <strong>Mobile App Development:</strong>{" "}
                    Cross-platform iOS & Android applications with a
                    seamless native feel.
                  </li>

                  <li>
                    <strong>API Development & Integration:</strong>{" "}
                    Custom APIs and third-party integrations like Stripe,
                    Salesforce, and HubSpot.
                  </li>
                </ul>
              </div>

              <div className="services-card">
                <h3>Modernization & Optimization</h3>

                <ul>
                  <li>
                    <strong>Legacy Rebuilds:</strong> Migrating outdated
                    systems to modern tech stacks without losing data or
                    uptime.
                  </li>

                  <li>
                    <strong>Performance Tuning & Debugging:</strong>{" "}
                    Expert error resolution, security patching, and
                    performance optimization.
                  </li>

                  <li>
                    <strong>UI/UX Design & Prototyping:</strong>{" "}
                    Professional Figma designs and interactive prototypes
                    before development begins.
                  </li>
                </ul>
              </div>

              <div className="services-card">
                <h3>Intelligence & Infrastructure</h3>

                <ul>
                  <li>
                    <strong>AI & Machine Learning Integration:</strong>{" "}
                    GPT-4, Claude, custom chatbots, and automated
                    workflows.
                  </li>

                  <li>
                    <strong>Cloud & DevOps:</strong> CI/CD pipelines,
                    infrastructure management, and 99.9% uptime deployment.
                  </li>

                  <li>
                    <strong>QA & Automated Testing:</strong> Robust
                    Cypress and Playwright testing suites for reliability.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* TECH STACK */}
          <section className="services-page__section">
            <div className="services-feature-card">
              <h2>The Next Wave Tech Stack</h2>

              <table className="services-tech-table">
                <tbody>
                  <tr>
                    <td className="services-tech-table__title">
                      <FaLaptopCode className="services-tech-icon" />
                      Frontend
                    </td>

                    <td>
                      React, Next.js, Astro, HTML5, CSS3, Tailwind CSS,
                      TypeScript
                    </td>
                  </tr>

                  <tr>
                    <td className="services-tech-table__title">
                      <FaServer className="services-tech-icon" />
                      Backend
                    </td>

                    <td>
                      Node.js, NestJS, Python (FastAPI/Flask), Java
                      (Spring Boot)
                    </td>
                  </tr>

                  <tr>
                    <td className="services-tech-table__title">
                      <FaMobileAlt className="services-tech-icon" />
                      Mobile
                    </td>

                    <td>React Native, Flutter, Expo</td>
                  </tr>

                  <tr>
                    <td className="services-tech-table__title">
                      <FaDatabase className="services-tech-icon" />
                      Database
                    </td>

                    <td>
                      PostgreSQL, MongoDB, Supabase, Redis, MySQL
                    </td>
                  </tr>

                  <tr>
                    <td className="services-tech-table__title">
                      <FaBrain className="services-tech-icon" />
                      Data & AI
                    </td>

                    <td>
                      Pandas, Jupyter Lab, NumPy, OpenAI API, LangChain
                    </td>
                  </tr>

                  <tr>
                    <td className="services-tech-table__title">
                      <FaCloud className="services-tech-icon" />
                      Cloud / DevOps
                    </td>

                    <td>
                      AWS, Azure, Google Cloud, Terraform, Docker,
                      Kubernetes
                    </td>
                  </tr>

                  <tr>
                    <td className="services-tech-table__title">
                      <FaRocket className="services-tech-icon" />
                      Deployment
                    </td>

                    <td>
                      Netlify, Vercel, Railway, GitHub Actions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* WHY HIRE */}
          <section className="services-page__section">
            <div className="services-feature-card">
              <h2>Why Hire Next Wave Dev?</h2>

              <ul>
                <li>
                  <strong>Built for Scale:</strong> We architect
                  solutions that grow with your user base.
                </li>

                <li>
                  <strong>Clean Code Standards:</strong> Secure,
                  accessible, and well-documented code following WCAG best
                  practices.
                </li>

                <li>
                  <strong>Agile & Adaptive:</strong> Rapid sprints with
                  transparent updates as your project evolves.
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="services-page__section">
            <div className="services-cta-card">
              <h2>Ready to Build the Future?</h2>

              <p>
                Whether you have a fully scoped project or just a rough
                idea on a napkin, our developers are ready to jump in.
              </p>

              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ServicesPage;