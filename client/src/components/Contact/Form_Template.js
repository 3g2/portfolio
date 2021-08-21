import React, { useEffect } from "react"
import { Formik, Form, Field } from "formik"
import { sendEmail } from "./Send_Email"
import { sender_schema } from "./validation/Sender_Schema"

const Form_Template = () => {
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
          <div className="form_child_container">
            <div class="form_grandchild_container">
              <div className="form_placement">
                <label class="form_label">First Name</label>
                <Field type="text" name="first_name" class="form_input" />
                <div class="errors">
                  {errors.first_name && touched.first_name ? (
                    <div> {errors.first_name} </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div class="form_grandchild_container">
              <div className="form_placement">
                <label class="form_label">Last Name</label>
                <Field type="text" name="last_name" class="form_input" />
                <div class="errors">
                  {errors.last_name && touched.last_name ? (
                    <div> {errors.last_name} </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="form_child_container">
            <div class="form_grandchild_container">
              <div className="form_placement">
                <label class="form_label">Email Address</label>
                <Field type="email" name="email_address" class="form_input" />
                <div class="errors">
                  {errors.email_address && touched.email_address ? (
                    <div> {errors.email_address} </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div class="form_grandchild_container">
              <div className="form_placement">
                <label class="form_label">
                  Phone Number • <i class="optional">Optional</i>
                </label>
                <Field type="text" name="phone_number" class="form_input" />
                <div class="errors">
                  {errors.phone_number && touched.phone_number ? (
                    <div> {errors.phone_number} </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div class="form_grandchild_container">
            <div className="form_placement">
              <label class="form_label">Description</label>
              <Field as="textarea" type="text" name="description" />
              <div class="errors">
                {errors.description && touched.description ? (
                  <div> {errors.description} </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="form_button_group">
            <div className="form_button_group_child">
              <input
                class="button_style_one form_button"
                value="Send"
                type="submit"
              />
            </div>

            <div className="form_button_group_child">
              <h6 className="form_span_option_text">
                <i>OR</i>
              </h6>
            </div>

            <div className="form_button_group_child">
              <a
                className="button_style_one form_email_app_button"
                href="mailto:m.ashrahfi@gmail.com"
              >
                Default email app
              </a>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Form_Template
