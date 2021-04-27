import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getComment } from '../../services/api';
import { Meta } from '../meta/Meta';
import { createMarkup } from '../utils/utils';
import { Comments } from './Comments';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    padding: '15px',
  },
}));

export const Comment = ({ commentId }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    getComment(commentId).then((data) => data && data.type && setComment(data));
  }, []);

  const { text, kids } = comment;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {comment && !comment.deleted && (
        <>
          <Meta article={comment} />
          <Typography
            variant='body2'
            dangerouslySetInnerHTML={createMarkup(text)}
          />
          {kids && <Comments commentIds={kids} />}
        </>
      )}
    </div>
  );
};
