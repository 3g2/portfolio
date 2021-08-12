import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo_2.png"

const Header = () => {
  return (
    <div>
      <header id="header">
        <div class="header_link_logo">
          <img src={logo} class="header_link_logo_style" />
        </div>
        <nav>
          <ul>
            <li class="header_link">
              <Link>About</Link>
            </li>
            <li class="header_link">
              <Link>Projects</Link>
            </li>
            <li class="header_link">
              <Link>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
