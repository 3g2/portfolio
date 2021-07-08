import React from "react"
import "../styles/index.scss"
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Contact from "../components/Contact/Contact"
import Home from "../components/Home/Home.js"

export default function Index() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}
