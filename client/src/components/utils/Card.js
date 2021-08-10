import React from "react"
import ImageSlider from "./ImageSlider"

const Card = props => {
  return (
    <div className="card">
      <ImageSlider slides={props.slides} />
      <h2 className="card_title">{props.title}</h2>
      <p className="card_description">{props.description}</p>
      <button className="button_style_one">More</button>
      <div className="card_technologies">
        {props.technologies.map(technology => (
          <div>{technology}</div>
        ))}
      </div>
      <p></p>
    </div>
  )
}

export default Card
