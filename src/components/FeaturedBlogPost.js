import React from "react";
import Link from "gatsby-link";
import styles from "../styles/featured-post.module.scss"

export default ({post}) => { 
  let blogPost = post.post;

  return (
  <div className={styles.container}>
    <div className={styles.content}>
        <h1>
          <Link to={blogPost.fields.slug} className={styles.title}>
            {blogPost.frontmatter.title}
          </Link>
        </h1>
        <div className={styles.date}>{new Date(blogPost.frontmatter.date).toLocaleDateString()}</div>
        <p>{blogPost.excerpt}</p>
        <Link to={blogPost.fields.slug} className={styles.shownotes}>View Full Post</Link>
    </div>  
  </div>
)};