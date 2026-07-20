// src/pages/PortfolioPage.js

import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";

import page1 from "../images/projects/pelletier/pelletier.png";
import page2 from "../images/projects/nsc_portfolio/homepage.png";
import nwdScreenshot from "../images/projects/nwd/nwd_home.png";
import page3 from "../images/projects/belindas_closet/home_page_light.png";
import page4 from "../images/projects/nsc_events/home_page_not_signed_in.png";
import shiftAppScreenshot from "../images/projects/shiftapp/shiftapp_home.png";
import geekGirlConScreenshot from "../images/projects/geekgirlcon/geekgirl_home.png";
import lictonSpringsScreenshot from "../images/projects/licton_springs/licton_springs_home.png";

const metadata = pageMetadata.portfolio;

const projects = [
  {
    title: "NWD Website",
    company: "Next Wave Dev",
    status: "In Development",
    screenshot: nwdScreenshot,
    description:
      "Official website for Next Wave Dev, built by students in the Bachelor's program at North Seattle College.",
    socialMedia: [
      {
        icon: faGithub,
        link: "https://github.com/next-wave-dev-org/nwd-static-website",
      },
      {
        icon: faLink,
        link: "https://nextwavedev.org",
      },
    ],
  },

  {
    title: "Construction and Renovation Site",
    company: "Pelletier Construction",
    status: "Complete",
    screenshot: page1,
    description:
      "Pelletier Construction Group is a company based in the Seattle area specializing in home renovation. Redesigned by students in the North Seattle College Bachelor's program.",
    socialMedia: [
      {
        icon: faGithub,
        link: "https://github.com/PelletierConstructionGroup/PelletierConstructionGroup.github.io",
      },
      {
        icon: faLink,
        link: "https://pelletierconstructiongroup.github.io/",
      },
    ],
  },

  {
    title: "Belinda's Closet",
    company: "North Seattle College",
    status: "In Development",
    screenshot: page3,
    description:
      "A student-built web application that allows students to browse available graduation clothing before visiting the campus clothing closet.",
    socialMedia: [
      {
        icon: faGithub,
        link: "https://github.com/SeattleColleges/belindas-closet-nextjs",
      },
    ],
  },

  {
    title: "North Seattle College Events",
    company: "North Seattle College",
    status: "In Development",
    screenshot: page4,
    description:
      "An event management platform allowing students to browse upcoming campus events while administrators create and manage announcements.",
    socialMedia: [
      {
        icon: faGithub,
        link: "https://github.com/SeattleColleges/nsc-events-nextjs",
      },
    ],
  },

  {
    title: "Shift App",
    company: "North Seattle College",
    status: "In Development",
    screenshot: shiftAppScreenshot,
    description:
      "A scheduling platform developed for interns and staff that streamlines work shift management, check-ins, and administration using React Native and Firebase.",
    socialMedia: [
      {
        icon: faGithub,
        link: "https://github.com/SeattleColleges/shift-app-expo",
      },
      {
        icon: faLink,
        link: "https://expo.dev/",
      },
    ],
  },

  {
    title: "GeekGirlCon Mobile App",
    company: "North Seattle College",
    status: "In Progress",
    screenshot: geekGirlConScreenshot,
    description:
      "A mobile application built with React Native Expo and SQLite to improve the attendee experience during GeekGirlCon events.",
    socialMedia: [
      {
        icon: faGithub,
        link: "https://github.com/GeekGirlCon",
      },
      {
        icon: faLink,
        link: "https://geekgirlcon.com/",
      },
    ],
  },

  {
    title: "Licton Springs Review",
    company: "North Seattle College",
    status: "In Progress",
    screenshot: lictonSpringsScreenshot,
    description:
      "A modern digital journal rebuilt with Next.js and Tailwind CSS to showcase literary and visual artwork for the Licton Springs Review.",
    socialMedia: [
      {
        icon: faGithub,
        link: "https://github.com/SeattleColleges/licton-springs-review-nextjs",
      },
      {
        icon: faLink,
        link: "https://lictonspringsreview.com/",
      },
    ],
  },
];
const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${BASE_URL}/#${metadata.pageUrl}`} />

        {/* Open Graph */}
        <meta property="og:type" content={metadata.type} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${BASE_URL}/og-logo.png`} />
        <meta property="og:image:alt" content="Next Wave Dev Portfolio" />
        <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:site_name" content="Next Wave Dev" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta
          name="twitter:description"
          content={metadata.description}
        />
        <meta
          name="twitter:image"
          content={`${BASE_URL}/og-logo.png`}
        />

        <meta
          name="keywords"
          content="portfolio, projects, development, web apps, software engineering"
        />
        <meta name="author" content="Next Wave Dev" />
      </Helmet>

      <Navbar />

      <div
        style={{
          backgroundColor: "#bbd7fa",
          minHeight: "100vh",
          padding: "120px 20px 60px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            backgroundColor: "#cfe3ff",
            borderRadius: "24px",
            padding: "50px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Our Portfolio
          </h1>

          <p
            style={{
              fontSize: "1.35rem",
              textAlign: "center",
              color: "#555",
              maxWidth: "900px",
              margin: "0 auto 50px auto",
              lineHeight: 1.7,
            }}
          >
            Since 2025, Next Wave Dev students have collaborated with
            businesses and organizations to build professional software,
            websites, and mobile applications. Explore some of the projects
            our graduates have helped bring to life.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "32px",
            }}
          >
            {projects.map((project, index) => (
              <PortfolioCard
                key={index}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

function PortfolioCard({ project }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "22px",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        transition: "all .25s ease",
        height: "100%",
      }}
    >
      <img
        src={project.screenshot}
        alt={project.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "1.65rem",
            fontWeight: 700,
          }}
        >
          {project.title}
        </h2>

        <div
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <span
            style={{
              backgroundColor: "#e9f3ff",
              color: "#2563eb",
              padding: "6px 14px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: ".9rem",
            }}
          >
            {project.company}
          </span>

          <span
            style={{
              backgroundColor: "#d8f5dc",
              color: "#2d7a34",
              padding: "6px 14px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: ".9rem",
            }}
          >
            {project.status}
          </span>
        </div>

        <p
          style={{
            color: "#555",
            lineHeight: 1.7,
            fontSize: "1rem",
            flexGrow: 1,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "25px",
          }}
        >
          {project.socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1f2937",
                textDecoration: "none",
                fontSize: "1.8rem",
              }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
const styles = {
  page: {
    backgroundColor: "#bbd7fa",
  },

  container: {
    backgroundColor: "#cfe3ff",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    transition: "transform .25s ease, box-shadow .25s ease",
  },

  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
  },
};

export default PortfolioPage;