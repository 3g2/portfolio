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

  const [slider_props, set_slider_props] = useState({
    is_pressed: false,
    initial_x: null,
    transform_left_offset: null,
  })

  const slider_settings = {
    drag_speed: 1.25,
    item_width: 300,
    item_height: 180,
    item_side_offsets: 15,
  }

  const sRef = React.createRef()

  let slider = document.querySelector(".slider_container")
  let slider_inner = document.querySelector(".slider_inner", null)

  const handleParseInt = el => {
    // extracting 20 from translateX(20px) and converting it to integer with parsInt
    return parseInt(el.replace("translateX(", "").replace("px)", ""), 10)
  }

  /*
    The Node.firstChild read-only property returns the node's first child in the 
    tree,  or null if the node has no children. If the node is a Document, 
    it returns the first node in the list of its direct children. 
  */

  const handleMouseDown = event => {
    const current_ref = sRef.current
    event.persist()
    current_ref.classList.add("active")
    const { initial_x, transform_left_offset } = slider_props

    const temp_initial_x = event.pageX - current_ref.offsetLeft
    const temp_transform_left_offset = handleParseInt(
      current_ref.firstChild.style.transform
    )

    set_slider_props(
      {
        is_pressed: true,
        initial_x: temp_initial_x,
        transform_left_offset: temp_transform_left_offset,
      },
      () => {
        const x = event.pageX - current_ref.offsetLeft
        const walk = (x - initial_x) * slider_settings.drag_speed

        current_ref.firstChild.style.cssText = `
            transform: translateX(${transform_left_offset + walk}px);
            transition: transform 0.0s ease-in-out;
          `
      }
    )

    // slider_inner.style.transform = `translate3d(${x}px, 0px, 0px)`
  }

  const handleMouseUp = event => {
    handleSnap()
  }

  const handleMouseLeave = event => {
    handleSnap()
  }

  const handleMouseMove = event => {
    const { is_pressed, initial_x, transform_left_offset } = slider_props

    const current_ref = sRef.current

    if (!is_pressed) return
    event.preventDefault()

    const x = event.pageX - current_ref.offsetLeft

    const walk = (x - initial_x) * slider_settings.drag_speed

    current_ref.firstChild.style.transform = `translateX(${
      transform_left_offset + walk
    }px)`
  }

  const handleSnap = () => {
    // const { isDown, startX, transLeftOffset } = this.state
    const current_ref = sRef.current

    // Resetting
    set_slider_props({ is_pressed: false })
    current_ref.classList.remove("active")

    // handeling Threshold
    // (1) getting transValue
    const temp_threshold_offset = handleParseInt(
      current_ref.firstChild.style.transform
    )
    // (2) items width - 30(first & last item removed margins) - containerWidth(b/c of ending part)
    const end =
      props.slides.length *
        (slider_settings.item_width + 2 * slider_settings.item_side_offsets) -
      30 -
      current_ref.offsetWidth

    // (3) check if we passing from threshold ( handeling Snap To Sides )
    if (temp_threshold_offset < 0 || temp_threshold_offset > end) {
      set_slider_props({ is_pressed: false })
      current_ref.firstChild.style.cssText = `
       transform: translateX(${temp_threshold_offset < 0 ? 0 : end}px);
       transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
     `
    }
  }

  const sWrapperStyle = {
    width: `${
      props.slides.length *
      (slider_settings.item_width + 2 * slider_settings.item_side_offsets)
    }px`,
    height: `${slider_settings.item_height}px`,
  }

  const itemStyle = {
    width: `${slider_settings.item_width}px`,
    height: `${slider_settings.item_height}px`,
    margin: `0px ${slider_props.item_side_offsets}px`,
  }

  return (
    <div
      className="slider_container"
      ref={sRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        className="slider_inner"
        style={{
          ...sWrapperStyle,
          transform: "translateX(0px)",
        }}
      >
        {props.slides.map((slide, index) => {
          return (
            <div
              className="slider_image_container"
              key={index}
              style={{ ...itemStyle }}
            >
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
