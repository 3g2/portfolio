import React from "react"
import Card from "../../utils/Card"
import logo from "../../../images/hause_of_brands/hauseofbrands_logo2.png"

import { hause_of_brands_images } from "../../Consts/SliderData"

const HauseOfBrands = () => {
  return (
    <div>
      <Card
        slides={hause_of_brands_images}
        logo={logo}
        title="Hause of Brands"
        snippet="Full-stack business web-app that automates the process of wholesale remarketing for vehicles."
        description="When it comes to dealerships selling vehicles at auctions, they often take the route of 
                     paying a service to an intermediary to do the job for them. The process in where the 
                     intermediary sells the vehicle for the dealership often does not involve a web-application. 
                     That is until one intermediary had a vision in gathering dealerships to one web-app and 
                     wanted to autmate the process of exchanging data between admin and user (dealerships) in 
                     order to maximize work effeciency. This web-app brings the vision of the intermediary to life.
                    "
        technologies={[
          "MongoDB",
          "Express",
          "React",
          "NodeJS",
          "Material UI",
          "AWS",
          "Docker",
        ]}
        link="https://www.hauseofbrands.com/"
      />
    </div>
  )
}

export default HauseOfBrands
