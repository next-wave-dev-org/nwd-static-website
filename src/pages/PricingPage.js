
import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FormComponent } from "../components/microComponents/contact/form";
import { Helmet } from "react-helmet";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";
import "./Pricing.css";

const pricingModel = {
  webApp: 3000,
  mobile: 2500,
  database: 1000,
  ai: 1500,
  cloud: 1200,
  design: 800,
};

const servicePackages = [
  {
    title: "The Launchpad",
    price: "$2,400",
    description:
      "Single-page React/Astro site, SEO setup, deployment.",
  },
  {
    title: "The Scaler",
    price: "$5,500",
    description:
      "Full-stack Next.js app with database integration and authentication.",
  },
  {
    title: "The AI Integrator",
    price: "$4,000",
    description:
      "Custom AI integration, vector database, and API tuning.",
  },
  {
    title: "The Maintenance",
    price: "$900/month",
    description:
      "10 hours monthly development time for updates and fixes.",
  },
];

const PricingPage = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const contactFormRef = useRef(null);

  const metadata = pageMetadata.pricing;

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleFeature = (feature) => {
    setSelectedFeatures((previous) =>
      previous.includes(feature)
        ? previous.filter((item) => item !== feature)
        : [...previous, feature]
    );
  };

  const total = selectedFeatures.reduce(
    (sum, feature) => sum + pricingModel[feature],
    0
  );

  return (
    <>
      <Helmet>
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
          content="Next Wave Dev Pricing"
        />
        <meta
          property="og:url"
          content={`${BASE_URL}/#${metadata.pageUrl}`}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <Navbar />

      <main className="pricing-page">
        <div className="pricing-container">

          {/* Hero Section */}
          <section className="pricing-hero">
            <h1 className="pricing-heading">
              Simple, Transparent Pricing
            </h1>

            <p className="pricing-text">
              High-end engineering at{" "}
              <strong>
                60% of standard agency rates.
              </strong>{" "}
              We pass the savings of our graduate-led
              model directly to you.
            </p>
          </section>

          {/* Service Packages */}
          <section className="pricing-section">
            <h2 className="pricing-heading">
              Service Packages
            </h2>

            <div className="package-grid">
              {servicePackages.map((pkg) => (
                <article
                  key={pkg.title}
                  className="pricing-card"
                >
                  <h3 className="pricing-card-title">
                    {pkg.title} – {pkg.price}
                  </h3>

                  <p className="pricing-text">
                    {pkg.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Custom Quote Calculator */}
          <section className="pricing-section pricing-calculator">
            <h2 className="pricing-heading">
              Custom Quote Calculator
            </h2>

            <p className="pricing-text">
              Select features below to estimate
              your project cost.
            </p>

            <div className="calculator-layout">

              <div className="calculator-options">
                {Object.entries(pricingModel).map(
                  ([key, value]) => (
                    <label
                      key={key}
                      className="calculator-option"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(key)}
                        onChange={() => toggleFeature(key)}
                      />

                      <span>
                        {key === "webApp" &&
                          "Core Web App (Next.js/React)"}

                        {key === "mobile" &&
                          "Mobile App Extension (React Native)"}

                        {key === "database" &&
                          "Database Architecture"}

                        {key === "ai" &&
                          "AI / Chatbot Integration"}

                        {key === "cloud" &&
                          "Cloud Infrastructure"}

                        {key === "design" &&
                          "UI/UX Design Phase"}

                        {" "}– +${value.toLocaleString()}
                      </span>
                    </label>
                  )
                )}
              </div>

              <div className="calculator-summary">
                <h3 className="pricing-card-title">
                  Current Estimated Quote: $
                  {total.toLocaleString()}
                </h3>

                <p className="pricing-text">
                  This estimate is based on an
                  average ~$75/hr graduate rate.
                  Final pricing is provided after
                  a technical discovery call.
                </p>

                <button
                  type="button"
                  className="pricing-cta"
                  onClick={scrollToContactForm}
                >
                  Lock in This Quote
                </button>
              </div>

            </div>
          </section>

          {/* Why Our Prices Are Lower */}
          <section className="pricing-section pricing-why">
            <h2 className="pricing-heading">
              Why Our Prices Are Lower
            </h2>

            <p className="pricing-text">
              We do not carry the overhead of
              traditional agencies. You get Next
              Wave Dev graduates trained in modern
              technology stacks and supported by
              senior architects delivering 100% of
              the quality at 60% of the cost.
            </p>
          </section>

          {/* Contact Form */}
          <section
            ref={contactFormRef}
            className="pricing-contact-form"
          >
            <h2 className="pricing-heading">
              Contact Us About Your Quote
            </h2>

            <FormComponent />
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default PricingPage;
