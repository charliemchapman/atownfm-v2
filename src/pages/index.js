import React from "react"
import FeaturedEpisode from '../components/FeaturedEpisode';
import FeaturedBlogPost from '../components/FeaturedBlogPost';
import PostSummaryList from '../components/PostSummaryList';

export default ({data}) => { 
  let rssEpisodes = data.allRssFeedItem.edges.map(edge=>{
    return {
      type: "rss",
      date: edge.node.pubDate,
      post: edge.node
    }
  });

  let blogPosts = data.allMarkdownRemark.edges.map(edge=> {
    return {
      type: "blog",
      date: edge.node.frontmatter.date,
      post: edge.node
    }
  });

  let allPostsSorted = [...rssEpisodes, ...blogPosts].sort((a,b) => {
    return  new Date(b.date) - new Date(a.date);
  })

  let featuredPostJsx;
  let featuredPost = allPostsSorted[0];
  if (featuredPost.type === "rss"){
    featuredPostJsx = <FeaturedEpisode episode={allPostsSorted[0]}/>
  }
  else if (featuredPost.type === "blog") {
    featuredPostJsx = <FeaturedBlogPost post={allPostsSorted[0]}/>
  }

  return (
    <div>
        {featuredPostJsx}
        <PostSummaryList data={data} posts={allPostsSorted}/>
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