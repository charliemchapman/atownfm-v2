import React from "react"
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";

export default () => (
    <div className={styles.container}>
        <SEO title="Subscribe | A-Town FM" />
        <h1>Subscribe</h1>
        <p>A-Town FM is available wherever you listen to podcasts.  Just search "A-Town FM" and look for the green tower!</p>
        <p>You can also subscribe directly below:</p>
        <ul>
            <li><a href="http://podcast.atownfm.com/">RSS</a></li>
            <li><a href="https://itunes.apple.com/us/podcast/a-town-fm/id1257353761?mt=2">Apple Podcast</a></li>
            <li><a href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/Iulmtptxmmizbms4xepnxmxpujy?t%3DA-Town_FM%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16">Google Play</a></li>
            <li><a href="https://overcast.fm/itunes1257353761/a-town-fm">Overcast</a></li>
            <li><a href="https://castro.fm/itunes/1257353761">Castro</a></li>
            <li><a href="http://pca.st/WbDg">Pocket Casts</a></li>
            <li><a href="https://player.fm/series/a-town-fm-1910489">PlayerFM</a></li>
            <li><a href="https://radiopublic.com/atown-fm-G1VEZ4">RadioPublic</a></li>
        </ul>
        
    </div>
)