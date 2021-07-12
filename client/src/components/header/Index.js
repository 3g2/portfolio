import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <header id="header">
        <div class="header_link_logo">
          <Link>Maher Halabi</Link>
        </div>
        <nav>
          <ul>
            <li class="header_link">
              <Link>Home</Link>
            </li>
            <li class="header_link">
              <Link>About</Link>
            </li>
            <li class="header_link">
              <Link>Experience</Link>
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
