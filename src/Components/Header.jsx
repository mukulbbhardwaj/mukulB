import React, { useEffect, useRef, useState, Component } from "react";
import sunny from "../asset/sun.png";
import night from "../asset/night.png";
// import rain from "../asset/rain.png";
// import winds from "../asset/wind.png";
import github from "../asset/github.png";
import linkedin from "../asset/linkedin.png";
import twitter from "../asset/twitter.png";
import gmail from "../asset/mail.png";
import leetcode from "../asset/leetcode.png";

function Header() {
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
              href="https://docs.google.com/document/d/e/2PACX-1vR3_GeXIodKbixzFt0ZiNzNnmWi2fO3h0q1QoO7CfMAzA0nM7qFbr7B2EfXysAMWcNxJdraEAE3dRwx/pub"
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
        <a href="https://github.com/mukulbbhardwaj">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/mukulbbhardwaj/">
          <img src={linkedin} alt="" />
        </a>
        <a href=""><img src={leetcode} alt="" /></a>
        <a href="https://twitter.com/mukulbbhardwaj">
          <img src={twitter} alt="" />
        </a>
        <a href="mailto:mukulbhardwaj73@gmail.com">
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
