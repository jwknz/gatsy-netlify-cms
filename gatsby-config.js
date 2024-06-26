/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `100-gatsby-netlify-cms`,
    siteUrl: `https://venerable-peony-dafab7.netlify.app`
  },
  plugins: [
    "gatsby-plugin-decap-cms", 
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve : `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve : `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve : `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    },
    `gatsby-plugin-styled-components`
  ]
};