import emailjs, { init } from "emailjs-com"

export const sendEmail = async (
  email_address,
  first_name,
  last_name,
  phone_number,
  description
) => {
  init(process.env.GATSBY_EMAILJS_USER_ID)
  const template_params = {
    email_address: email_address,
    first_name: first_name,
    last_name: last_name,
    phone_number: phone_number,
    description: description,
  }

  return emailjs
    .send(
      process.env.GATSBY_EMAILJS_SERVICE_ID,
      process.env.GATSBY_EMAILJS_TEMPLATE_ID,
      template_params
    )
    .then(
      response => {
        console.log(response.status, response.text)
      },
      error => {
        console.log(error.text)
      }
    )
}
