import React from 'react'
import styled from 'styled-components';
import {Elevation} from '@rmwc/elevation';

const StyledElevation = styled(Elevation)`
margin-top: 6rem;
margin-left: 12rem;
margin-bottom: 6rem;
width: 12rem;
height: 8rem;
display: flex;
justify-content: center;
align-items: center;
`;

function LanguageChooser({language, short, changeLanguage}) {
    const [elevation, setElevation] = React.useState(6);
    return (
        <StyledElevation onClick={() => {
            console.log(short);
            changeLanguage(short)
        }}
                         z={elevation}
                         transition
                         onMouseOver={() => setElevation(24)}
                         onMouseOut={() => setElevation(6)}> {language}</StyledElevation>
    )
}

export default LanguageChooser;