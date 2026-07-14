import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";

const ApplyPage = () => {
  const metadata = pageMetadata.apply;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
        <meta property="og:image:alt" content="Next Wave Dev Application" />
        <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:site_name" content="Next Wave Dev" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="apply, application, graduate program, enrollment" />
        <meta name="author" content="Next Wave Dev" />
      </Helmet>
      <Navbar />

<div
  style={{
    backgroundColor: "#bbd7fa",
    minHeight: "100vh",
    padding: "2rem 1.5rem 4rem",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      backgroundColor: "#cfe3ff",
      borderRadius: "24px",
      padding: "3rem",
      boxShadow: "0 8px 24px rgba(0,0,0,.08)",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        color: "#000000",
        fontSize: "3rem",
        marginBottom: "1rem",
      }}
    >
      Graduate Application
    </h1>

    <p
      style={{
        textAlign: "center",
        color: "#374151",
        marginBottom: "2rem",
        fontSize: "1.05rem",
      }}
    >
      Note: You must be logged into a Google account to upload your resume.
    </p>

    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,.08)",
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSctT3LN53mdK31PISovBb_al5MaDndIOZJt1MzhPERyJ56hEA/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        width="100%"
        height="1800"
        title="Graduate Application Form"
        onLoad={() => window.scrollTo(0, 0)}
      >
        Loading…
      </iframe>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
};

export default ApplyPage;