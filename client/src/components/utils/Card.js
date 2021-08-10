import React from "react"
import ImageSlider from "./ImageSlider"

const Card = props => {
  return (
    <div className="card">
      <div></div>
      <div className="card_image_container">
        <ImageSlider slides={props.slides} />
      </div>

      <div className="card_info_container">
        <div>
          <h2 className="card_title">{props.title}</h2>
          <p className="card_description">{props.description}</p>
          <button className="button_style_one">More</button>
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
