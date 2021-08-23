import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const senderSchema = yup.object().shape({
  email_address: yup
    .string()
    .email("Email address is not valid.")
    .required("Email address is required."),
  first_name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "First name is not valid.")
    .max(40)
    .required("First name is required."),
  last_name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Last name is not valid.")
    .max(40)
    .required("Last name is required."),
  phone_number: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .notRequired(),
  description: yup.string().required("Description is required."),
})
