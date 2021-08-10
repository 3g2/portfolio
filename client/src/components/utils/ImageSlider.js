import React, { useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

const ImageSlider = props => {
  const [current_img, set_current_img] = useState(0)

  const slide_length = props.slides.length

  const next_slide = () => {
    set_current_img(current_img === slide_length - 1 ? 0 : current_img + 1)
  }
  const prev_slide = () => {
    set_current_img(current_img === 0 ? slide_length - 1 : current_img - 1)
  }

  return (
    <section className="slider_container">
      <FaArrowCircleLeft onClick={prev_slide} className="slider_left_arrow" />
      <FaArrowCircleRight onClick={next_slide} className="slider_right_arrow" />
      {props.slides.map((slide, index) => {
        return (
          <div
            className={index === current_img ? "slide active" : "slide"}
            key={index}
          >
            {index === current_img && (
              <img src={slide.image} alt="images" className="slider_image" />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
