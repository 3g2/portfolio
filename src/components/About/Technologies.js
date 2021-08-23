import React from "react"
import {
  SiJavascript,
  SiDocker,
  SiReact,
  SiCss3,
  SiSass,
  SiNodeDotJs,
  SiMongodb,
  SiHtml5,
  SiAmazonaws,
  SiMaterialUi,
  SiBootstrap,
  SiYarn,
  SiGithub,
} from "react-icons/si"

const Technologies = () => {
  return (
    <div className="tech_icons_list">
      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiDocker size={65} />
        </div>
        <div className="span">
          <p>Docker</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiReact size={65} />
        </div>
        <div className="span">
          <p>React</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiCss3 size={65} />
        </div>
        <div className="span">
          <p>CSS3</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiSass size={65} />
        </div>
        <div className="span">
          <p>Sass</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiNodeDotJs size={65} />
        </div>
        <div className="span">
          <p>NodeJS</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiMongodb size={65} />
        </div>
        <div className="span">
          <p>Mongo DB</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiHtml5 size={65} />
        </div>
        <div className="span">
          <p>HTML5</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiAmazonaws size={65} />
        </div>
        <div className="span">
          <p>AWS</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiMaterialUi size={65} />
        </div>
        <div className="span">
          <p>Material UI</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiBootstrap size={65} />
        </div>
        <div className="span">
          <p>Bootstrap</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiYarn size={65} />
        </div>
        <div className="span">
          <p>Yarn</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiGithub size={65} />
        </div>
        <div className="span">
          <p>Github</p>
        </div>
      </div>

      <div className="tech_icons_section">
        <div className="tech_icons">
          <SiJavascript size={65} />
        </div>
        <div className="span">
          <p>Javascript</p>
        </div>
      </div>
    </div>
  )
}

export default Technologies
