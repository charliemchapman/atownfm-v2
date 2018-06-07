import React from "react";
import Link from "gatsby-link";
import styles from "../styles/header.module.css"
import hamburger from "../images/hamburger.png";

export default () => (
  <div className={styles.header}>
    <div className={styles.image}>
      <Link to="/">
        <img src="http://atownfm.com/assets/a-town_logo_09.jpg" alt="A-Town FM"/>
      </Link>
    </div>
    <div className={styles.links}>
      <div className={styles.menu}>
        <img src={hamburger} alt="Menu" />
      </div>
      <Link to="/subscribe">
        <div className={styles.link}>Subscribe</div>
      </Link>
      <Link to="/subscribe">
        <div className={styles.link}>Patreon</div>
      </Link>
      <Link to="/subscribe">
        <div className={styles.link}>About</div>
      </Link>
      <Link to="/subscribe">
        <div className={styles.link}>Shows</div>
      </Link>
    </div>
  </div>
);