import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import nwdScreenshot from "../images/next-wave-dev.png";
import DeveloperThumbnail from "../components/DeveloperThumbnail";
import studentData from "../students.json";
import { Helmet } from "react-helmet";
import { FormComponent } from "../components/microComponents/contact/form";
import Footer from "../components/Footer";

const studentDatafiltered = studentData.students.filter(
  (item) => item.photo !== "anon-profile-image.png"
);
const studentDataSlice = studentDatafiltered.slice(0, 16);

function Main() {
  console.log(studentDatafiltered.length);
  return (
    <>  
      <Helmet>
        <title> Next Wave Dev </title>
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
      <div className="student-prev">
        <div className="student-prev__gallery">
          <div className="student-prev__gallery__grid">
            {studentDataSlice.map((student, index) => (
              <DeveloperThumbnail
                fileName={student.photo}
                studentName={student.name}
              />
            ))}
          </div>
          <Link className="student-prev__gallery__link" to={"/Developers"}>
            Get to know our developers
          </Link>
        </div>
        <p className="student-prev__quote">
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
            Your contribution helps us provide essential resources, mentorship, and real-world project opportunities to aspiring sutdent developers, empowering them to launch successful careers in tech.
          </p>
          <Link to={"/Donation"}>
            <button className="donation-div__button" type="button">
              Donate Now
            </button>
          </Link>
        </div> 
      </div>  
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