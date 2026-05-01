import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { FormComponent } from "../components/microComponents/contact/form";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";
// import {useState} from "react";
// Commented out for now since useState is not being used

function Contact() {
  const metadata = pageMetadata.contact;
  
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
        <meta property="og:image:alt" content="Next Wave Dev Contact" />
        <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:site_name" content="Next Wave Dev" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="contact, get in touch, support, questions" />
        <meta name="author" content="Next Wave Dev" />
      </Helmet>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 95px)" }}>
        <div
          style={{
            marginTop: "10vh",
            marginBottom: "10vh",
            marginLeft: "2rem",
            marginRight: "2rem",
            height: "100%",
          }}
        >
          <div
            style={{
              ...flexParent,
              height: "100%",
            }}
          >
            <div style={flexChild} className={"col-sm-6"}>
              <FormComponent />
            </div>
            <div
              style={{
                ...flexChild,
                display: "flex",
                justifyContent: "center",
              }}
              className={"col-sm-6"}
            >
              <iframe
                title="contact-page-map"
                src="https://maps.google.com/maps?q=12356+NORTHUP+WAY+STE+E,+BELLEVUE,+WA,+98005-5176,+UNITED+STATES&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="80%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                style={{ border: "none" }}
                referrerPolicy="no-referrer-when-downgrade"
                id={"contact-page-map"}
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export const flexChild = {
  position: "relative",
  width: "100%",
  minHeight: "1px",
  paddingRight: "15px",
  paddingLeft: "15px",
};

export const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default Contact;
