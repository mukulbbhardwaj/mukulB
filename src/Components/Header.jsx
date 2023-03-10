import React, { useEffect, useRef, useState, Component } from "react";
import sunny from "../asset/sun.png";
import night from "../asset/night.png";
// import rain from "../asset/rain.png";
// import winds from "../asset/wind.png";
import github from "../asset/github.png";
import linkedin from "../asset/linkedin.png";
// import twitter from "../asset/twitter.png";
import gmail from "../asset/mail.png";
import leetcode from "../asset/leetcode.png";

function Header() {
  const resumeLink =
    "https://drive.google.com/file/d/1_GaM8fHMNrFqw0FhvxupZdtEuZ2a-Q_v/view?usp=share_link";
  const [theme, setTheme] = useState("sunny-theme");
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleSunny = () => {
    setTheme("sunny-theme");
  };
  const toggleNight = () => {
    setTheme("night-theme");
  };
  const toggleRainy = () => {
    setTheme("rainy-theme");
  };
  const toggleWindy = () => {
    setTheme("windy-theme");
  };
  // console.log(theme);

  return (
    <div>
      <div className="main">
        <div className="navbar">
          <div className="logo strong-font">
            <a href="" className=" logo strong-font">
              MukulB
            </a>
          </div>
          <div className="headerLinkContainer">
            <a
              href={resumeLink}
              target="_blank"
              className="nav-item "
            >
              Resume
            </a>
            <a href="#projects" className="nav-item">
              Projects
            </a>
            <a href="mailto:mukulbhardwaj73@gmail.com" className="nav-item">
              Connect
            </a>
          </div>
        </div>
      </div>
      <div className="link-array">
        <a href="https://github.com/mukulbbhardwaj" target="_blank">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/mukulbbhardwaj/" target="_blank">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://leetcode.com/mukulbbhardwaj/" target="_blank">
          <img src={leetcode} alt="" />
        </a>
        {/* <a href="https://twitter.com/mukulbbhardwaj" target="_blank">
          <img src={twitter} alt="" />
        </a> */}
        <a href="mailto:mukulbhardwaj73@gmail.com" target="_blank">
          <img src={gmail} alt="" />
        </a>
      </div>
      <div className="button-array">
        <button id="sunny tooltip" onClick={() => toggleSunny()}>
          <img src={sunny} alt="" />
          <div className="tooltip-text">Sunny</div>
        </button>
        <button id="night" onClick={() => toggleNight()}>
          <img src={night} alt="" />
        </button>
        {/* <button id="rain" onClick={() => toggleRainy()}>
          <img src={rain} alt="" />
        </button>
        <button id="winds" onClick={() => toggleWindy()}>
          <img src={winds} alt="" />
        </button> */}
      </div>
    </div>
  );
}

export default Header;
