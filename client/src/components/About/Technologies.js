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
    <div class="tech_icons_list">
      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiDocker size={65} />
        </div>
        <div class="span">
          <p>Docker</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiReact size={65} />
        </div>
        <div class="span">
          <p>React</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiCss3 size={65} />
        </div>
        <div class="span">
          <p>CSS3</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiSass size={65} />
        </div>
        <div class="span">
          <p>Sass</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiNodeDotJs size={65} />
        </div>
        <div class="span">
          <p>NodeJS</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiMongodb size={65} />
        </div>
        <div class="span">
          <p>Mongo DB</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiHtml5 size={65} />
        </div>
        <div class="span">
          <p>HTML5</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiAmazonaws size={65} />
        </div>
        <div class="span">
          <p>AWS</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiMaterialUi size={65} />
        </div>
        <div class="span">
          <p>Material UI</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiBootstrap size={65} />
        </div>
        <div class="span">
          <p>Bootstrap</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiYarn size={65} />
        </div>
        <div class="span">
          <p>Yarn</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiGithub size={65} />
        </div>
        <div class="span">
          <p>Github</p>
        </div>
      </div>

      <div class="tech_icons_section">
        <div class="tech_icons">
          <SiJavascript size={65} />
        </div>
        <div class="span">
          <p>Javascript</p>
        </div>
      </div>
    </div>
  )
}

export default Technologies
