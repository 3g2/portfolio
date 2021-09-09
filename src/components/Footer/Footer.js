import React from "react"
import { BiGitBranch } from "react-icons/bi"

const Footer = () => {
  return (
    <div className="footer_container">
      <a
        className="footer_link"
        href="https://github.com/3g2/portfolio"
        rel="noreferrer"
        target="_blank"
      >
        <div className="footer_body">
          <div className="footer_item">
            <span>Designed by Maher Halabi</span>
          </div>
          <div className="footer_item">
            <BiGitBranch />
          </div>
        </div>
      </a>
    </div>
  )
}

export default Footer
