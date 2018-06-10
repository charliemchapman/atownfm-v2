import React from "react";
import PostSummary from './PostSummary';
import styles from "../styles/post-summary.module.css";

export default ({data}) => {

    const episodes = data.allRssFeedItem.edges.slice(1, data.allRssFeedItem.edges.length);
    const episodesJsx = episodes.map((episode, i)=>{
        return <PostSummary episode={episode.node} key={i} />
    });

    return (
        <div className={styles.content}>
            { episodesJsx }
        </div>
)};