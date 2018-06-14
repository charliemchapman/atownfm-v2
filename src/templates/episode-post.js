import React from "react";
import SEO from '../components/SEO';
import styles from "../styles/page.module.scss";

export default ({ data }) => {
  const episode = data.rssFeedItem;
  return (
    <div className={styles.container}>
      <SEO
        title={episode.title}
        image={episode.itunes.image}
      />
      <h1>{episode.title}</h1>
      <div className={styles.date}>{new Date(episode.pubDate).toLocaleDateString()}</div>
      <div className={styles.player}>
        <img className={styles.image} src={episode.itunes.image}/>
        <audio className={styles.audio} src={episode.enclosure.url} preload="none" controls/>
      </div>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: episode.content }} />
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