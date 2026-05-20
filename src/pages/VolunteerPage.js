import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const sectionStyle = {
  backgroundColor: "#f5f7fa",
  padding: "35px",
  borderRadius: "12px",
  marginBottom: "35px",
  borderLeft: "6px solid #0057b8",
};

const VolunteerPage = () => {
  return (
    <>
      <Navbar />

      <div className="section-container">
        <h1>Volunteer With Next Wave Dev</h1>

        <section style={sectionStyle}>
          <h2>Our Mission</h2>
          <p>
            Next Wave Dev helps students and early-career developers gain real
            project experience while supporting community-focused projects.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2>Why Volunteer</h2>
          <p>
            Volunteers can build skills, work with a team, and contribute to
            meaningful technology projects.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2>Benefits</h2>
          <p>
            Volunteers gain hands-on experience, portfolio work, teamwork practice,
            and professional growth.
          </p>
        </section>

        <h2>Start Your Volunteer Journey</h2>

        <Button to="/apply" variant="primary">
          Apply Now
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default VolunteerPage;