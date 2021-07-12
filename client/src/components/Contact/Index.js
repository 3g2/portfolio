import React, { useState } from "react"
import { form, form_label, form_label_input } from "./Contact.module.scss"

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
        <form className={form}>
          <label className={form_label}>
            Email Address
            <input type="text" name="email_address" />
          </label>
          <label className={form_label}>
            Name
            <input type="text" name="name" />
          </label>
          <label className={form_label}>
            Phone Number
            <input type="text" name="phone_number" />
          </label>
          <label className={form_label}>
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
