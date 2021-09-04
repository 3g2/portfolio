import React, { useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const ImageSlider = props => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 200,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 100,
    },
  }

  const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li
        className={active ? "slider_image active" : "slider_dot inactive"}
        onClick={() => onClick()}
      >
        {index + 1}
      </li>
    )
  }

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      keyBoardControl={true}
      removeArrowOnDeviceType={["mobile"]}
      autoPlay={true}
      autoPlaySpeed={3000}
      customTransition={"all 500ms ease-in"}
      transitionDuration={500}
      partialVisible={true}
      // dotListClass="custom-dot-list-style"
    >
      {props.slides.map((slide, index) => {
        return (
          <div key={index} className="carousel_item">
            <img
              src={slide.image}
              alt="Hause of brands images"
              className="slider_image"
            />
          </div>
        )
      })}
    </Carousel>
  )
}

export default ImageSlider
