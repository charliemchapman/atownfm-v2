import React from "react"
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";

export default () => (
    <div className={styles.container}>
        <SEO title="About | A-Town FM" />
        <h1>About</h1><p>
            From the land of Arnold, Missouri where the only skyscraper we need is a water tower, comes an entertainment podcast where two bold Midwesterners record a stream of consciousness touching on everything from movies, marketing, to technology. Be enlightened!
        </p>
        <h1>Contact</h1>
        <p>Facebook: <a href="https://www.facebook.com/atownfm/">https://www.facebook.com/atownfm/</a></p>
        <p>Twitter: <a href="https://twitter.com/atownfm">@atownfm</a></p>
        <p>Email: <a href="mailto:atownfm@gmail.com">atownfm@gmail.com</a></p>
    </div>
)