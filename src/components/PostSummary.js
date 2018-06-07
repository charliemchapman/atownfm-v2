import React from "react";
import Link from "gatsby-link";
import styles from "../styles/post-summary.module.css";

export default ({episode}) => {
  return (
    <div className={styles.post}>
        <h3>
            <Link to={episode.fields.slug} className={styles.title}>
                {episode.frontmatter.title}
            </Link>
        </h3>
        <p>{episode.excerpt}</p>
    </div>
)};