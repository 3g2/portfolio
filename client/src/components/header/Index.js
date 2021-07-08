import React from "react"
import "./Header.scss"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">Maher Halabi</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
