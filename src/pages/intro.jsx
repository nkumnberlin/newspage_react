import React from 'react';
import LanguageChooser from "../components/languageChooser";
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
//somehow GridCell is bugged?
const StyledGridCell = styled(GridCell)`
display: table;
margin: 0 auto;
`;



const ChooseLanguageButton = (language, short, chooseLang) => (
    <StyledGridCell desktop={6} phone={4} align={"middle"}>
        <LanguageChooser language={language} short={short} changeLanguage={chooseLang}/>
    </StyledGridCell>
)

const Intro = ({changeLanguage}) => (
        <StyledElevation z={12} style={{color: '#7298b7'}}>
            <StyledTypo use="roboto">Please choose a Language for your unfiltered news experience</StyledTypo>
            <Grid>
                {ChooseLanguageButton("Deutsch", 'de', changeLanguage)}
                {ChooseLanguageButton("Englisch", 'en', changeLanguage)}
            </Grid>
        </StyledElevation>
    )
;

export default Intro;