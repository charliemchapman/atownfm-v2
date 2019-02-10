import React from "react";
import SEO from '../components/SEO';
import styles from "../styles/page.module.scss";

export default ({ data }) => {
  const post = data.markdownRemark;
  // return (
  //   <div className={styles.container}>
  //     <h1>{post.frontmatter.title}</h1>
  //     <div dangerouslySetInnerHTML={{ __html: post.html }} />
  //   </div>
  // );
  

  return (
    <div className={styles.container}>
      <SEO
        title={post.frontmatter.title}
        // image={post.frontmatter.image}
      />
      <h1>{post.frontmatter.title}</h1>
      <div className={styles.date}>{new Date(post.frontmatter.date).toLocaleDateString()}</div>
      {/* <img className={styles.image} src={post.frontmatter.image}/> */}
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;