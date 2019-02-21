import React from "react";
import Link from "gatsby-link";
import styles from "../styles/featured-post.module.scss"

export default ({episode}) => { 
  var post = episode.post;
  return (
  <div className={styles.container}>
    <div className={styles.content}>
        <h1>
          <Link to={post.fields.slug} className={styles.title}>
            {post.title}
          </Link>
        </h1>
        <div className={styles.date}>{new Date(post.pubDate).toLocaleDateString()}</div>
        <div className={styles.player}>
            <img className={styles.image} src={post.itunes.image}/>
            <audio className={styles.audio} src={post.enclosure.url} preload="none" controls/>
        </div>
        <p>{post.itunes.subtitle}</p>
        <Link to={post.fields.slug} className={styles.shownotes}>Show Notes</Link>
    </div>  
  </div>
)};