import React from "react"
import HauseOfBrands from "./projects/HauseOfBrands"
import COVID19 from "./projects/COVID19"
const Index = () => {
  return (
    <div>
      <div className="projects_container" id="projects">
        <h1 className="header_title">Portfolio</h1>
        <div className="projects_container_child">
          <HauseOfBrands />
          <div style={{ width: "20px", height: "40px" }}></div>
          <COVID19 />
        </div>
      </div>
    </div>
  )
}

export default Index
