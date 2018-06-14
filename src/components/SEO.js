import React from "react";
import Helmet from 'react-helmet';

export default ({title, description, image}) => { 
    title = title || "A-Town FM";
    description = description || "Official website of the A-Town FM podcast.";
    image = image || "http://atownfm.com/assets/a-town_logo_09.jpg";

    return (
        <Helmet
            title= { title }
            meta={[
            { name: "description", content: description },
            { name: "keywords", content: "atownfm, podcast, Arnold, Missouri" },
            { property: "og:type", content: "website" },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:image", content: image },
            { property: "fb:app_id", content: "321000698338630" }
            ]}
        />
)};