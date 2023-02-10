import React from "react";
import monkepod from "../asset/monke-pod.png";
import ramsetu from "../asset/ram-setu.png";
import tictactoe from "../asset/tic-tac-toe.png";
import weather from "../asset/weather.png";
function Projects() {
  return (
    <div>
      <section className="section">
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
                  <div className="tags-container">
                    <p className="tags">ReactJs</p>
                    <p className="tags">API</p>
                    {/* <p className="tags">XCode</p> */}
                  </div>
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
                  <div className="tags-container">
                    <p className="tags">ReactJs</p>
                    {/* <p className="tags"></p> */}
                    {/* <p className="tags">XCode</p> */}
                  </div>
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
                  <div className="tags-container">
                    <p className="tags">JavaScript</p>
                    {/* <p className="tags">iOS</p>
                    <p className="tags">XCode</p> */}
                  </div>
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
            <div className="project-item p4">
              <div className="project-icon">
                <img src={tictactoe} alt="" />
              </div>
              <div className="project-info">
                <div className="details">
                  <div className="title sub-heading-small">TicTacToe</div>
                  <p className="description">
                    General tic-tac-toe game made for iOS devices.
                  </p>
                  <div className="tags-container">
                    <p className="tags">SwiftUI</p>
                    <p className="tags">iOS</p>
                    <p className="tags">XCode</p>
                  </div>
                </div>
              </div>
              <div className="link-container">
                {/* <a
                  className="live btn"
                  href="https://vanar-sena.github.io/Ram-Setu/"
                  target="_blank"
                >
                  Live
                </a> */}
                <a
                  className="code btn"
                  href="https://github.com/mukulbbhardwaj/Tic-Tac-Toe"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
