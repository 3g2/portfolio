import React from "react"
import "../styles/index.scss"

import Introduction from "../components/Introduction/Introduction.js"
import About from "../components/About/Index.js"
import Experience from "../components/Experience/Index.js"
import Contact from "../components/Contact/Index.js"
import Metadata from "../components/Helmet/Helmet.js"
import Footer from "../components/Footer/Footer.js"
export default function Index() {
  return (
    <div className="root">
      <Metadata />
      <Introduction />
      <About />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}
