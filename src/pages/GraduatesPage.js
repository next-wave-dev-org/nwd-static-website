
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import TestimonialsSection from "../components/TestimonialsSection";
import Button from "../components/Button";
import { pageMetadata } from "../utils/metadataConfig";
import { Link } from "react-router-dom";
import "./Graduates.css";

function GraduatesPage() {
  const metadata = pageMetadata.graduates;

  return (
    <>
      <Navbar />

      <div className="graduates-container">
        <Helmet>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <h1 style={{ marginBottom: "25px" }}>
          For Graduates – Launch Your Career with The Next Wave Dev
        </h1>

        <h2 style={{ marginTop: "40px", marginBottom: "15px" }}>
          Welcome, Future Tech Leader!
        </h2>

        <p style={{ marginBottom: "30px", lineHeight: "1.7" }}>
          You’ve got the skills. You’ve got the drive. Now, you need the
          experience that unlocks the door to your dream job. Next Wave Dev is
          your fast-track solution to transforming your academic knowledge into
          professional expertise.
        </p>

        <h2 style={{ marginTop: "40px", marginBottom: "15px" }}>
          Why Join The Next Wave?
        </h2>

        <p style={{ marginBottom: "30px" }}>
          The biggest barrier for new graduates is the “experience required”
          wall. We smash that wall by placing you directly into real-world
          development environments.
        </p>

        <div className="graduates-table-wrapper">
          <table className="graduates-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Benefit</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><strong>Real Company Projects</strong></td>
                <td>
                  Work on live, tangible projects used by businesses, not
                  simulated assignments.
                </td>
              </tr>

              <tr>
                <td><strong>Professional Mentorship</strong></td>
                <td>
                  Get guidance from industry veterans who will review your code
                  and share best practices.
                </td>
              </tr>

              <tr>
                <td><strong>Portfolio Builder</strong></td>
                <td>
                  Complete projects that you can proudly showcase during
                  interviews, demonstrating capability over theory.
                </td>
              </tr>

              <tr>
                <td><strong>Industry Workflow</strong></td>
                <td>
                  Learn to use modern tools (like Git, Jira, Agile methodologies)
                  and work within a professional team structure.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: "40px", marginBottom: "15px" }}>
          What You Will Gain
        </h2>

        <ul className="graduates-benefits-list">
          <li>
            Verified Experience Hours: A proven track record of professional
            development work.
          </li>
          <li>
            Strong Professional References: Connect with project managers and
            developers who can vouch for your skills.
          </li>
          <li>
            Networking Opportunities: Build relationships with key contacts at
            potential hiring companies.
          </li>
          <li>
            Confidence: Step into your next interview knowing you have already
            successfully contributed to a company’s success.
          </li>
        </ul>

        <h2 className="graduates-how-it-works-title">
          How It Works (3 Simple Steps)
        </h2>

        <ol className="graduates-how-it-works-list">
          <li>
            <strong>Apply:</strong> Tell us about your background, skills
            (languages, frameworks), and career goals.
          </li>
          <li>
            <strong>Match:</strong> We carefully pair you with a company project
            that aligns with your skillset and development interests.
          </li>
          <li>
            <strong>Develop:</strong> You begin working with the company team,
            gaining experience, and building your portfolio under mentorship.
          </li>
        </ol>

        <h2 style={{ marginTop: "40px", marginBottom: "15px" }}>
          Ready to Stop Applying and Start Doing?
        </h2>

        <Button to="/apply" variant="primary">
          Start Now
        </Button>
      </div>

      <TestimonialsSection type="graduates" />

      <Footer />
    </>
  );
}

export default GraduatesPage;
