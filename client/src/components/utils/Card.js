import React from "react"
import ImageSlider from "./ImageSlider"

const Card = props => {
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
