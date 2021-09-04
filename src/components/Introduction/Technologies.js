import React from "react"
import {
  SiJavascript,
  SiDocker,
  SiReact,
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
import { FaCss3 } from "react-icons/fa"

const Technologies = () => {
  const TECH_ICON_SIZE = 65

  const tech_list_object = [
    { icon: <SiJavascript />, span: "Javascript", className: "Javascript" },
    { icon: <SiDocker />, span: "Docker", className: "Docker" },
    { icon: <SiHtml5 />, span: "HTML5", className: "HTML5" },
    { icon: <SiReact />, span: "React", className: "React" },
    { icon: <SiSass />, span: "Sass", className: "Sass" },
    { icon: <SiNodeDotJs />, span: "NodeJS", className: "NodeJS" },
    { icon: <SiGithub />, span: "Github", className: "Github" },
    { icon: <SiMongodb />, span: "MongoDB", className: "MongoDB" },
    { icon: <FaCss3 />, span: "CSS3", className: "CSS3" },
    { icon: <SiAmazonaws />, span: "AWS", className: "AWS" },
    { icon: <SiMaterialUi />, span: "Material UI", className: "MaterialUI" },
    { icon: <SiBootstrap />, span: "Bootstrap", className: "Bootstrap" },
    { icon: <SiYarn />, span: "Yarn", className: "Yarn" },
    { icon: <SiJavascript />, span: "Javascript", className: "Javascript" },
    { icon: <SiDocker />, span: "Docker", className: "Docker" },
    { icon: <SiHtml5 />, span: "HTML5", className: "HTML5" },
    { icon: <SiReact />, span: "React", className: "React" },
    { icon: <SiSass />, span: "Sass", className: "Sass" },
    { icon: <SiNodeDotJs />, span: "NodeJS", className: "NodeJS" },
    { icon: <SiGithub />, span: "Github", className: "Github" },
    { icon: <SiMongodb />, span: "MongoDB", className: "MongoDB" },
    { icon: <FaCss3 />, span: "CSS3", className: "CSS3" },
    { icon: <SiAmazonaws />, span: "AWS", className: "AWS" },
    { icon: <SiMaterialUi />, span: "Material UI", className: "MaterialUI" },
    { icon: <SiBootstrap />, span: "Bootstrap", className: "Bootstrap" },
    { icon: <SiYarn />, span: "Yarn", className: "Yarn" },
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
                      <div className="tech_icons">
                        <div className={tech_item.className}>
                          {tech_item.icon}
                        </div>
                      </div>
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
