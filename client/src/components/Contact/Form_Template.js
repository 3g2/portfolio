import React, { useEffect } from "react"
import { Formik, Form, Field } from "formik"
import { sendEmail } from "./Send_Email"
import { sender_schema } from "./validation/Sender_Schema"

const Form_Template = () => {
  let description_input = document.getElementById("dynamic_text_area")

  function autoResize() {
    description_input.style.height = "auto"
    description_input.style.height = this.scrollHeight + "px"
  }

  if (description_input !== null) {
    description_input.addEventListener("input", autoResize, false)
  }

  return (
    <Formik
      initialValues={{
        email_address: "",
        first_name: "",
        last_name: "",
        phone_number: undefined,
        description: "",
      }}
      validationSchema={sender_schema}
      onSubmit={sender_data => {
        sendEmail(
          sender_data.email_address,
          sender_data.first_name,
          sender_data.last_name,
          sender_data.phone_number,
          sender_data.description
        )
      }}
    >
      {({ errors, touched }) => (
        <Form class="form">
          <div class="form_child_container">
            <label class="form_label">Email Address</label>
            <Field type="email" name="email_address" class="form_input" />

            <div class="errors">
              {errors.email_address && touched.email_address ? (
                <div> {errors.email_address} </div>
              ) : null}
            </div>
          </div>
          <div class="form_child_container">
            <label class="form_label">First Name</label>
            <Field type="text" name="first_name" class="form_input" />
            <div class="errors">
              {errors.first_name && touched.first_name ? (
                <div> {errors.first_name} </div>
              ) : null}
            </div>
          </div>
          <div class="form_child_container">
            <label class="form_label">Last Name</label>
            <Field type="text" name="last_name" class="form_input" />
            <div class="errors">
              {errors.last_name && touched.last_name ? (
                <div> {errors.last_name} </div>
              ) : null}
            </div>
          </div>
          <div class="form_child_container">
            <label class="form_label">Phone Number</label>
            <Field type="text" name="phone_number" class="form_input" />
            <div class="errors">
              {errors.phone_number && touched.phone_number ? (
                <div> {errors.phone_number} </div>
              ) : null}
            </div>
          </div>
          <div class="form_child_container">
            <label class="form_label">Description</label>
            <Field
              as="textarea"
              type="text"
              name="description"
              class="form_input"
            />
            <div class="errors">
              {errors.description && touched.description ? (
                <div> {errors.description} </div>
              ) : null}
            </div>
          </div>
          <input class="button_style_one" value="Send" type="submit" />
        </Form>
      )}
    </Formik>
  )
}

export default Form_Template
