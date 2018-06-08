import React from "react";
import Link from "gatsby-link";
import styles from "../styles/header.module.css"
import hamburger from "../images/hamburger.png";

function getLinks() {
  return (
    [
          (<Link to="/subscribe">
            <div className={styles.link}>Subscribe</div>
          </Link>),
          (<Link to="/subscribe">
            <div className={styles.link}>Patreon</div>
          </Link>),
          (<Link to="/subscribe">
            <div className={styles.link}>About</div>
          </Link>),
          (<Link to="/subscribe">
            <div className={styles.link}>Shows</div>
          </Link>)
    ]
  )
}

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  render() {
    const toggleMenu = ()=> {
      this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    const menu = this.state.isMenuOpen ? <div className={styles.menuPopup}>{getLinks()}</div> : null;

    return (
      <div className={styles.header}>
        <div className={styles.image}>
          <Link to="/">
            <img src="http://atownfm.com/assets/a-town_logo_09.jpg" alt="A-Town FM"/>
          </Link>
        </div>
        <div className={styles.links}>
          <div className={styles.menu} onClick={toggleMenu}>
            <img src={hamburger} alt="Menu" />
          </div>
          { getLinks() }
        </div>
        { menu }
      </div>
    )
  }
};