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
  const [pressed, set_pressed] = useState(false)
  const [slider_inner_offset, set_slider_inner_offset] = useState(0)

  let slider = document.querySelector(".slider_container")
  let slider_inner = document.querySelector(".slider_inner", null)

  useEffect(() => {
    return () => {}
  }, [pressed])

  const handleSliderMouseDown = event => {
    set_pressed(true)

    set_slider_inner_offset(slider_inner.offsetLeft)
    set_initial_x(event.nativeEvent.offsetX - slider_inner_offset)
    // slider_inner.style.transform = `translate3d(${x}px, 0px, 0px)`
  }

  const handleSliderMouseUp = event => {
    set_pressed(false)
    set_slider_inner_offset(slider_inner.offsetLeft)
    set_initial_x(event.nativeEvent.offsetX - slider_inner_offset)
  }
  const handleSliderMouseEnter = event => {
    set_pressed(false)
  }

  const handleSliderMouseLeave = event => {
    set_pressed(false)
  }

  const handleSliderMouseMove = event => {
    if (!pressed) return
    event.preventDefault()

    set_x(event.nativeEvent.offsetX)
    slider_inner.style.left = `${x - initial_x}px`
    checkBoundary()
  }

  const checkBoundary = () => {
    let outer = slider.getBoundingClientRect()
    let inner = slider_inner.getBoundingClientRect()

    if (parseInt(slider_inner.style.left) > 0) {
      return (slider_inner.style.left = "0px")
    } else if (inner.right < outer.right) {
      return (slider_inner.style.left = `-${inner.width - outer.width}px`)
    }
  }

  return (
    <div
      className={
        pressed
          ? "slider_container slider_container_grabbing"
          : "slider_container slider_container_grab"
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
