import React from "react"
import MaherHalabi from "../assets/files/MaherHalabi.pdf"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub, AiOutlineMail } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import Technologies from "./Technologies"

const Introduction = () => {
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
      {/* <div>
          <a
            href={MaherHalabi}
            download="Maher+Halabi"
            rel="noreferrer"
            target="_blank"
          >
            <div className="introduction_button_span_container">
              <p className="introduction_button_span button_style_one">
                Resume
              </p>
            </div>
          </a>
        </div> */}
        <div className="introduction_button_group2">
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
            <a
              href="https://github.com/maherhalabi"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="introduction_icon_child">
            <a
              href="mailto:maherhalabibeik@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
      <Technologies />
    </div>
  )
}

export default Introduction
