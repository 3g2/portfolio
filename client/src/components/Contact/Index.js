import React, { useEffect, useState } from "react"

//2DO: Error handling and have all form details as required EXCEPT phone number.
//Inlude a tomail option if the possibility of

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

  useEffect(() => {}, [sender_data])

  const dynamicTextArea = value => {
    let number_of_line_breaks = (value.match(/\n/g) || []).length

    let new_height = 20 + number_of_line_breaks * 20 + 12 + 2
    return new_height
  }

  let description_input = document.getElementById("dynamic_text_area")

  function autoResize() {
    description_input.style.height = "auto"
    description_input.style.height = this.scrollHeight + "px"
  }

  if (description_input !== null) {
    description_input.addEventListener("input", autoResize, false)
    console.log(description_input.style.height)
  }

  return (
    <div class="contact_container">
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
            <textarea
              type="text"
              name="description"
              id="dynamic_text_area"
              class="form_input"
              value={sender_data.description}
              onChange={handleChange}
            />
          </div>
          <input class="button_style_one" value="Send" type="submit" />
        </form>
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
