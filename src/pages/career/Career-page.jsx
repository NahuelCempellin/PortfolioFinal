import React from "react";
import "./career.css";
import { BsJournalBookmarkFill } from "react-icons/bs";
import CareerIcons from "../../components/careerfloat/CareerIcons";
import Footer from "../../components/footer/Footer";
import Diploma from "../../assets/fullstack.jpeg";
import Tech from "../../components/tecnologies/Tech";

const Career = () => {
  return (
    <div className="career-container">
      <div className="title-container-career">
        <div className="title-box">
          <div className="logo-container">
            <div>
              <BsJournalBookmarkFill className="logo-vsc" />
            </div>
            <div>
              <p className="icon-njs">Nahuel.js</p>
              <h2>Studies & career</h2>
              <p className="text-career">
                Here you can see my career and my travel that's start 1 year
                ago...
              </p>
            </div>
          </div>
        </div>

        <div className="shape-container">
          <CareerIcons />
        </div>
      </div>

      <div className="text-career-1">
        <div className="text-carrer-inner">
          <p>As i said,</p>
          <h2>Some steps, change your life...</h2>
          <p className="box-career-inner">
            In 2020, I found myself unemployed in Buenos Aires and was forced to
            return to my hometown of Mar del Plata due to the lack of financial
            resources to support my rent. Like many others, I was unsure of my
            next steps until an email landed in my inbox offering fullstack
            development studies at no initial cost. That was the beginning of my
            journey at the Soy Henry bootcamp where I encountered several
            challenges and made great friends among fellow students.
          </p>
        </div>

        <div className="box-title-career">
          <img src={Diploma} alt="diploma" />
        </div>
      </div>

      <div className="sub-title">What i learned? Well...</div>

      <div className="learn-container">
        <div className="boxes">
          Javascript
          <div className="text-cards">
            <p>
              During the first module, we were introduced to using JavaScript as
              a programming language. We completed exercises on logic and data
              structures, including linked lists and binary trees.
            </p>
          </div>
          {/* <p>Technologies:</p> */}
          <div className="technologies-cards-container">
            <p className="tech-cards">Javascript</p>
          </div>
        </div>

        <div className="boxes">
          Frontend
          <div className="text-cards">
            <p>
              In the second module, we began to familiarize ourselves with HTML
              and CSS and then delved into learning React as our primary
              framework.
            </p>

            <div className="technologies-cards-container">
              <p className="tech-cards">HTML</p>
              <p className="tech-cards">Css</p>
              <p className="tech-cards">React</p>
              <p className="tech-cards">Redux</p>
            </div>
          </div>
        </div>
        <div className="boxes">
          Backend
          <div className="text-cards">
            <p>
              The third and fourth modules focus on learning how to build a
              server in Express and connect it to a PostgreSQL database, using
              Sequelize as the ORM.
            </p>
          </div>
          <div className="technologies-cards-container">
            <p className="tech-cards">Node.js</p>
            <p className="tech-cards">Express</p>
            <p className="tech-cards">Postgre SQL</p>
            <p className="tech-cards">Sequelize</p>
          </div>
        </div>
      </div>

      <div className="technologies-career-container">
        <Tech />
      </div>
      <div className="footer-cont-career" id="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Career;
