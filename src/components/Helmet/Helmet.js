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
<<<<<<< HEAD
          default-src 'self'; 
          font-src http://fonts.gstatic.com; 
          style-src 'self' 'unsafe-inline' http://fonts.googleapis.com;
=======
            default-src 'self';
            object-src 'none';  
            style-src 'self' fonts.googleapis.com 'unsafe-inline';
            font-src fonts.gstatic.com;
            img-src 'self' data: content:;
>>>>>>> 0fccbe8f055964f2aa93d3b939cd247a23977b3d
          "
        />
        <meta
          //DESCRIPTION
          name="description"
          content="Software developer and college student, with a passion for developing
          applications and solutions, that will help your business accelerate
          its growth and surpass the competition."
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
