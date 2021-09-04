import React, { useRef, useState } from "react"
import { Formik, Form, Field } from "formik"
import { sendEmail } from "./SendEmail"
import { senderSchema } from "./validation/SenderSchema"
import SnackBar from "./SnackBar"

const FormTemplate = () => {
  const snack_bar_ref = useRef(null)

  const handleSubmitData = sender_data => {
    // sendEmail(
    //   sender_data.email_address,
    //   sender_data.first_name,
    //   sender_data.last_name,
    //   sender_data.phone_number,
    //   sender_data.description
    // )
    // document.querySelector(".send_button").setAttribute("disabled", "disabled")
    snack_bar_ref.current.show()
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
      validateOnMount={true}
      validationSchema={senderSchema}
      onSubmit={sender_data => {
        handleSubmitData(sender_data)
      }}
    >
      {({ errors, touched, handleSubmit, isValid }) => (
        <div>
          <Form
            className="form"
            onSubmit={e => {
              {
                e.preventDefault()
                handleSubmit(e)
                console.log(!isValid)
                if (!isValid) {
                  console.log("REACHE")
                  return snack_bar_ref.current.show()
                }
              }
            }}
          >
            <div className="form_child_container">
              <div className="form_grandchild_container">
                <div className="form_placement">
                  <div className="form_label">First Name</div>
                  <label>Phone Number</label>
                  <div className="form_column">
                    <Field
                      id="phone_number"
                      type="text"
                      name="first_name"
                      className="form_input"
                    />
                    <div className="form_focus_effect"></div>
                  </div>

                  <div className="errors">
                    {errors.first_name && touched.first_name ? (
                      <div className="form_error"> {errors.first_name} </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="form_grandchild_container">
                <div className="form_placement">
                  <div className="form_label">Last Name</div>
                  <div className="form_column">
                    <Field
                      id="email_address"
                      type="text"
                      name="last_name"
                      className="form_input"
                    />
                    <div className="form_focus_effect"></div>
                  </div>

                  <div className="errors">
                    {errors.last_name && touched.last_name ? (
                      <div className="form_error"> {errors.last_name} </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="form_child_container">
              <div className="form_grandchild_container">
                <div className="form_placement">
                  <div className="form_label">Email Address</div>
                  <div className="form_column">
                    <Field
                      id="phone_number"
                      type="email"
                      name="email_address"
                      className="form_input"
                    />
                    <div className="form_focus_effect"></div>
                  </div>
                  <label>Phone Number</label>

                  <div className="errors">
                    {errors.email_address && touched.email_address ? (
                      <div className="form_error"> {errors.email_address} </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="form_grandchild_container">
                <div className="form_placement">
                  <div className="form_label">
                    <label>Email Address</label>
                    Phone Number • <i className="optional">Optional</i>
                  </div>
                  <div className="form_column">
                    <Field
                      id="email_address"
                      type="text"
                      name="phone_number"
                      className="form_input"
                    />
                    <div className="form_focus_effect"></div>
                  </div>
                  <div className="errors">
                    {errors.phone_number && touched.phone_number ? (
                      <div className="form_error"> {errors.phone_number} </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="form_grandchild_container">
              <div className="form_placement">
                <div className="form_label">Description</div>

                <div className="form_column">
                  <Field as="textarea" type="text" name="description" />
                  <div className="form_focus_effect"></div>
                </div>

                <div className="errors">
                  {errors.description && touched.description ? (
                    <div className="form_error"> {errors.description} </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="form_button_group">
              <div className="form_button_group_child">
                <input
                  className="button_style_one send_button"
                  value="Send"
                  type="submit"
                />
              </div>

              <div className="form_button_group_child">
                <a
                  className="button_style_one"
                  href="mailto:m.ashrahfi@gmail.com"
                >
                  use email client instead
                </a>
              </div>
            </div>
            <SnackBar
              message={isValid ? "Sent!" : "Form includes errors"}
              ref={snack_bar_ref}
              isValid={isValid}
            />
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default FormTemplate
