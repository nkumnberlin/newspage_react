import React, {useState, useEffect} from 'react';
import TopAppBar from './components/topAppBar';
import styled from 'styled-components';
import RenderNavBar from "./components/sidebar";
import NewsContent from "./components/newsContent";
import {awsQueryNewspages} from "./api";
import '@material/list/dist/mdc.list.css';
import {List, ListItem, ListItemMeta, ListDivider} from '@rmwc/list';
import {Switch} from '@rmwc/switch';
import '@material/switch/dist/mdc.switch.css';
import '@material/form-field/dist/mdc.form-field.css';
import {Typography} from '@rmwc/typography';
import '@material/typography/dist/mdc.typography.css';
import {Button} from '@rmwc/button';
import '@material/button/dist/mdc.button.css';

const Content = styled.div`
  display: block;
 padding: ${props => (props.showSideBar ? '0 2rem 0 calc(256px + 32px)' : '2rem')};
`;

const ContainerIntro = styled.div`
margin-top: 4rem;
width: 50% !important;
margin-left: 30rem;`;

const StyledButton = styled(Button)`
  display: block;
  margin-left: auto;
  margin-right: auto;`;

const StlyedTypography = styled.h1`
margin-top: 2rem !important;
 text-align: center;`;

const getNewspages = () => {
    const query = {
        language: 'de',
        category: 'general'
    };
    return awsQueryNewspages(query);
};


function App() {
    const [sources, setSources] = useState({});
    const [newsPageID, setNewsPageID] = useState({});
    const [hideSideBar, setHideSideBar] = useState(false);

    const languages = [{
        id: "de", name: "Deutsch"
    }, {id: "en", name: "Englisch"}];
    const [languageChecked, setLanguageChecked] = React.useState({Deutsch: false, Englisch: false});
    // const categorys = [{
    //     id: "business",
    //     name: "Wirtschaft"
    // }, {
    //     id: "entertainment",
    //     name: "Unterhaltung"
    // }, {
    //     id: "general",
    //     name: "Allgemein"
    // }, {
    //     id: "health",
    //     name: "Gesundheit"
    // }, {
    //     id: "science",
    //     name: "Wissenschaft"
    // }, {
    //     id: "sports",
    //     name: "Sport"
    // }, {
    //     id: "technology",
    //     name: "Technologie"
    // }];
    // const [categoryChecked, setCategoryChecked] = React.useState({
    //         Wirtschaft: false, Unterhaltung: false, Allgemein: false, Gesundheit: false,
    //         Wissenschaft: false, Sport: false, Technologie: false
    //     }
    // );

    useEffect(() => {
        async function fetchNewsPages() {
            try {
                const {sources} = await getNewspages();
                setSources(sources);
            } catch (e) {
                console.error("Error", e);
            }
        }
        // fetchNewsPages();
    }, []);

    const SwitchForIntro = (array, namesChecked, functionChange) => (
        <List>
            {array.map((key) => (
                <ListItem
                    key={key.id}
                    onClick={() =>
                        functionChange({...namesChecked, [key.name]: !namesChecked[key.name]})
                    }
                >
                    {key.name}
                    <ListItemMeta>
                        <Switch checked={namesChecked[key.name]} readOnly/>
                    </ListItemMeta>
                </ListItem>
            ))}
        </List>
    );

    // const Intro = () => {
    //     return (
    //         <ContainerIntro>
    //             <StlyedTypography use="headline4">Wählen Sie bitte die Sprache der News: </StlyedTypography>
    //             {SwitchForIntro(languages, languageChecked, setLanguageChecked)}
    //             <ListDivider/>
    //             <br/>
    //             <StlyedTypography use="headline4">Wählen Sie bitte die gewünschten Resorts: </StlyedTypography>
    //             {SwitchForIntro(categorys, categoryChecked, setCategoryChecked)}
    //             <StyledButton label="Bestätigen" unelevated/>
    //         </ContainerIntro>
    //     );
    // };


    return (
        <>
            <TopAppBar hideSideBar={setHideSideBar} showSideBar={hideSideBar}/>
            <RenderNavBar sources={sources} selectNewsPage={setNewsPageID} showSideBar={hideSideBar}
                          hideSideBar={hideSideBar}/>
            <Content showSideBar={hideSideBar}>
                {/*<Intro/>*/}
                {newsPageID.length && <NewsContent currentNewsPageID={newsPageID}/>}
            </Content>
        </>
    );
}

export default App;
