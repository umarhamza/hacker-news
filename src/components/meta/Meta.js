import React from 'react';
import Moment from 'react-moment';

import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 0,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Meta = ({ article: { by, time, type } }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {by && (
        <>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={by}
              secondary={
                <Typography component='span' variant='body2'>
                  <Moment unix format='MMM, DD YYYY • hh:mm a'>
                    {time}
                  </Moment>
                  <br />
                  Type: {type}
                </Typography>
              }
            />
          </ListItem>
        </>
      )}
    </List>
  );
};
