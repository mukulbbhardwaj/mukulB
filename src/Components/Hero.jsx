import React from "react";
import logo from "../asset/mb-logo.png";
import monkepod from "../asset/figma.png";
// import ramsetu from "../asset/figma.png";
import muno from "../asset/muno.gif";
import tictactoe from "../asset/tictactoe.gif";
import weather from "../asset/weather.png"

function Hero() {
  return (
    <div>
      <div className="pfp">
        <picture>
          <img class="pfp-photo" src={logo} alt="" />
        </picture>
      </div>
      <div className="intro">
        <p>
          Hello, I'm <strong className="strong-font">Mukul Bhardwaj</strong>, a
          <strong className="strong-font"> self taught developer </strong>
          who build products from scratch, design UI, engage with the community
          and create content from
          <strong className="strong-font"> India </strong>. Always up for
          working on new ideas, learning new skills, technologies tools.
        </p>
      </div>
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
              <a className="live" href="https://weather-app-monke.netlify.app/" target="_blank">
                Live
              </a>
              <a className="code"
                href="https://github.com/mukulbbhardwaj/Weather--React"
                target="_blank"
              >
                Code
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
