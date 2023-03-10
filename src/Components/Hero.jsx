import React from "react";
import logo from "../asset/mb-logo.png";

import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";

function Hero() {
  return (
    <div className="superHero">
      <section className="section">
        <Header />
        <div className="pfp">
          <picture>
            <img class="pfp-photo" src={logo} alt="" />
          </picture>
        </div>
        <div className="intro">
          <p>
            Hello, I'm <strong className="strong-font">Mukul Bhardwaj</strong>,
            a<strong className="strong-font"> self taught developer </strong>
            who build products from scratch, design UI, engage with the
            community and create content from
            <strong className="strong-font"> India </strong>. Always up for
            working on new ideas, learning new skills, technologies tools.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="tech-container">
          <h1 className="heading">Technologies</h1>
          <div className="tech-info">
            <div className="fe tech-container-item">
              <h1 className="sub-heading">Frontend</h1>
              <div className="fe-item">
                <div className="tech-icon">HTML</div>
                <div className="tech-icon">CSS</div>
                <div className="tech-icon">JavaScript</div>
                <div className="tech-icon">ReactJS</div>
              </div>
            </div>
            <div className="be tech-container-item">
              <h1 className="sub-heading">Backend</h1>
              <div className="tech-icon">NodeJs</div>
            </div>
            <div className="tools tech-container-item">
              <h1 className="sub-heading">Tools</h1>
              <div className="tools-item">
                {" "}
                <div className="tech-icon">Figma</div>
                <div className="tech-icon">Git</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div id="projects" className="projects">
          <h1 className="heading">Projects</h1>
          <div className="project-container">
            <div className="project-item p1">
              <div className="project-icon">
                <img src={weather} alt="" />
              </div>
              <div className="project-info">
                <div className="details">
                  <div className="title sub-heading-small">Weather</div>
                  <p className="description">
                    A general purpose weather app with basic information with
                    search option.
                  </p>
                </div>
              </div>
              <div className="link-container">
                <a
                  className="live btn"
                  href="https://weather-app-monke.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
                <a
                  className="code btn"
                  href="https://github.com/mukulbbhardwaj/Weather--React"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="project-item p2">
              <div className="project-icon">
                <img src={monkepod} alt="" />
              </div>
              <div className="project-info">
                <div className="details">
                  <div className="title sub-heading-small">MonkePod</div>
                  <p className="description">
                    A music player UI inspired from apple iPod.
                  </p>
                </div>
              </div>
              <div className="link-container">
                <a
                  className="live btn"
                  href="https://monke-pod.vercel.app/"
                  target="_blank"
                >
                  Live
                </a>
                <a
                  className="code btn"
                  href="https://github.com/mukulbbhardwaj/MonkePod"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="project-item p3">
              <div className="project-icon">
                <img src={ramsetu} alt="" />
              </div>
              <div className="project-info">
                <div className="details">
                  <div className="title sub-heading-small">Ram Setu</div>
                  <p className="description">
                    "Ramayan" themed arcade game created with vanilla HTML, CSS
                    and JS.
                  </p>
                </div>
              </div>
              <div className="link-container">
                <a
                  className="live btn"
                  href="https://vanar-sena.github.io/Ram-Setu/"
                  target="_blank"
                >
                  Live
                </a>
                <a
                  className="code btn"
                  href="https://github.com/mukulbbhardwaj/Ram-Setu"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Projects/>
      <Footer />
    </div>
  );
}

export default Hero;
