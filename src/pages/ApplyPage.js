import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ApplyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="apply-page">
        <h1>Graduate Application</h1>

        <p className="form-note">
          Note: You must be logged into a Google account to upload your resume.
        </p>

        <div className="iframe-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSctT3LN53mdK31PISovBb_al5MaDndIOZJt1MzhPERyJ56hEA/viewform?embedded=true"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            width="100%"
            height="900"
            title="Graduate Application Form"
            onLoad={() => window.scrollTo(0, 0)}
          >
            Loading…
          </iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ApplyPage;