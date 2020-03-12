import React from 'react';
import {ImageListImage} from "@rmwc/image-list";
import Oops from '../assets/images/oops.jpg';
import Header from "../assets/images/newspage-header.png";


export const ErrorImage = () => (
    <>
        <ImageListImage src={Oops}/>
    </>
);

export const HeaderImage = () => (
    <>
        <ImageListImage src={Header}/>
    </>
);
