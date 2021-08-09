import React, { useEffect, useState } from "react"
import * as yup from "yup"
import Form_Template from "./Form_Template"

//2DO: Error handling and have all form details as required EXCEPT phone number.

const Index = () => {
  return (
    <div class="contact_container">
      <h1 class="header">Get In Touch</h1>
      <div>
        <div>
          <Form_Template />
        </div>
        <div>
          <h6 class="span">OR</h6>
        </div>
        <div>
          <a class="button_style_one" href="mailto:m.ashrahfi@gmail.com">
            Send
          </a>
        </div>
      </div>
    </div>
  )
}

export default Index
