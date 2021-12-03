import React, { useState } from "react"
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
import { CSSTransition, SwitchTransition } from "react-transition-group"

const Technologies = () => {
  const [isShown, setIsShown] = useState(false)
  const [display, setDisplay] = useState({
    frontend: "notdisplayed",
    backend: "notdisplayed",
    devOps: "notdisplayed",
  })
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

  const frontend_tech = [
    { icon: <SiJavascript />, span: "Javascript", className: "Javascript" },
    { icon: <SiHtml5 />, span: "HTML5", className: "HTML5" },
    { icon: <SiReact />, span: "React", className: "React" },
    { icon: <SiSass />, span: "Sass", className: "Sass" },
    { icon: <FaCss3 />, span: "CSS3", className: "CSS3" },
    { icon: <SiMaterialUi />, span: "Material UI", className: "MaterialUI" },
    { icon: <SiBootstrap />, span: "Bootstrap", className: "Bootstrap" },
  ]

  const backend_tech = [
    { icon: <SiNodeDotJs />, span: "NodeJS", className: "NodeJS" },
    { icon: <SiMongodb />, span: "MongoDB", className: "MongoDB" },
  ]

  const devops_tech = [
    { icon: <SiDocker />, span: "Docker", className: "Docker" },
    { icon: <SiAmazonaws />, span: "AWS", className: "AWS" },
  ]

  const showButton = (e, type, result) => {
    e.preventDefault()
    setDisplay({ ...display, [type]: result })
  }

  const hideButton = (e, type, result) => {
    e.preventDefault()
    setDisplay({ ...display, [type]: result })
  }

  return (
    <button
      className="tech_icon_interactive"
      onClick={() => {
        setIsShown(!isShown)
        if (!isShown) {
          setDisplay({
            frontend: "notdisplayed",
            backend: "notdisplayed",
            devOps: "notdisplayed",
          })
        }
      }}
    >
      <SwitchTransition>
        <CSSTransition
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          key={isShown ? "Goodbye, world!" : "Hello, world!"}
          classNames="fade"
        >
          <div>
            {" "}
            {isShown ? (
              <div className="tech_icons_list_parent_container">
                <div className="tech_icons_list_child_container">
                  <div className="animation_slider_container tech_icon_interactive_container">
                    <div>
                      <div
                        onMouseOver={e =>
                          showButton(e, "frontend", "displayed")
                        }
                        onMouseLeave={e =>
                          showButton(e, "frontend", "notdisplayed")
                        }
                        className="tech_icon_interactive_list_item"
                      >
                        <div>
                          <div
                            className={
                              display.frontend === "displayed"
                                ? "notdisplayed"
                                : "displayed"
                            }
                          >
                            Frontend
                          </div>
                          <div className={display.frontend}>
                            {frontend_tech.map((tech, index) => {
                              return (
                                <div
                                  className="interactive_tech_list"
                                  key={index}
                                >
                                  <div className="tech_icons">
                                    <div className={tech.className}>
                                      {tech.icon}
                                    </div>
                                  </div>
                                  <div className="span">{tech.span}</div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                      <div
                        onMouseOver={e => showButton(e, "backend", "displayed")}
                        onMouseLeave={e =>
                          showButton(e, "backend", "notdisplayed")
                        }
                        className="tech_icon_interactive_list_item"
                      >
                        <div>
                          <div
                            className={
                              display.backend === "displayed"
                                ? "notdisplayed"
                                : "displayed"
                            }
                          >
                            Backend
                          </div>
                          <div className={display.backend}>
                            {backend_tech.map((tech, index) => {
                              return (
                                <div
                                  className="interactive_tech_list"
                                  key={index}
                                >
                                  <div className="tech_icons">
                                    <div className={tech.className}>
                                      {tech.icon}
                                    </div>
                                  </div>
                                  <div className="span">{tech.span}</div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                      <div
                        onMouseOver={e => showButton(e, "devOps", "displayed")}
                        onMouseLeave={e =>
                          showButton(e, "devOps", "notdisplayed")
                        }
                        className="tech_icon_interactive_list_item"
                      >
                        <div>
                          <div
                            className={
                              display.devOps === "displayed"
                                ? "notdisplayed"
                                : "displayed"
                            }
                          >
                            DevOps
                          </div>
                          <div className={display.devOps}>
                            {devops_tech.map((tech, index) => {
                              return (
                                <div
                                  className="interactive_tech_list"
                                  key={index}
                                >
                                  <div className="tech_icons">
                                    <div className={tech.className}>
                                      {tech.icon}
                                    </div>
                                  </div>
                                  <div className="span">{tech.span}</div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="container_parent">
                <div className="overlay">
                  <div class="overlay-text">Show All</div>
                </div>
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
              </div>
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </button>
  )
}

export default Technologies
