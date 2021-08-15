import React, { useState, useEffect } from "react"
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"

const ImageSlider = props => {
  // const [current_img, set_current_img] = useState(0)

  // const slide_length = props.slides.length

  // const next_slide = () => {
  //   set_current_img(current_img === slide_length - 1 ? 0 : current_img + 1)
  // }
  // const prev_slide = () => {
  //   set_current_img(current_img === 0 ? slide_length - 1 : current_img - 1)
  // }

  const [initial_x, set_initial_x] = useState(0)
  const [x, set_x] = useState(0)
  const [slider_inner_offset, set_slider_inner_offset] = useState(0)

  let slider = document.querySelector(".slider_container")
  let slider_inner = document.querySelector(".slider_inner")
  let pressed

  useEffect(() => {
    slider_inner = 0
  }, [])

  const handleSliderMouseDown = event => {
    pressed = true
    console.log("TF", pressed)
    set_slider_inner_offset(slider_inner.offsetLeft)
    set_initial_x(event.nativeEvent.offsetX - slider_inner_offset)
    console.log("X MOUSE D", initial_x)
    console.log("INNER MOUSE D", slider_inner_offset)
  }

  const handleSliderMouseUp = event => {
    pressed = false
  }
  const handleSliderMouseEnter = event => {
    pressed = false
  }

  const handleSliderMouseLeave = event => {
    pressed = false
  }

  const handleSliderMouseMove = event => {
    if (!pressed) return
    event.preventDefault()

    set_x(event.nativeEvent.offsetX)
    slider_inner.style.left = `${x - initial_x}px`
  }

  return (
    <div
      className={
        (pressed = true
          ? "slider_container slider_container_grabbing"
          : "slider_container slider_container_grab")
      }
      onMouseDown={handleSliderMouseDown}
      onMouseUp={handleSliderMouseUp}
      onMouseEnter={handleSliderMouseEnter}
      onMouseLeave={handleSliderMouseLeave}
      onMouseMove={handleSliderMouseMove}
    >
      <div className="slider_inner">
        {props.slides.map((slide, index) => {
          return (
            <div className="slider_image_container">
              <img src={slide.image} alt="images" className="slider_image" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageSlider

/*  
<div
  className={index === current_img ? "slide active" : "slide"}
  key={index}
  >
  {index === current_img && (
  <img src={slide.image} alt="images" className="slider_image" />
  )}
</div>

<AiFillLeftCircle onClick={prev_slide} className="slider_left_arrow" />
<AiFillRightCircle onClick={next_slide} className="slider_right_arrow" />

*/
