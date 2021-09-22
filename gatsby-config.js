require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const merge = require("webpack-merge")

module.exports = {
  pathPrefix: "/portfolio/client",
  siteMetadata: {
    siteUrl: "https://www.maherhalabi.com",
    title: "Maher Halabi - Software Engineer",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-9EP8W5EB0H", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
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
