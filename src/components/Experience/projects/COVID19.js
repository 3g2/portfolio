import React from "react"
import Card from "../../utils/Card"
import logo from "../../../images/covid19/CV19(3).png"

import { hause_of_brands_images, covid19_images } from "../../Consts/SliderData"

const COVID19 = () => {
  return (
    <div>
      <Card
        slides={covid19_images}
        logo={logo}
        title="Covid-19 Tracker"
        snippet="Utilizes API to display visualizations, graphs, and up-to-date data in one easy-to-use website."
        description="A Coronavirus tracker that utilizes disease.sh API to display 
                     current data on the global epidemic for any country or worldwide.
                     This website includes a varities of features to broaden the use in finding information
                     about COVID-19. The features include the following:
                     7-Day Average and daily Composed Chart W/ the option to scope in the last 30 days, Heat Map that showcases 
                     the highest to lowest cases per hundred using gradiant for range, and a right dock that
                     includes card components that includes the following data that corresponds to the user's choice from dropdown
                    "
        technologies={[
          "React",
          "AWS(S3, CodePipeline",
          "Recharts",
          "React Simple Maps",
        ]}
        link="http://another-coronavirus-tracker.s3-website-us-west-2.amazonaws.com"
      />
    </div>
  )
}

export default COVID19
