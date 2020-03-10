import React from 'react';
import {Snackbar, SnackbarAction} from '@rmwc/snackbar';
import '@material/snackbar/dist/mdc.snackbar.css';
import '@material/button/dist/mdc.button.css';

const showSnackbar = ({message, open, setSnackbar}) => (
    <Snackbar open={open} message={message} action={
        <SnackbarAction
            label="Dismiss"
            onClick={() => console.log('Click Me')}
        />
    }
              onClose={()=> setSnackbar({showSnackbar: false, message: ''})}
    />
);

export default showSnackbar;
