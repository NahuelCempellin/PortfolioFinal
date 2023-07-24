import React from "react";
import "./Projects.css";
import { BiCodeAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import ProjectsCarrousel from "./ProjectsCarrousel";
import { Link } from "react-router-dom";
import kmk from "../../assets/kmkland.jpeg";
import galu from "../../assets/dashl.jpeg";
import dashboard from "../../assets/dashboard.jpeg";
import Carousel from "../carousel/Carrusel2/Carrusel2";
import Carousel2 from "../carousel/Carrusel2/Carrusel3";

const Projects = () => {
  const arrImages = [kmk, galu, dashboard];

  return (
    <div className="projects-container">
      <div className="title-container">
        <div className="title-project-box">
          <BiCodeAlt className="code-icon" />
          <a>Profesional & personal projects.</a>
        </div>

        <h2>"Love what you do, do what you love."</h2>

        <p>
          This section showcases my personal projects, which I have undertaken
          both as part of my studies and in collaboration with other
          professionals.
        </p>

        <Link to={"/projects"} className="second" id="button-renegade">
          See more
          <BsArrowRight className="arrow-two" />
        </Link>
      </div>

      <div className="project-box">
        <Carousel2 images={arrImages} />
        {/* <ProjectsCarrousel images={arrImages} /> */}
      </div>
    </div>
  );
};

export default Projects;
