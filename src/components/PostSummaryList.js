import React from "react";
import PostSummary from './PostSummary';
import styles from "../styles/post-summary.module.css";

export default ({data}) => {

    const episodes = data.allMarkdownRemark.edges.slice(1, data.allMarkdownRemark.edges.length-1);
    const episodesJsx = episodes.map(episode=>{
        return <PostSummary episode={episode.node} />
    });

    return (
        <div className={styles.content}>
            { episodesJsx }
        </div>
)};