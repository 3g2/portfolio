import React from "react"
import { Link } from "gatsby"
import "./404.css"

const Index = () => {
  return (
    <div id="container">
      <div id="container_item">
        <h1>Page not found</h1>
        <h3>
          Return to <Link to="/">Home</Link>
        </h3>
      </div>
    </div>
  )
}

export default Index
