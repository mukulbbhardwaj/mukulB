import React, { useRef } from "react";
import github from "../asset/github.png";
import linkedin from "../asset/linkedin.png";
import twitter from "../asset/twitter.png";
import gmail from "../asset/mail.png";







function Footer() {
  //function for dark-light mode icon


  return (
    <div>
      <hr className="linebreak" />
      <div className="mainFooter">
        <div className="socialLinks">
          <a
            class="link"
            href="https://twitter.com/mukulbbhardwaj"
            target="_blank"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            class="link"
            href="https://github.com/mukulbbhardwaj"
            target="_blank"
          >
            <img src={github} alt="" />
          </a>
          <a
            class="link"
            href="https://www.linkedin.com/in/mukulbbhardwaj/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            class="link"
            href="mailto:mukulbhardwaj73@gmail.com"
            target="_blank"
          >
            <img src={gmail} alt="" />
          </a>
        </div>
        <div className="credits">
          © 2022 Mukul Bhardwaj, All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
