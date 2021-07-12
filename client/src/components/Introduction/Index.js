import React from "react"
import { Link } from "gatsby"

const Introduction = () => {
  //2DO: Navigate to connect section as user clicks on contact link
  return (
    <div>
      <h1 class="header">Introduction</h1>
      <div>
        <p class="span">
          I am an aspiring full-stack developer and a current computer science
          student with a passion for developing and constructing applications
          that will someday be made, used, and/or solve problems.
        </p>
      </div>
      <div>
        <button class="button_style_one">
          <Link>Let's Connect</Link>
        </button>
      </div>
    </div>
  )
}

export default Introduction
