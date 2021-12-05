import React, { useState } from "react"
import ImageSlider from "./ImageSlider"
import Popup from "./Popup"
import HyperModal from "react-hyper-modal"

import { BiLink } from "react-icons/bi"
import { AiFillCloseCircle } from "react-icons/ai"

const Card = props => {
  const [pop_up_state, toggle_pop_up_state] = useState(false)

  return (
    <div className="card">
      <div className="card_container">
        <div className="group">
          <div className="sub-group">
            <div className="card_child_container">
              <div className="card_logo_container">
                <img
                  className="card_logo"
                  src={props.logo}
                  alt="Hause of Brands Logo"
                />
              </div>
            </div>

            <div className="card_child_container">
              <div className="card_title_container">
                <h2 className="card_title">{props.title}</h2>
              </div>
              <div className="card_snippet_container">
                <p className="card_snippet">{props.snippet}</p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="button_style_one card_button"
              onClick={() => {
                toggle_pop_up_state(true)
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>

      <div style={{ zIndex: 16 }}>
        <HyperModal
          classes={
            "hyperModalWrapper___2sZCR hyperModalContentWrapper___1o7Ug .hyperCloseIcon___14vht"
          }
          isOpen={pop_up_state}
          requestClose={() => toggle_pop_up_state(false)}
        >
          <div className="card_pop_up_header">
            <div className="card_pop_up_header_child">
              <div className="card_pop_up_title_container">
                <div>
                  <h2 className="card_pop_up_title">{props.title}</h2>
                </div>
                <div className="card_pop_up_link_container">
                  <a
                    className="card_pop_up_link"
                    target="_blank"
                    rel="noreferrer"
                    href={props.link}
                  >
                    <BiLink />
                  </a>
                </div>
              </div>
              <div className="card_snippet_container">
                <p className="card_snippet">{props.snippet}</p>
              </div>
              <div className="card_pop_up_technologies_container">
                <div className="card_pop_up_technologies_title">Tech Used:</div>
                <div className="card_pop_up_technologies">
                  {props.technologies.map((technology, index) => (
                    <div className="card_pop_up_technologies_span" key={index}>
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="card_pop_up_image_container">
            <ImageSlider slides={props.slides} />
          </div>
          <div>
            <p className="card_pop_up_description">{props.description}</p>
          </div>
        </HyperModal>
      </div>
    </div>
  )
}

export default Card
