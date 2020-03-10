import React, {useState, useEffect} from 'react';
import {awsQueryHeadlines} from "../api";
import RenderHeadlines from "../pages/news-frame";

function PrepareContent({currentNewsPageID, setSnackbar, language}) {
    const [articles, setArticles] = useState({});

    useEffect(() => {
        async function updateNewsPage () {
            try {
                const {articles} = await awsQueryHeadlines(currentNewsPageID);
                setArticles(articles);
                const {source} = articles[0];
                setSnackbar({showSnackbar: true, message: language === 'de' ? `Neue Headlines von ${source.name} wurden geladen` : `Headlines of ${source.name} loaded`})
            } catch (e) {
                console.warn("Error: ", e);
            }
        }
        updateNewsPage();
    }, [currentNewsPageID]);

    return (
        <>
            <RenderHeadlines articles={articles}/> }
        </>
    );
}

export default PrepareContent;
