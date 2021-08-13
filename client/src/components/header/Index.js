import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import logo from "../../images/logo_2.png"

const Header = () => {
  return (
    <div>
      <header id="header">
        <div class="header_link_logo">
          <AnchorLink to="/#introduction">
            <img src={logo} class="header_link_logo_style" />
          </AnchorLink>
        </div>
        <nav>
          <ul>
            <li class="header_link">
              <AnchorLink to="/#about">About</AnchorLink>
            </li>
            <li class="header_link">
              <AnchorLink to="/#projects">Projects</AnchorLink>
            </li>
            <li class="header_link">
              <AnchorLink to="/#contact">Contact</AnchorLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
