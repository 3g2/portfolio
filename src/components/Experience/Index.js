import React from "react"
import HauseOfBrands from "./projects/HauseOfBrands"
import Technologies from "./Technologies"
const Index = () => {
  return (
    <div className="projects_container" id="projects">
      <h1 className="header_title">Projects</h1>
      <HauseOfBrands />
      <Technologies />
    </div>
  )
}

export default Index
