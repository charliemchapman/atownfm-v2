module.exports = {
    pathPrefix: `/atownfm-v2`,
    siteMetadata: {
        title: `A-Town FM`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-rss-fork',
            options: {
                    rssURL: 'http://podcast.atownfm.com/'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              excerpt_separator: `<!-- excerpt-end -->`
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
              logo: "./src/images/favicon.png",
              injectHTML: true,
              icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: true,
                favicons: true,
                firefox: true,
                twitter: true,
                yandex: true,
                windows: true
              }
            }
          }
    ],
  };