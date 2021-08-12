import React from "react"
import Card from "../../utils/Card"

import { hause_of_brands_images } from "../../Consts/SliderData"

const HauseOfBrands = () => {
  return (
    <div>
      <Card
        slides={hause_of_brands_images}
        title="Hause of Brands"
        date="2021"
        description=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum."
        technologies={[
          "MongoDB",
          "Express",
          "React",
          "NodeJS",
          "Material UI",
          "AWS",
          "Docker",
        ]}
      />
    </div>
  )
}

export default HauseOfBrands
