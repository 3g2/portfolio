import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Introduction = () => {
  //2DO: Navigate to connect section as user clicks on contact link
  return (
    <div className="introduction_container" id="introduction">
      <h1 className="header_introduction_title">Hello, I'm Maher Halabi</h1>
      <div>
        <p className="introduction_text">
          I am an aspiring software developer and a current computer science
          student with a passion for developing applications that will someday
          be made, used, and/or solve problems.
        </p>
      </div>
      <div>
        <AnchorLink className="button_style_one" to="/#projects">
          My Projects
        </AnchorLink>
      </div>
    </div>
  )
}

export default Introduction
