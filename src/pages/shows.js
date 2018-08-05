import React from "react";
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";
import postStyles from "../styles/shows.module.scss";
import atownLogo from "../images/a-town_logo_dark.jpg";
import atownMoviesLogo from "../images/at-movies_logo_circle_dark.jpg";

export default () => (
    <div className={styles.container}>
        <SEO title="Shows | A-Town FM" />
        <h1>Shows</h1>
            <div className={postStyles.post}>
                <div className={postStyles.image}>
                    <img src={atownMoviesLogo} alt="episode thumbnail"/>
                </div>
                <div>
                    <h3>
                        <a href="http://atownmovies.com/" className={postStyles.title}>
                            A-Town at the Movies
                        </a>
                    </h3>
                    <p>From the creators of A-Town FM comes the movie podcast to end all movie podcasts.</p>
                </div>
            </div>
            <div className={postStyles.post}>
                <div className={postStyles.image}>
                    <img src={atownLogo} alt="episode thumbnail"/>
                </div>
                <div>
                    <h3>
                        <a href="http://atownfm.com/" className={postStyles.title}>
                            A-Town FM
                        </a>
                    </h3>
                    <p>Podcast where 2 Midwesterners discuss everything from movies, marketing, culture and a surprising amount on water towers.</p>
                </div>
            </div>
    </div>
)