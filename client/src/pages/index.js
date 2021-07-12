import React from "react"
import "../styles/index.scss"

import Introduction from "../components/Introduction/Index.js"
import About from "../components/About/Index.js"
import Experience from "../components/Experience/Index.js"
import Contact from "../components/Contact/Index.js"

export default function Index() {
  return (
    <div>
      <Introduction />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}
