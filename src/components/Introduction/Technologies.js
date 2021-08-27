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
  const TECH_ICON_SIZE = 65

  const tech_list_object = [
    { icon: <SiJavascript />, span: "Javascript" },
    { icon: <SiDocker />, span: "Docker" },
    { icon: <SiReact />, span: "React" },
    { icon: <SiCss3 />, span: "CSS3" },
    { icon: <SiSass />, span: "Sass" },
    { icon: <SiNodeDotJs />, span: "NodeJS" },
    { icon: <SiMongodb />, span: "MongoDB" },
    { icon: <SiHtml5 />, span: "HTML5" },
    { icon: <SiAmazonaws />, span: "AWS" },
    { icon: <SiMaterialUi />, span: "Material UI" },
    { icon: <SiBootstrap />, span: "Bootstrap" },
    { icon: <SiYarn />, span: "Yarn" },
    { icon: <SiGithub />, span: "Github" },
    { icon: <SiJavascript />, span: "Javascript" },
    { icon: <SiDocker />, span: "Docker" },
    { icon: <SiReact />, span: "React" },
    { icon: <SiCss3 />, span: "CSS3" },
    { icon: <SiSass />, span: "Sass" },
    { icon: <SiNodeDotJs />, span: "NodeJS" },
    { icon: <SiMongodb />, span: "MongoDB" },
    { icon: <SiHtml5 />, span: "HTML5" },
    { icon: <SiAmazonaws />, span: "AWS" },
    { icon: <SiMaterialUi />, span: "Material UI" },
    { icon: <SiBootstrap />, span: "Bootstrap" },
    { icon: <SiYarn />, span: "Yarn" },
    { icon: <SiGithub />, span: "Github" },
  ]

  return (
    <div className="tech_icons_list_parent_container">
      <div className="tech_icons_list_child_container">
        <div className="animation_slider_container" id="infinite">
          <div className="animation_slider">
            <div className="ul_tag">
              {tech_list_object.map((tech_item, index) => {
                return (
                  <div className="tech_icons_section" key={index}>
                    <div className="tech_icons_container">
                      <div className="tech_icons">{tech_item.icon}</div>
                      <div className="span">{tech_item.span}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
