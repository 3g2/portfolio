import React from "react"
import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export let sender_schema = yup.object().shape({
  email_address: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone_number: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .notRequired(),
  description: yup.string().required(),
})
