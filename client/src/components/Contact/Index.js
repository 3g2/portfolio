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
      <h1>Contact</h1>
      <div>
        <form class="form">
          <label class="form_label">
            Email Address
            <input type="text" name="email_address" />
          </label>
          <label class="form_label">
            Name
            <input type="text" name="name" />
          </label>
          <label class="form_label">
            Phone Number
            <input type="text" name="phone_number" />
          </label>
          <label class="form_label">
            Description
            <input type="text" name="description" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Index
