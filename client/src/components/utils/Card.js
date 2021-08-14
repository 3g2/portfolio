import React, { useState } from "react"
import ImageSlider from "./ImageSlider"
import Popup from "./Popup"

const Card = props => {
  const [pop_up_state, toggle_pop_up_state] = useState(false)
  return (
    <div className="card">
      <div className="card_child_container_one">
        <div className="card_logo_container">
          <img className="card_logo" src={props.logo} />
        </div>

        <div className="card_grandchild_container">
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
          className="button_style_one"
          onClick={() => {
            toggle_pop_up_state(true)
          }}
        >
          View
        </button>
        <Popup
          pop_up_state={pop_up_state}
          toggle_pop_up_state={toggle_pop_up_state}
        >
          <div>
            <div className="card_pop_up_title_container">
              <div>
                <h2 className="card_pop_up_title">{props.title}</h2>
              </div>
            </div>
            <div>
              <button
                className="close_pop_up"
                onClick={() => {
                  toggle_pop_up_state(false)
                }}
              >
                X
              </button>
            </div>
          </div>

          <div className="card_pop_up_image_container">
            <ImageSlider slides={props.slides} />
          </div>
          <div>
            <p className="card_pop_up_description">{props.description}</p>
          </div>
          <div className="card_pop_up_technologies_container">
            <div>Tech Used:</div>
            <div className="card_pop_up_technologies">
              {props.technologies.map(technology => (
                <div className="card_pop_up_technologies_span">
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </Popup>
      </div>
    </div>
  )
}

export default Card
