import React from 'react';
import {Elevation} from '@rmwc/elevation';
import '@material/elevation/dist/mdc.elevation.css';
import logo from '../assets/images/news-page.jpg';
import styled from 'styled-components';


const StyledImg = styled.img`
width: 80%;
margin-top:6rem;
display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ImageBumper = () => (
    <StyledImg src={logo}/>
);

export default ImageBumper;
