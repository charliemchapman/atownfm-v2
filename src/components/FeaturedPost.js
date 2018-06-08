import React from "react";
import Link from "gatsby-link";
import styles from "../styles/featured-post.module.css"

export default ({episode}) => { console.log("la", episode); return (
  <div className={styles.container}>
    <div className={styles.content}>
        <h1>
          <Link to={episode.fields.slug} className={styles.title}>
            #{episode.frontmatter.number} - {episode.frontmatter.title}
          </Link>
        </h1>
        <div className={styles.date}>{episode.frontmatter.date}</div>
        <div className={styles.player}>
            <img className={styles.image} src={episode.frontmatter.imageUrl}/>
            <audio className={styles.audio} src="http://dts.podtrac.com/redirect.mp3/media.blubrry.com/atownmovies/podcast.atownmovies.com/audio/at-movies_002_deadpool.mp3" preload="none" controls/>
        </div>
        <p>{episode.excerpt}</p>
        <Link to={episode.fields.slug} className={styles.shownotes}>Show Notes</Link>
    </div>  
  </div>
)};