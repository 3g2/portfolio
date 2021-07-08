import React from "react"
import "./Header.scss"
const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">Maher Halabi</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
