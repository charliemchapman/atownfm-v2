import React from "react";
import styles from "../styles/page.module.css";
import PatreonLogo from "../images/patreon-logo.svg";

export default () => (
    <div className={styles.container}>
        <h1>Patreon</h1>
        <a className={styles.patreonButton} href="https://www.patreon.com/bePatron?u=7182685&redirect_uri=http%3A%2F%2Fatownfm.com%2Fpatreon&utm_medium=widget">
            BECOME A PATRON
        </a>
        <p>With your support we will be able to bring on better guests, improve quality, expand, and do more for our fans. Any support whether financially or by word of mouth is appreciated!</p>
        <h1>Wall of Thanks</h1>
        <ul>
            <li>Nicholas Lewis</li>
            <li>Chad S</li>
            <li>Dani W</li>
        </ul>
    </div>
)