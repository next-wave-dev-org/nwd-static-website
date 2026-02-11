import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function GraduatesPage() {
  return (
    <>
      <Helmet>
        <title>Graduates - Next Wave Dev</title>
      </Helmet>

      <Navbar />

      <div
        style={{
          padding: "5rem 5vw",
          maxWidth: "2200px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1.5rem" }}>
          For Graduates – Launch Your Career with The Next Wave Dev
        </h1>

        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginTop: "2rem", marginBottom: "0.75rem" }}>
          Welcome, Future Tech Leader!
        </h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
          You’ve got the skills. You’ve got the drive. Now, you need the experience that unlocks the door
          to your dream job. Next Wave Dev is your fast-track solution to transforming your academic
          knowledge into professional expertise.
        </p>

        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
          Why Join The Next Wave?
        </h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333" }}>
          The biggest barrier for new graduates is the “experience required” wall. We smash that wall by
          placing you directly into real-world development environments.
        </p>

        <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "12px", borderBottom: "2px solid #ddd" }}>
                  Feature
                </th>
                <th style={{ textAlign: "left", padding: "12px", borderBottom: "2px solid #ddd" }}>
                  Benefit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Real Company Projects</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  Work on live, tangible projects used by businesses, not simulated assignments.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Professional Mentorship</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  Get guidance from industry veterans who will review your code and share best practices.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Portfolio Builder</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  Complete projects that you can proudly showcase during interviews, demonstrating
                  capability over theory.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>Industry Workflow</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  Learn to use modern tools (like Git, Jira, Agile methodologies) and work within a
                  professional team structure.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
          What You Will Gain
        </h2>
        <ul style={{ fontSize: "1.2rem", lineHeight: "1.9", color: "#333", paddingLeft: "1.25rem" }}>
          <li>Verified Experience Hours: A proven track record of professional development work.</li>
          <li>
            Strong Professional References: Connect with project managers and developers who can vouch for
            your skills.
          </li>
          <li>Networking Opportunities: Build relationships with key contacts at potential hiring companies.</li>
          <li>
            Confidence: Step into your next interview knowing you have already successfully contributed to
            a company’s success.
          </li>
        </ul>

        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
          How It Works (3 Simple Steps)
        </h2>
        <ol style={{ fontSize: "1.2rem", lineHeight: "1.9", color: "#333", paddingLeft: "1.25rem" }}>
          <li>
            <strong>Apply:</strong> Tell us about your background, skills (languages, frameworks), and career goals.
          </li>
          <li>
            <strong>Match:</strong> We carefully pair you with a company project that aligns with your skillset and
            development interests.
          </li>
          <li>
            <strong>Develop:</strong> You begin working with the company team, gaining experience, and building your
            portfolio under mentorship.
          </li>
        </ol>

        <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>
          Ready to Stop Applying and Start Doing?
        </h2>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            padding: "14px 18px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: "1.1rem",
            border: "2px solid #0d6efd",
            color: "#0d6efd",
          }}
          aria-label="Apply Now & Start Building Your Portfolio"
        >
          Apply Now &amp; Start Building Your Portfolio
        </a>
      </div>

      <Footer />
    </>
  );
}

export default GraduatesPage;

