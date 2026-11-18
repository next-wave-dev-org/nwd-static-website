
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "./Volunteer.css";

const VolunteerPage = () => {
  return (
    <>
      <Navbar />

      <main className="volunteer-container page-container">
        <h1>Volunteer With Next Wave Dev</h1>

        <section className="page-content-section">
          <h2>Our Mission</h2>
          <p>
            Next Wave Dev helps students and early-career developers gain real
            project experience while supporting community-focused projects.
          </p>
        </section>

        <section className="page-content-section">
          <h2>Why Volunteer</h2>
          <p>
            Volunteers can build skills, work with a team, and contribute to
            meaningful technology projects.
          </p>
        </section>

        <section className="page-content-section">
          <h2>Benefits</h2>
          <p>
            Volunteers gain hands-on experience, portfolio work, teamwork
            practice, and professional growth.
          </p>
        </section>

        <section className="volunteer-cta">
          <h2>Start Your Volunteer Journey</h2>

          <Button to="/apply" variant="primary">
            Apply Now
          </Button>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default VolunteerPage;
