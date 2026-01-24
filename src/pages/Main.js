import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import belindas from "../images/GeekGirlCon Mobile App.png";
import pelletier from "../images/Licton Springs Review.png";
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
              alt="example portable web app"
              src={belindas}
            />
            <p className="portfolio-div__examples_description">
            GeekGirlCon Mobile App
            </p>
          </div>
          <div className="portfolio-div__examples_entry">
            <img
              className="portfolio-div__examples__photo"
              alt="example desktop web app"
              src={pelletier}
            />
            <p className="portfolio-div__examples_description">
            Licton Springs Review
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
          "This was the best investment I could have made due to the confidence
          and experience gained through the program." - Nick Ramirez
        </p>
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
