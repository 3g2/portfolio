import React, { useEffect, useState } from "react"
import * as yup from "yup"
import Form_Template from "./Form_Template"

//2DO: Error handling and have all form details as required EXCEPT phone number.

const Index = () => {
  return (
    <div className="contact_container" id="contact">
      <h1 className="header_title">Get In Touch</h1>
      <div>
        <div>
          
        </div>
        <div>
          <Form_Template />
        </div>
      </div>
    </div>
  )
}

export default Index
