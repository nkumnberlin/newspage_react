import React, {useState, useEffect} from 'react';
import TopAppBar from './components/topAppBar';
import styled from 'styled-components';
import RenderNavBar from "./components/sidebar";
import NewsContent from "./components/newsContent";
import {awsQueryNewspages} from "./api";
import ShowSnackbar from './components/snackbar';
import Spinner from './components/circularSpinner';
import Intro from './components/intro';
import Header from "./assets/images/newspage-header.png";
import {ImageListImage} from "@rmwc/image-list";




const Content = styled.div`
height: 100%;
position: relative;
  display: block;
 padding: ${props => (props.showSideBar ? '0 2rem 0 calc(256px + 32px)' : '2rem')};
`;


const StyledSpinner = styled(Spinner)`
width: 100% !important`;

const Overlay = styled.div`
   position: absolute;
     display: ${props => (props.showSpinner ? 'block' : 'none')};
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); 
  z-index: 10; 
  cursor: pointer; 
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
    const [showSpinner, setSpinner] = useState(false);
    const [snackbar, setSnackbar] = useState({
        showSnackbar: false,
        message: ''
    });

    useEffect(() => {
        async function fetchNewsPages() {
            try {
                setSpinner(true);
                const {sources} = await getNewspages(language);
                setSources(sources);
                setHideSideBar(true);
                setSpinner(false);
                setSnackbar({
                    showSnackbar: true,
                    message: language === 'de' ? 'Deutschsprachige Nachrichten werden geladen' : 'News in english will be loaded'
                });
            } catch (e) {
                setSpinner(false);
                setSnackbar({
                    showSnackbar: true,
                    message: language === 'de' ? 'Fehler beim beziehen der Nachrichten' : 'Error while fetching the news'
                });
            }
        }

        if (!!language.length) {
            fetchNewsPages();
        }

    }, [language]);


    const {showSnackbar, message} = snackbar;
    return (
        <>
            <TopAppBar hideSideBar={setHideSideBar} showSideBar={hideSideBar} changeLanguage={setLanguage}/>
            <RenderNavBar sources={sources} selectNewsPage={setNewsPageID} showSideBar={hideSideBar}
                          hideSideBar={hideSideBar}/>
            <Overlay showSpinner={showSpinner}/>
            <ImageListImage src={Header}/>
            <Content showSideBar={hideSideBar}>
                {language.length ?
                <NewsContent currentNewsPageID={newsPageID} setSnackbar={setSnackbar} language={language}
                             setSpinner={setSpinner}/> : <Intro changeLanguage={setLanguage}/>}
            </Content>
            <ShowSnackbar open={showSnackbar} message={message} setSnackbar={setSnackbar}/>
        </>
    );
}

export default App;
