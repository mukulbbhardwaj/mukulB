import React from "react";
import logo from "../asset/mb-logo.png";
import monkepod from "../asset/figma.png";
// import ramsetu from "../asset/figma.png";
import muno from "../asset/muno.gif";
import tictactoe from "../asset/tictactoe.gif"


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
          <div className="fe">
            <h1 className="sub-heading">Frontend</h1>
            <div className="fe-item">
              <div className="tech-icon">HTML</div>
              <div className="tech-icon">CSS</div>
              <div className="tech-icon">JavaScript</div>
              <div className="tech-icon">ReactJS</div>
            </div>
          </div>
          <div className="be">
            <h1 className="sub-heading">Backend</h1>
            <div className="tech-icon">NodeJs</div>
          </div>
          <div className="tools">
            <h1 className="sub-heading">Tools</h1>
            <div className="tools-item"> <div className="tech-icon">Figma</div>
            <div className="tech-icon">Git</div></div>
          </div>
        </div>
      </div>

      <div id="projects" className="projects">
        <h1 className="heading">Projects</h1>
        <div className="project-container">
          <div className="project-item">
            <div className="project-icon">
              <img src={monkepod} alt="" />
            </div>
            <div className="project-info">
              <div className="title sub-heading">MonkePod</div>
              <div className="details">
                <p>A custom music player build in ReactJs.</p>
                <div className="link-container">
                  <a href="" target="_blank">
                    Live
                  </a>
                  <a
                    href="https://github.com/mukulbbhardwaj/MonkePod"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-icon">
              <img src={muno} alt="" />
            </div>
            <div className="project-info">
              <div className="title sub-heading">MUNO</div>
              <div className="details">
                <p>Card game</p>
                <div className="link-container">
                  <a href="" target="_blank">
                    Live
                  </a>
                  <a
                    href="https://github.com/mukulbbhardwaj/MUNO"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-item">
            <div className="project-icon">
              <img src={tictactoe} alt="" />
            </div>
            <div className="project-info">
              <div className="title sub-heading">TicTacToe</div>
              <div className="details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, quasi!
                </p>
                <div className="link-container">
                  <a href="" target="_blank">
                    Live
                  </a>
                  <a
                    href="https://github.com/mukulbbhardwaj/Tic-Tac-Toe"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
