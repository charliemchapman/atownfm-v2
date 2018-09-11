import React from "react";
import Helmet from 'react-helmet';

export default ({title, description, image}) => { 
    title = title || "A-Town FM";
    description = description || "Official website of the A-Town FM podcast.";
    image = image || "https://s3.us-east-2.amazonaws.com/pod.atownfm.com/images/a-town_logo_dark.jpg";

    return (
        <Helmet
            title= { title }
            meta={[
            { name: "description", content: description },
            { name: "keywords", content: "atownfm, podcast, Arnold, Missouri" },
            { name: "apple-itunes-app", content: "app-id=1257353761" },
            { property: "og:type", content: "website" },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:image", content: image },
            { property: "fb:app_id", content: "321000698338630" }
            ]}
        />
)};