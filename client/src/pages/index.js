import React from "react"
import "../styles/index.scss"
import Header from "../components/Header/Header.js"
import About from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Contact from "../components/Contact/Contact"

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}
