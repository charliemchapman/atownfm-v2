const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

function cleanUrl(url){
  //TODO: Make this more robust.  
  //      Seems to be problems for any special characters like ñ
  var cleanedUrl = url;
  var charactersToRemove = [
    "’", /\s/g, ".", "(", ")", "ñ", "?", "&"
  ]
  charactersToRemove.forEach(characterToRemove=>{
    cleanedUrl = cleanedUrl.replace(":", "-").replace(characterToRemove, "")
  })

  return cleanedUrl;
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === `MarkdownRemark`) {
      const fileNode = getNode(node.parent)
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }

    if (node.internal.type === "rssFeedItem"){
      const cleanedTitle = cleanUrl(node.title);
      const title = encodeURI(cleanedTitle);
      const slug = `/episodes/${title}/`;
      console.log('SLUG: ', slug);
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  };

  exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allRssFeedItem {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
  ).then(result => {
        result.data.allRssFeedItem.edges.forEach(({ node }) => {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/episode-post.js`),
              context: {
                  // Data passed to context is available in page queries as GraphQL variables.
                  slug: node.fields.slug,
              },
            })
        })
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
          })
        })
        resolve()
      })
    })
  //   return new Promise((resolve, reject) => {
  //     graphql(`
  //       {
  //         allMarkdownRemark {
  //           edges {
  //             node {
  //               fields {
  //                 slug
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `
  // ).then(result => {
  //       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //           createPage({
  //           path: node.fields.slug,
  //           component: path.resolve(`./src/templates/blog-post.js`),
  //           context: {
  //               // Data passed to context is available in page queries as GraphQL variables.
  //               slug: node.fields.slug,
  //           },
  //           })
  //       })
  //       resolve()
  //     })
  //   })
  };