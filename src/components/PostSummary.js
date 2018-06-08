import React from "react";
import Link from "gatsby-link";
import styles from "../styles/post-summary.module.css";

export default ({episode}) => {
  return (
    <div className={styles.post}>
        <div className={styles.image}>
            <img src={episode.frontmatter.imageUrl} alt="episode thumbnail"/>
        </div>
        <div>
            <h3>
                <Link to={episode.fields.slug} className={styles.title}>
                    #{episode.frontmatter.number} - {episode.frontmatter.title}
                </Link>
            </h3>
            <p>{episode.excerpt}</p>
        </div>
    </div>
)};