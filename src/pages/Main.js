import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import nwdScreenshot from "../images/next-wave-dev.png";
import DeveloperThumbnail from "../components/DeveloperThumbnail";
import developerData from "../developers.json";
import { Helmet } from "react-helmet";
import { FormComponent } from "../components/microComponents/contact/form";
import Footer from "../components/Footer";
import Section from '../components/Section'
import TestimonialsSection from "../components/TestimonialsSection";
import { pageMetadata, BASE_URL } from "../utils/metadataConfig";


const developerDatafiltered = developerData.developers.filter(
  (item) => item.photo !== "anon-profile-image.png"
);
const developerDataSlice = developerDatafiltered.slice(0, 16);

function Main() {
  console.log(developerDatafiltered.length);
  const metadata = pageMetadata.home;
  
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
        <meta property="og:image:alt" content="Next Wave Dev Logo" />
        <meta property="og:url" content={`${BASE_URL}/#${metadata.pageUrl}`} />
        <meta property="og:site_name" content="Next Wave Dev" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-logo.png`} />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="tech career, graduate program, development, mentorship, real-world experience" />
        <meta name="author" content="Next Wave Dev" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <div className="homepage-content">
        <div className="hero__wrapper">
          <div className="hero">
            <div className="hero__text">
              <h1 className="hero__text__heading">Next Wave Dev</h1>
              <p className="hero__text__subheading">
                Bridging the gap between classroom learning and career success,
                we equip students and recent graduates with the skills,
                mentorship, and real-world experience needed to deliver
                high-quality tech solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-div">
        <div className="portfolio-div__flexcol">
          <p className="portfolio-div__flexcol__heading">
            A Program Providing Real Development Experience
          </p>
          <Link to={"/Portfolio"} className="portfolio-div__flexcol__link">
            View our Full Portfolio
          </Link>
        </div>
        <div className="portfolio-div__examples">
          <div className="portfolio-div__examples_entry">
            <img
              className="portfolio-div__examples__photo"
              alt="Next Wave Dev website"
              src={nwdScreenshot}
            />
            <p className="portfolio-div__examples_description">
              Next Wave Dev
            </p>
          </div>
        </div>
      </div>
      <div className="developer-prev">
        <div className="developer-prev__gallery">
          <div className="developer-prev__gallery__grid">
            {developerDataSlice.map((developer, index) => (
              <DeveloperThumbnail
                fileName={developer.photo}
                developerName={developer.name}
              />
            ))}
          </div>
          <Link className="developer-prev__gallery__link" to={"/Developers"}>
            Get to know our developers
          </Link>
        </div>
        <p className="developer-prev__quote">
          “Growth and comfort do not coexist.” <br />
          <span>— Ginni Rometty</span>
          </p>
      </div>
      <div className="donation-div">
        <div className="donation-div__flexcol">
          <p className="donation-div__flexcol__heading">
            Support the Next Wave of Developers
          </p>
          <p className="donation-div__flexcol__paragraph">
            Your contribution helps us provide essential resources, mentorship, and real-world project opportunities to aspiring student developers, empowering them to launch successful careers in tech.
          </p>
          <Link to={"/Donation"}>
            <button className="donation-div__button" type="button">
              Donate Now
            </button>
          </Link>
        </div> 
      </div>
    <Section>  
      <div className="graduates-companies-section">
        <h2 className="graduates-companies-section__title">Graduates & Companies</h2>
        <div className="graduates-companies-section__tiles">
          <Link to="/graduates" className="graduates-companies-section__tile">
            <div className="graduates-companies-section__tile-content">
              <h3 className="graduates-companies-section__tile-heading">Graduates</h3>
              <p className="graduates-companies-section__tile-description">
                Explore success stories and career journeys of our program graduates
              </p>
            </div>
          </Link>
          <Link to="/companies" className="graduates-companies-section__tile">
            <div className="graduates-companies-section__tile-content">
              <h3 className="graduates-companies-section__tile-heading">Companies</h3>
              <p className="graduates-companies-section__tile-description">
                Discover how companies partner with us to build exceptional talent
              </p>
            </div>
          </Link>
        </div>
      </div>

      </Section>

      <TestimonialsSection />
      <div className="contact-div">
        <div className="contact-div__contact-wrapper">
          <FormComponent />
        </div>
        <iframe
          src="https://maps.google.com/maps?q=12356+NORTHUP+WAY+STE+E,+BELLEVUE,+WA,+98005-5176,+UNITED+STATES&t=&z=13&ie=UTF8&iwloc=&output=embed"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id={"contact-page-map"}
          title="mainpagemap"
          className="contact-div__iframe"
        />
      </div>
      <Footer />
    </>
  );
}

export default Main;