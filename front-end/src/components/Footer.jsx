import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    appFooter: {
        width: "99vw", 
        background: '#1976d2',
        padding: '20px 0',
        marginTop: '20px',
        textAlign: 'center',
    },
  });



export const Footer = () => {
    const classes = useStyles();
    return(
        <footer className={classes.appFooter}>
            <Typography variant="h6">
                By: Patrick Reis
            </Typography>
        </footer>
    )}
