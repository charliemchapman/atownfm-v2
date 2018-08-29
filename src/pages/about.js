import React from "react"
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";

export default () => (
    <div className={styles.container}>
        <SEO title="About | A-Town FM" />
        <h1>About</h1><p>
            From the land of Arnold, Missouri where the only skyscraper we need is a water tower, comes an entertainment podcast where two bold Midwesterners record a stream of consciousness touching on everything from movies, marketing, to technology. Be enlightened!
        </p>
        <h3>Official Accounts</h3>
        <p>Reddit: <a href="https://www.reddit.com/r/atownfm/">/r/atownfm</a></p>
        <p>Facebook: <a href="https://www.facebook.com/atownfm/">https://www.facebook.com/atownfm/</a></p>
        <p>Twitter: <a href="https://twitter.com/atownfm">@atownfm</a></p>
        <p>Mastodon: <a href="https://mastodon.social/@atownfm">@atownfm@mastodon.social</a></p>
        <p>Email: <a href="mailto:atownfm@gmail.com">atownfm@gmail.com</a></p>
        <h3>Charlie</h3>
        <p>Twitter: <a href="https://twitter.com/chuckyc17">@chuckyc17</a></p>
        <p>Mastodon: <a href="https://mastodon.social/@charliemchapman">@charliemchapman@mastodon.social</a></p>
        <h3>Dan</h3>
        <p>Twitter: <a href="https://twitter.com/danlitz">@DanLitz</a></p>
        <p>Mastodon: still hasn't signed up... 😒</p>
    </div>
)