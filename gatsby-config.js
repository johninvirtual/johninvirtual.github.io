module.exports = {
  siteMetadata: {
    title: `John in Virtual`,
    description: `'John' who happens to be in virtual state 😉. Junior Data Scientist - with a tail of Python, runs Anaconda in WSL-Ubuntu | Web Developer - happens to be in a React-ive state backed with Django`,
    author: `@johninvirtual`,
    siteUrl: 'https://www.johninvirtual.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-80862184-6",
      }
    },
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
        name: `john-in-virtual`,
        short_name: `johninvirtual`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sculpt-head.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
