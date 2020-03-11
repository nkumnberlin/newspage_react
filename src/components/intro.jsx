import React from 'react';
import LanguageChooser from "./languageChooser";
import styled from 'styled-components';
import {Elevation} from '@rmwc/elevation';
import {Grid, GridCell} from '@rmwc/grid';
import {Typography} from '@rmwc/typography';

const StyledTypo = styled(Typography)`
font-size: 4rem;
`;
const StyledElevation = styled(Elevation)`
margin-top: 4rem;
text-align: center

`;

const ChooseLanguageButton = (language, short, chooseLang) => (
    <GridCell span={6} align={"middle"}>
        <LanguageChooser language={language} short={short} changeLanguage={chooseLang}/>
    </GridCell>
)

const Intro = ({changeLanguage}) => (
        <>
            <StyledElevation z={1} style={{color: '#7298b7'}}>
                <StyledTypo use="roboto">Please choose a Language for your unfiltered news experience</StyledTypo>
                <Grid>
                    {ChooseLanguageButton("Deutsch", 'de', changeLanguage)}
                    {ChooseLanguageButton("Englisch", 'en', changeLanguage)}
                </Grid>
            </StyledElevation>
        </>
    )
;

export default Intro;