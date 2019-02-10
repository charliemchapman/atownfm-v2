import React from "react";
import EpisodeSummary from './EpisodeSummary';
import BlogPostSummary from './BlogPostSummary';
import styles from "../styles/post-summary.module.scss";

export default ({data, posts}) => {
    const episodes = data.allRssFeedItem.edges.slice(1, data.allRssFeedItem.edges.length);
    const episodesJsx = episodes.map((episode, i)=>{
        return <EpisodeSummary episode={episode.node} key={i} />
    });

    const postsMinusFirst = posts.slice(1, posts.length)
    const postsJsx = postsMinusFirst.map((post, i)=>{
        if (post.type === "rss") {
            return <EpisodeSummary episode={post.post} key={i} />
        } 
        else if (post.type === "blog") {
            return <BlogPostSummary post={post.post} key={i}/>
        }
    })

    return (
        <div className={styles.content}>
            { postsJsx }
        </div>
)};