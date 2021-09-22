require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/portfolio/client",
  siteMetadata: {
    siteUrl: "https://www.maherhalabi.com",
    title: "Maher Halabi - Software Engineer",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: "G-9EP8W5EB0H",
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "maherhalabi.com",
      },
    },
  ],
}
