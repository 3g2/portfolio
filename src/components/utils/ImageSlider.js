import React, { useState } from "react"

const ImageSlider = props => {
  const [slider_props, set_slider_props] = useState({
    is_pressed: false,
    initial_x: null,
    transform_left_offset: null,
  })

  const slider_settings = {
    drag_speed: 1.85,
    item_width: 850,
    item_height: 400,
    item_side_offsets: 5,
  }

  const sRef = React.createRef()

  const handleParseInt = el => {
    // extracting 20 from translateX(20px) and converting it to integer with parsInt
    return parseInt(el.replace("translateX(", "").replace("px)", ""), 10)
  }

  const handleMouseDown = event => {
    const current_ref = sRef.current
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
  }

  const handleMouseUp = event => {
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
    const current_ref = sRef.current

    set_slider_props({ is_pressed: false })
    current_ref.classList.remove("active")

    const temp_threshold_offset = handleParseInt(
      current_ref.firstChild.style.transform
    )

    const end =
      props.slides.length *
        (slider_settings.item_width + 2 * slider_settings.item_side_offsets) -
      30 -
      current_ref.offsetWidth

    // (3) check if we passing from threshold ( handeling Snap To Sides )
    if (temp_threshold_offset < 0 || temp_threshold_offset > end) {
      set_slider_props({ is_pressed: false })

      //https://css-tricks.com/emulating-css-timing-functions-javascript/

      current_ref.firstChild.style.cssText = `
       transform: translateX(${temp_threshold_offset < 0 ? 0 : end}px);
       transition: transform 0.5s cubic-bezier(.25, .72, .51, .96);
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
      aria-hidden="true"
      className="slider_container"
      ref={sRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div
        className="slider_inner"
        style={{
          ...sWrapperStyle,
          transform: "translateX(0px)",
        }}
      >
        <div className="slider_animation">
          {props.slides.map((slide, index) => {
            return (
              <div
                className="slider_image_container"
                key={index}
                style={{ ...itemStyle }}
              >
                <img
                  src={slide.image}
                  alt="Hause of brands images"
                  className="slider_image"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
