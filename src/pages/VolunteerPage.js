import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VolunteerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="volunteer-page" style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h1>Volunteer with Next Wave Dev</h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "1rem" }}>
          Thank you for your interest in volunteering. This page is a placeholder for volunteer opportunities,
          community support, and ways to contribute to our program. More details will be available soon.
        </p>

        <div style={{ marginTop: "2rem", padding: "1.5rem", backgroundColor: "#f5f5f5", borderRadius: "12px" }}>
          <h2>What to expect</h2>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem" }}>
            <li>Guidance on volunteering with our student developers</li>
            <li>Information about upcoming volunteer roles</li>
            <li>How to get involved with mentorship and review sessions</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VolunteerPage;
