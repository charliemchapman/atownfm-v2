import React from "react"
import FeaturedPost from '../components/FeaturedPost';
import PostSummaryList from '../components/PostSummaryList';

export default ({data}) => { console.log("data: ", data); return (
    <div>
        <FeaturedPost episode={data.allRssFeedItem.edges[0].node}/>
        <PostSummaryList data={data}/>
    </div>
)}

export const query = graphql`
    query FeaturedPostQuery {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC},
          ) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                  number
                  imageUrl
                }
                excerpt(pruneLength: 80)
                html
                fields {
                  slug
                }
              }
            }
          }
          allRssFeedItem {
            edges {
              node {
                id
                pubDate
                title
                enclosure {
                  url
                  length
                  type
                }
                content
                itunes {
                  subtitle
                  explicit
                  duration
                  image
                }
                fields {
                  slug
                }
              }
            }
          }
    }
`;