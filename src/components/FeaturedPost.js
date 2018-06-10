import React from "react";
import Link from "gatsby-link";
import styles from "../styles/featured-post.module.scss"

export default ({episode}) => { return (
  <div className={styles.container}>
    <div className={styles.content}>
        <h1>
          <Link to={episode.fields.slug} className={styles.title}>
            {episode.title}
          </Link>
        </h1>
        <div className={styles.date}>{episode.pubDate}</div>
        <div className={styles.player}>
            <img className={styles.image} src={episode.itunes.image}/>
            <audio className={styles.audio} src={episode.enclosure.url} preload="none" controls/>
        </div>
        <p>{episode.itunes.subtitle}</p>
        <Link to={episode.fields.slug} className={styles.shownotes}>Show Notes</Link>
    </div>  
  </div>
)};