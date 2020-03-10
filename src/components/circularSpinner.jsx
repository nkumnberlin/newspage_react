import React from 'react';
import {CircularProgress} from '@rmwc/circular-progress';
import '@rmwc/circular-progress/circular-progress.css';

const Spinner = ({showSpinner}) => (
    <>
        {showSpinner && <CircularProgress size={72}/>}
    </>
);
export default Spinner;
