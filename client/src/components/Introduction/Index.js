import React from "react"
import { Link } from "gatsby"

const Introduction = () => {
  return (
    <div>
      <h1>Introduction</h1>
      <div>
        <p>
          I am an aspiring full-stack developer and a current computer science
          student with a passion for developing and constructing applications
          that will someday be made, used, and/or solve problems.
        </p>
      </div>
      <div>
        <button>
          <Link to="/experience">Work</Link>
        </button>
      </div>
    </div>
  )
}

export default Introduction
