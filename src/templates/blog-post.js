import React from "react";
import styles from "../styles/page.module.css";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.container}>
      <h1>#{post.frontmatter.number} - {post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        number
      }
    }
  }
`;