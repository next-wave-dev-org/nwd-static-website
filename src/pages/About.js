import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import NSC_Marquee from "../images/about/NSC_Marquee.jpg";

function About() {
  return (
    <>
      <Helmet>
        <title> Next Wave Dev - About </title>
      </Helmet>
      <Navbar />

      <div
        style={{
          marginTop: "10vh",
          marginBottom: "10vh",
          height: "100%",
        }}
      >
        <div
          style={{
            ...flexParent,
            height: "auto",
          }}
        >
          <div
            style={{
              ...flexChild,
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
              width: "30%",
            }}
          >
            <div
              style={{
                width: "90%",
                fontSize: "68px",
                fontWeight: 600,
              }}
            >
              Next Wave Dev
            </div>
          </div>
          <div
            style={{
              ...flexChild,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <div
              style={{
                ...flexChild,
                fontSize: "1.5rem",
                width: "80%",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <strong>About Us:</strong>
                <br></br>
                <br></br>
                Bridging the gap between classroom learning and career success, we equip students and recent graduates with the skills, mentorship, and real-world experience needed to deliver high-quality tech solutions.
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <img
        src={NSC_Marquee}
        alt="North Seattle College"
        style={{
          width: "100%",
          display: "block",
        }}
      />
      <Footer />
    </>
  );
}

const flexChild = {
  position: "relative",
  minHeight: "1px",
  paddingRight: "15px",
  paddingLeft: "15px",
};

const flexParent = {
  display: "flex",
  flexWrap: "wrap",
};

export default About;
