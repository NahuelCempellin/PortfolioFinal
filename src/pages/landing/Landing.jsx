import React from "react";
import Carrousel from "../../components/carousel/Carrousel";
import { BsArrowRight } from "react-icons/bs";
import "../../App.css";
import Tech from "../../components/tecnologies/Tech";
import Footer from "../../components/footer/Footer";
import Projects from "../../components/projects/Projects";
import Studies from "../../components/studies/Studies";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="titleContainer">
        <div className="title">Hi, I'm Nahuel Cempellin!</div>
        <Carrousel />
        <p className="text">
          Full Stack developer and React.js Tutor at Coderhouse, with a degree
          from the Soy Henry bootcamp and a year of experience as a frontend
          developer.
        </p>
        <div className="button-container">
          <a href="#studies" className="more">
            See more <BsArrowRight className="arrow-one" />
          </a>
          <a className="second" href="#Footer">
            Contact me <BsArrowRight className="arrow-two" />
          </a>
        </div>
      </div>

      <div className="tech">
        <Tech />
      </div>

      <div className="projects" id="studies">
        <Studies />
      </div>

      <div className="projects" id="project">
        <Projects />
      </div>

      <div className="tech">
        <Tech />
      </div>

      <div className="footer-container" id="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
