import React from "react";
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";

export default () => (
    <div className={styles.container}>
        <SEO title="Patreon | A-Town FM" />
        <h1>Patreon</h1>
        <a className={styles.patreonButton} href="https://www.patreon.com/bePatron?u=7182685&redirect_uri=http%3A%2F%2Fatownfm.com%2Fpatreon&utm_medium=widget">
            BECOME A PATRON
        </a>
        <p>With your support we will be able to bring on better guests, improve quality, expand, and do more for our fans. Any support whether financially or by word of mouth is appreciated!</p>
        <h1>Wall of Thanks</h1>
        <br></br>
        <table class="thanks">
            <tr><th>Patron</th><th>Patron Corner Episode</th></tr>
            <tr>
                <td>Nicholas Lewis</td>
                <td><a href="/episodes/39:_Nick_s_Corner/">#39 - Nick's Corner</a></td>
            </tr>
            <tr>
                <td>Chad S</td>
                <td><a href="/episodes/41:_Tolkien_Corner,_British_Royalty,_Chad_s_Corner/">#41 - Tolkien Corner, British Royalty, Chad's Corner</a></td>
            </tr>
            <tr>
                <td>Dani W</td>
                <td><a href="/episodes/51:_Dani_Corner/">#51 - Dani Corner</a></td>
            </tr>
            <tr>
                <td>Ben Maga</td>
                <td><em>Coming Soon...</em></td>
            </tr>
            <tr>
                <td>Nick P.</td>
                <td></td>
            </tr>
        </table>
    </div>
)