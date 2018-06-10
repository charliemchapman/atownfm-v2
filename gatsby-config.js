module.exports = {
    pathPrefix: `/atownfm-v2`,
    siteMetadata: {
        title: `A-Town FM`,
    },
    plugins: [
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
    ],
  };