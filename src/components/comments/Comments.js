import React from 'react';
import { Comment } from './Comment';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: '10px',
    backgroundColor: '#f5f5f5',

    '& .MuiContainer-root': {
        paddingRight: '0 !important'
    }
  },
  title: {
    marginBottom: '10px',
  },
  comment: {
    paddingLeft: '20px',
  },
  marginBottom: {
    marginBottom: '20px',
  },
}));

export const Comments = ({ commentIds, root }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {root && (
        <Typography variant='h6' className={classes.title}>
          Comments
        </Typography>
      )}
      {commentIds.slice(0, 3).map(
        (id, i) =>
          id && (
            <div key={id} className={`${classes.marginBottom} ${root ? classes.comment : ''}`}>
              <Comment commentId={id} index={i} />
            </div>
          )
      )}
    </Container>
  );
};
