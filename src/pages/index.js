import React from "react"
import FeaturedPost from '../components/FeaturedPost';
import PostSummaryList from '../components/PostSummaryList';

export default ({data}) => (
    <div>
        <FeaturedPost episode={data.allMarkdownRemark.edges[0].node}/>
        <PostSummaryList data={data}/>
    </div>
)

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
                  source
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
    }
`;