module.exports = {
  siteMetadata: {
    title: `Futronics`,
    description: `We're changing the world with the best quality and affordable audio and visual products`,
    author: `adedaniel`,
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `${"#dd0939"}`,
        theme_color: `${"#dd0939"}`,
        display: `minimal-ui`,
        icon: `src/images/ft-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
