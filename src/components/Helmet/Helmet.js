import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Metadata = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          http-equiv="Content-Security-Policy"
          content="
            default-src 'self' https://api.emailjs.com/api/v1.0/email/send; 
            object-src 'none';  
            style-src 'self' https://fonts.googleapis.com; 
            font-src 'self' https://fonts.gstatic.com;  
            img-src 'self' data: content:;
          "
        />
        <meta
          //DESCRIPTION
          name="description"
          content="College student who strives in improving on collaboration, problem
          solving, and designing/implementing for programming and applications."
        />
        <meta name="keywords" content="" />
        <title>Maher Halabi - Software Engineer</title>
        <link rel="canonical" />
      </Helmet>
    </div>
  )
}

// const Metadata = ({ title, description, url, charset }) => {
//   const data = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             charset
//             title
//             description
//             url
//           }
//         }
//       }
//     `
//   )
//   const metaTitle = title
//   const metaDescription = description
//   const metaUrl = url
//   const metaCharset = charset
//   return (
//     <Helmet>
//       <title>{`${metaTitle}`}</title>
//       <meta name="description" content={metaDescription} />
//       <meta name="url" content={metaUrl} />
//       <meta charset={metaCharset} />
//     </Helmet>
//   )
// }

export default Metadata
