import React, { useState } from "react"
import ImageSlider from "./ImageSlider"
import Popup from "./Popup"

const Card = props => {
  const [pop_up_state, toggle_pop_up_state] = useState(false)
  return (
    <div className="card">
      <div className="card_image_container">
        <ImageSlider slides={props.slides} />
      </div>

      <div className="card_info_container">
        <div className="card_info_sub_container">
          <div className="card_info_sub_container_title">
            <h2 className="card_title">{props.title}</h2>
          </div>
          <div className="card_info_sub_container_date">
            <h2 className="card_date">{props.date}</h2>
          </div>
        </div>
        <div>
          <p className="card_description">{props.description}</p>
        </div>
        <div>
          <button
            className="button_style_one"
            onClick={() => {
              toggle_pop_up_state(true)
            }}
          >
            Open popup
          </button>
          {/* <div className="full_screen flex_container_center hidden">
            <button className="button_style_one">Close popup</button>
          </div> */}
          <Popup
            pop_up_state={pop_up_state}
            toggle_pop_up_state={toggle_pop_up_state}
          >
            <h1>POPUP</h1>
          </Popup>
        </div>
        <div className="card_info_container_div_two">
          <div className="card_technologies">
            {props.technologies.map(technology => (
              <div className="card_technologies_span">{technology}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
