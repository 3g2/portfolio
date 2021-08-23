import React from "react"
import { Link } from "gatsby"
import resume_PDF from "../assets/files/resume_test.pdf"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"

const Introduction = () => {
  //2DO: Navigate to connect section as user clicks on contact link
  return (
    <div className="introduction_container" id="introduction">
      <div>
        <h1 className="header_introduction_title">Hello, I'm Maher Halabi</h1>
      </div>
      <div>
        <p className="introduction_text">
          I am an aspiring software developer and a current computer science
          student with a passion for developing applications that will someday
          be made, used, and/or solve problems.
        </p>
      </div>

      <div className="introduction_button_container">
        <a
          href={resume_PDF}
          download="Example_DOC"
          rel="noreferrer"
          target="_blank"
        >
          <div className="">
            <p className="introduction_button_span button_style_one">Resume</p>
          </div>
        </a>

        <div className="introduction_icon_child">
          <Link
            to="https://www.linkedin.com/in/maherhalabi/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
        </div>
        <div className="introduction_icon_child">
          <Link to="https://github.com/mohur" rel="noreferrer" target="_blank">
            <AiFillGithub />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Introduction
