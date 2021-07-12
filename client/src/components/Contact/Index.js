import React, { useState } from "react"
const Index = () => {
  const [sender_data, set_sender_data] = useState({
    email_address: "",
    name: "",
    phone_number: "",
    description: "",
  })

  return (
    <div>
      <h1 class="header">Contact</h1>
      <div>
        <form class="form">
          <div class="form_child_container"></div>
          <div class="form_child_container"></div>
          <div class="form_child_container"></div>
          <div class="form_child_container"></div>
          <label class="form_label">Email Address</label>
          <input type="text" name="email_address" class="form_input" />
          <label class="form_label">
            Name
            <input type="text" name="name" class="form_input" />
          </label>
          <label class="form_label">
            Phone Number
            <input type="text" name="phone_number" class="form_input" />
          </label>
          <label class="form_label">
            Description
            <input type="text" name="description" class="form_input" />
          </label>
          <button type="submit" class="button_style_one">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Index
