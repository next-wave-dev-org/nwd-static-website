import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FormComponent } from "../components/microComponents/contact/form";
import { Helmet } from "react-helmet";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";

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
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(
        selectedFeatures.filter((f) => f !== feature)
      );
    } else {
      setSelectedFeatures([
        ...selectedFeatures,
        feature,
      ]);
    }
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

      <div 
        className="pricing-container"
        style={{
          backgroundColor: "#eaf6ff",
          minHeight: "100vh",
          padding: "3rem 1rem",
        }}
      >

        <section className="pricing-hero pricing-card-section">
          <h1>Simple, Transparent Pricing</h1>

          <p>
            High-end engineering at{" "}
            <strong>
              60% of standard agency rates.
            </strong>{" "}
            We pass the savings of our graduate-led
            model directly to you.
          </p>
        </section>

        <section className="pricing-packages pricing-card-section">
          <h2>Service Packages</h2>

          <div className="package-grid">
            {servicePackages.map(
              (pkg, index) => (
                <div
                  key={index}
                  className="pricing-card"
                >
                  <h3>
                    {pkg.title} – {pkg.price}
                  </h3>

                  <p>
                    {pkg.description}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="pricing-calculator pricing-card-section">
          <h2>
            Custom Quote Calculator
          </h2>

          <p>
            Select features below to estimate
            your project cost.
          </p>

          <div className="calculator-layout">

            <div className="calculator-options">

              {Object.entries(
                pricingModel
              ).map(([key, value]) => (

                <label
                  key={key}
                  className="calculator-option"
                >

                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(
                      key
                    )}
                    onChange={() =>
                      toggleFeature(key)
                    }
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

                    {" "}– +$
                    {value.toLocaleString()}
                  </span>

                </label>
              ))}
            </div>

            <div className="calculator-summary">

              <h3>
                Current Estimated Quote: $
                {total.toLocaleString()}
              </h3>

              <p>
                This estimate is based on an
                average ~$75/hr graduate rate.
                Final pricing is provided after
                a technical discovery call.
              </p>

              <button
                className="pricing-cta"
                onClick={scrollToContactForm}
              >
                Lock in This Quote
              </button>

            </div>
          </div>
        </section>

        <section className="pricing-why pricing-card-section">

          <h2>
            Why Our Prices Are Lower
          </h2>

          <p>
            We do not carry the overhead of
            traditional agencies. You get Next
            Wave Dev graduates trained in modern
            technology stacks and supported by
            senior architects delivering 100% of
            the quality at 60% of the cost.
          </p>

        </section>

        <section
          ref={contactFormRef}
          className="pricing-contact-form pricing-card-section"
          style={{
            maxWidth: "1000px",
            margin: "50px auto",
            padding: "40px",
          }}
        >
          <h2>
            Contact Us About Your Quote
          </h2>

          <FormComponent />
        </section>

      </div>

      <Footer />
    </>
  );
};

export default PricingPage;