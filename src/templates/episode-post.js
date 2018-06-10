import React from "react";
import styles from "../styles/page.module.css";

export default ({ data }) => {
  const episode = data.rssFeedItem;
  return (
    <div className={styles.container}>
      <h1>{episode.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: episode.content }} />
    </div>
  );
};

export const query = graphql`
  query EpisodePostQuery($slug: String!) {
    rssFeedItem(fields: { slug: { eq: $slug } }) {
        id
        pubDate
        title
        enclosure {
          url
          length
          type
        }
        content
        itunes {
          subtitle
          explicit
          duration
          image
        }
        fields {
          slug
        }
    }
  }
`;