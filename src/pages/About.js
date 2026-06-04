import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import NWD_about_photo from "../images/about/New_NWD_about_photo.png";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";
import { Target, GraduationCap, Building2, Lightbulb } from "lucide-react";

function About() {
  const metadata = pageMetadata.about;

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${BASE_URL}/#${metadata.pageUrl}`} />

        <meta property="og:type" content={metadata.type} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${BASE_URL}/og-logo.png`} />
        <meta property="og:image:alt" content="Next Wave Dev Logo" />
        <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:site_name" content="Next Wave Dev" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />

        <meta
          name="keywords"
          content="about, mission, tech education, career development, mentorship"
        />
        <meta name="author" content="Next Wave Dev" />
      </Helmet>

      <Navbar />

      <div style={{ backgroundColor: "rgb(220, 240, 255)" }}>

      <main
        style={{ 
          padding: "2rem 3vw", 
          maxWidth: "1200px", 
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "2rem",
            color: "#004da8",
          }}
        >
          About Next Wave Dev
        </h1>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>
            <Target {...iconProps} />
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "1rem",
              marginBottom: "1rem",
              color: "gray-600",
            }}
          >
            At Next Wave Dev, our core purpose is to solve the classic conundrum
            of the tech world: Graduates need experience to get a job, but they
            need a job to get experience.
            <br />
            We are a dynamic platform dedicated to bridging this gap. We connect
            highly motivated and skilled recent graduates with real-world
            company projects, providing them with the vital professional
            experience, mentorship, and portfolio-building opportunities they
            need to successfully launch their careers in the technology field.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>
            <GraduationCap {...iconProps} />
            For Graduates
          </h2>
          <p
            style={{
              fontSize: "1rem",
              marginBottom: "0.5rem",
              color: "gray-600",
            }}
          >
            You’ve put in the work, earned the degree, and mastered the theory.
            Now, it’s time to build your professional portfolio.
          </p>
          <ul style={{ paddingBottom: "1rem", marginLeft: "1rem" }}>
            <li>
              <strong>Gain Real Experience:</strong> Work on tangible,
              in-production company projects, not simulated ones.
            </li>
            <li>
              <strong>Build Your Portfolio:</strong> Accumulate impressive case
              studies and references that hiring managers look for.
            </li>
            <li>
              <strong>Access Mentorship:</strong> Learn best practices, industry
              workflows, and professional communication from experienced
              developers and project managers.
            </li>
            <li>
              <strong>Increase Employability:</strong> Graduates from our
              program are significantly more prepared and marketable for
              entry-level and junior roles.
            </li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>
            <Building2 {...iconProps} />
            For Companies
          </h2>
          <p
            style={{
              fontSize: "1rem",
              marginBottom: "0.5rem",
              color: "gray-600",
            }}
          >
            Tap into a pool of fresh, enthusiastic, and academically current
            talent ready to contribute immediately.
          </p>
          <ul style={{ paddingBottom: "1rem", marginLeft: "1rem" }}>
            <li>
              <strong>Cost-Effective Support:</strong> Get project assistance
              from bright, motivated talent while they gain essential
              experience.
            </li>
            <li>
              <strong>Pipeline for Hiring:</strong> Identify and evaluate
              potential full-time employees directly through their project
              performance.
            </li>
            <li>
              <strong>Fresh Perspectives:</strong> Benefit from the latest
              methodologies and innovative thinking brought by recent graduates.
            </li>
            <li>
              <strong>Impactful Contribution:</strong> Invest in the future of
              the tech industry by providing invaluable opportunities to the
              next generation of developers.
            </li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionHeadingStyle}>
            <Lightbulb {...iconProps} />
            Our Vision
          </h2>
          <p
            style={{
              fontSize: "1rem",
              marginBottom: "1rem",
              color: "gray-600",
            }}
          >
            We envision a tech ecosystem where the path from graduation to a
            successful, fulfilling career is clear, efficient, and accessible to
            everyone. Next Wave Dev is more than just a platform; we are the
            dedicated accelerator for the next generation of tech leaders.
          </p>
        </section>
      </main>

      <img
        src={NWD_about_photo}
        alt="Picture of NWD"
        className="about-page-image"
        style={{
          width: "100%",
          display: "block",
          height: "auto",
        }}
      />
      </div>
      <Footer />
    </>
  );
}

const sectionStyle = {
  padding: "2rem",
  marginBottom: "2rem",
  backgroundColor: "rgb(220, 240, 255)",
  borderLeft: "6px solid #004da8",
  borderRadius: "12px",
};
const sectionHeadingStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#1f2937",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};
const iconProps = {
  size: 28,
  color: "#004da8",
  strokeWidth: 1.75,
};

export default About;
