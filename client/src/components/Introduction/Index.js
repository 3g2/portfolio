import React from "react"
import { Link } from "gatsby"

const Introduction = () => {
  //2DO: Navigate to connect section as user clicks on contact link
  return (
    <div className="introduction_container">
      <h1 className="header_introduction_title">Hello, I'm Maher Halabi</h1>
      <div>
        <p class="introduction_text">
          I am an aspiring software developer and a current computer science
          student with a passion for developing applications that will someday
          be made, used, and/or solve problems.
        </p>
      </div>
      <div>
        <button class="button_style_one">
          <Link>My Projects</Link>
        </button>
      </div>
    </div>
  )
}

export default Introduction
