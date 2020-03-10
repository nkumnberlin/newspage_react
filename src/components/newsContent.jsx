import React, {useState, useEffect} from 'react';
import {awsQueryHeadlines} from "../api";
import RenderHeadlines from "../pages/news-frame";

function PrepareContent({currentNewsPageID, setSnackbar, language, setSpinner,setHideBackground}) {
    const [articles, setArticles] = useState({});

    useEffect(() => {
        async function updateNewsPage() {
            try {
                setSpinner(true);
                const {articles} = await awsQueryHeadlines(currentNewsPageID);
                setArticles(articles);
                const {source} = articles[0];
                setSpinner(false);
                setSnackbar({
                    showSnackbar: true,
                    message: language === 'de' ? `Neue Headlines von ${source.name} wurden geladen` : `Headlines of ${source.name} loaded`
                });
            } catch (e) {
                setSpinner(false);
                setSnackbar({
                    showSnackbar: true,
                    message: language === 'de' ? `Fehler beim Darstellen der News` : `Error while displaying the news`
                });
            }
        }

        updateNewsPage();
    }, [currentNewsPageID]);

    return (
        <>
            <RenderHeadlines articles={articles}/>
        </>
    );
}

export default PrepareContent;
