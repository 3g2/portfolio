import React, { useEffect, useState } from "react"
const Index = () => {
  const [sender_data, set_sender_data] = useState({
    email_address: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    description: "",
  })

  const handleChange = event => {
    const value = event.target.value
    set_sender_data({ ...sender_data, [event.target.name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(
      "A form was submitted by: " +
        sender_data.first_name +
        " " +
        sender_data.last_name
    )
    console.log(sender_data)
  }

  useEffect(() => {
    console.log(sender_data)
  }, [sender_data])

  return (
    <div>
      <h1 class="header">Contact</h1>
      <div>
        <form class="form" onSubmit={handleSubmit}>
          <div class="form_child_container">
            <label class="form_label">Email Address</label>
            <input
              type="text"
              name="email_address"
              class="form_input"
              value={sender_data.email_address}
              onChange={handleChange}
            />
          </div>
          <div class="form_child_container">
            <label class="form_label">First Name</label>
            <input
              type="text"
              name="first_name"
              class="form_input"
              value={sender_data.first_name}
              onChange={handleChange}
            />
          </div>
          <div class="form_child_container">
            <label class="form_label">Last Name</label>
            <input
              type="text"
              name="last_name"
              class="form_input"
              value={sender_data.last_name}
              onChange={handleChange}
            />
          </div>
          <div class="form_child_container">
            <label class="form_label">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              class="form_input"
              value={sender_data.phone_number}
              onChange={handleChange}
            />
          </div>
          <div class="form_child_container">
            <label class="form_label">Description</label>
            <input
              type="text"
              name="description"
              class="form_input"
              value={sender_data.description}
              onChange={handleChange}
            />
          </div>
          <input class="button_style_one" value="Send" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Index
