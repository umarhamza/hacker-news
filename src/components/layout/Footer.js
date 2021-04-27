import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px'
  },
}));

export const Footer = () => {
    const classes = useStyles();
    return (
      <footer className={classes.root}>
          <Typography component='p' variant='body2' color='inherit'>
            © 2021 - Hacker News
          </Typography>
      </footer>
    );
}
