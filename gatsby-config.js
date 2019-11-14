/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "Gastby-Boostrap",
    description: "This is the description",
    keywords: "gastby, gatsbyjs, project",
    image: '/static/gatsby.jpg',
    url: "https://www.gatsbyjs.org/"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    { 
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      }, 
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
  ],
}
