import React from "react";
import Profile from "../components/Profile";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Writing from "../components/Writing";
import Footer from "../components/Footer";
import SpinnerImage from "../components/SpinnerImage";

const Home = () => {
  return (
    <>
      <div className="content_wrapper">
        <Profile />
        <main>
          <About />
          <Experience />
          <Projects />
          <Writing />
          <Footer />
        </main>
      </div>
      <SpinnerImage />
    </>
  );
};

export default Home;
