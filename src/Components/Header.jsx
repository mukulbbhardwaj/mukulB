import React, { useEffect, useState, Component } from "react";
import sunny from "../asset/sun.png";
import rain from "../asset/rain.png";
import night from "../asset/night.png";
import winds from "../asset/wind.png";
// import rain_bg from "../asset/Rain-bg.mp4";
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";




function Header() {
  const [theme, setTheme] = useState("night-theme");

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
      <div className="button-array">
        <button id="sunny" onClick={() => toggleSunny()}>
          <img src={sunny} alt="" />
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
