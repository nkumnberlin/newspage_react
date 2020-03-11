import React from 'react';
import {
    TopAppBar,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarNavigationIcon,
    TopAppBarTitle,
    TopAppBarFixedAdjust
} from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@rmwc/icon/icon.css';
import styled from 'styled-components';

const AppBarTitle = styled(TopAppBarTitle)`
color: #ffffff !important;
cursor: pointer
`;

const AppBarEnd = styled(TopAppBarTitle)`
color: #ffffff !important;
padding-right: 2rem;
cursor: pointer
`;


const RenderTopAppBar = (props) => {
    const {hideSideBar, showSideBar, changeLanguage} = props;

    return (
        <>
            <TopAppBar short>
                <TopAppBarRow>
                    <TopAppBarSection alignStart>
                        <TopAppBarNavigationIcon icon="menu" onClick={() => hideSideBar(!showSideBar)}/>
                        <AppBarTitle>The - New - Newspage</AppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection alignEnd>
                        <AppBarTitle>Change Language:</AppBarTitle>
                        <AppBarTitle onClick={() => changeLanguage("de")}>DE</AppBarTitle>
                        <AppBarEnd onClick={() => changeLanguage("en")}>EN</AppBarEnd>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust/>
        </>
    );
};

export default RenderTopAppBar;
