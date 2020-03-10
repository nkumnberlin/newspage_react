import React, {useState, useEffect} from 'react';
import TopAppBar from './components/topAppBar';
import styled from 'styled-components';
import RenderNavBar from "./components/sidebar";
import NewsContent from "./components/newsContent";
import {awsQueryNewspages} from "./api";
import ShowSnackbar from './components/snackbar'
import Spinner from './components/circularSpinner'
import '@material/list/dist/mdc.list.css';
import '@material/switch/dist/mdc.switch.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/typography/dist/mdc.typography.css';

import '@material/button/dist/mdc.button.css';

const Content = styled.div`
  display: block;
 padding: ${props => (props.showSideBar ? '0 2rem 0 calc(256px + 32px)' : '2rem')};
`;

const getNewspages = (lang) => {
    const query = {
        language: lang,
    };
    return awsQueryNewspages(query);
};


function App() {
    const [sources, setSources] = useState({});
    const [newsPageID, setNewsPageID] = useState({});
    const [hideSideBar, setHideSideBar] = useState(false);
    const [language, setLanguage] = useState({});
    const [snackbar, setSnackbar] = useState({
        showSnackbar: false,
        message: ''
    });

    useEffect(() => {
        async function fetchNewsPages() {
            try {
                const {sources} = await getNewspages(language);
                setSources(sources);
                setHideSideBar(true);
                setSnackbar({showSnackbar: true, message: language === 'de' ? 'Deutschsprachige Nachrichten werden geladen' : 'News in english will be loaded'})
            } catch (e) {
                console.error("Error", e);
            }
        }
        if(!!language.length) {
        fetchNewsPages();
        }

    }, [language]);



    const {showSnackbar, message} = snackbar;
    return (
        <>
            <TopAppBar hideSideBar={setHideSideBar} showSideBar={hideSideBar} changeLanguage={setLanguage}/>
            <RenderNavBar sources={sources} selectNewsPage={setNewsPageID} showSideBar={hideSideBar}
                          hideSideBar={hideSideBar}/>
            <Content showSideBar={hideSideBar}>
                {newsPageID.length && <NewsContent currentNewsPageID={newsPageID} setSnackbar={setSnackbar} language={language}/>}
            </Content>
            <ShowSnackbar open={showSnackbar} message={message} setSnackbar={setSnackbar}/>
        </>
    );
}

export default App;
