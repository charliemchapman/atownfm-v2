import React from "react";
import Link from "gatsby-link";
import styles from "../styles/post-summary.module.scss";

export default ({episode}) => {
  return (
    <div className={styles.post}>
        <div className={styles.image}>
            <img src={episode.itunes.image} alt="episode thumbnail"/>
        </div>
        <div>
            <h3>
                <Link to={episode.fields.slug} className={styles.title}>
                    {episode.title}
                </Link>
            </h3>
            <p>{episode.itunes.subtitle}</p>
        </div>
    </div>
)};