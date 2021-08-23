import React from "react"
import FormTemplate from "./FormTemplate"

//2DO: Error handling and have all form details as required EXCEPT phone number.

const Index = () => {
  return (
    <div className="contact_container" id="contact">
      <h1 className="header_title">Get In Touch</h1>
      <div>
        <FormTemplate />
      </div>
    </div>
  )
}

export default Index
