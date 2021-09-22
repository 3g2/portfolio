import React from "react"
import resume_PDF from "../assets/files/Maher_Halabi_Resume.pdf"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import Technologies from "./Technologies"

const Introduction = () => {
  //2DO: Navigate to connect section as user clicks on contact link
  return (
    <div className="introduction_container" id="introduction">
      <div>
        <h1 className="header_introduction_title">Hello, I'm Maher Halabi</h1>
      </div>
      <div>
        <p className="introduction_text">
          I am a professional software developer, with a passion for developing
          applications and solutions, that will help your business accelerate
          its growth and surpass the competition.
        </p>
      </div>

      <div className="introduction_button_container">
        <a
          href={resume_PDF}
          download="Maher_Halabi_Resume"
          rel="noreferrer"
          target="_blank"
        >
          <div className="introduction_button_span_container">
            <p className="introduction_button_span button_style_one">Resume</p>
          </div>
        </a>

        <div className="introduction_icon_child">
          <a
            href="https://www.linkedin.com/in/maherhalabi/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div className="introduction_icon_child">
          <a href="https://github.com/3g2" rel="noreferrer" target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <Technologies />
    </div>
  )
}

export default Introduction
