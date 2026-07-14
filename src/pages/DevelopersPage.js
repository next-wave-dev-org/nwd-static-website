// src/pages/DevelopersPage.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Developer from "../components/Developer";
import data from "../developers.json";
import { Helmet } from "react-helmet";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";

const developers = data.developers;

const DevelopersPage = () => {
  const metadata = pageMetadata.developers;
  
  return (
    <div>
      <Helmet>

        <title>Next Wave Dev - Developers</title>

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
        <meta property="og:image:alt" content="Next Wave Dev Developers" />
        <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:site_name" content="Next Wave Dev" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="developers, team, profiles, projects, portfolio" />
        <meta name="author" content="Next Wave Dev" />

      </Helmet>

      <Navbar />

      <div
        style={{
          backgroundColor: "#bbd7fa",
          minHeight: "calc(100vh - 95px)",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: "#cfe3ff",
            borderRadius: "24px",
            padding: "3rem",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#004da8",
              fontSize: "3rem",
              marginBottom: "3rem",
            }}
          >
            Our Developers
          </h1>

          <div className="developers-grid">
            {developers.map((developer, index) => (
              <Developer key={index} {...developer} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DevelopersPage;
