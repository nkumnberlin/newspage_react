import React, {useState, useEffect} from 'react';
import {awsQueryHeadlines} from "../api";
import RenderHeadlines from "../pages/news-frame";

function PrepareContent(props) {
    const [articles, setArticles] = useState({});
    const {currentNewsPageID} = props;

    useEffect(() => {
        async function updateNewsPage() {
            try {
                const {articles} = await awsQueryHeadlines(currentNewsPageID);
                setArticles(articles);
            } catch (e) {
                console.warn("Error: ", e);
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
