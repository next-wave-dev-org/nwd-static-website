// src/pages/StudentsPage.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import Developer from "../components/Developer";
import data from "../students.json";
import { Helmet } from "react-helmet";

// const students = [
//   {
//     name: "Alice Johnson",
//     photo: "anon-profile-image.png",
//     about: "Alice is a computer science major with a passion for AI.",
//     email: "alice@example.com",
//     github: "https://github.com/alice",
//     linkedin: "https://linkedin.com/in/alice",
//   },
//   {
//     name: "Bob Smith",
//     photo: "Bennett-Fife.png",
//     about: "Bob is a software engineer who loves open source projects.",
//     email: "bob@example.com",
//     github: "https://github.com/bob",
//     linkedin: "https://linkedin.com/in/bob",
//   },
// ];

const students = data.students;

const DevelopersPage = () => {
  return (
    <div>
      <Helmet>
        <title> Next Wave Dev - Developers </title>
      </Helmet>
      <Navbar />
      <div className="students-flexcolumn">
        <h1 className="students-flexcolumn__h1">Our Developers</h1>
        {students.map((student, index) => (
          <Developer key={index} {...student} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    padding: "32px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "24px",
    textAlign: "center",
  },
};

export default DevelopersPage;
