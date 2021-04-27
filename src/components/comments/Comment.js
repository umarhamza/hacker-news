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

export const Comment = ({ commentId, index }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    getComment(commentId).then((data) => data && data.type && setComment(data));
  }, []);

  const { text, kids } = comment;
  const classes = useStyles();

  console.log(comment, comment.deleted);

  return (
    <>
      <div className={classes.root}>
        {index + 1}
        {comment && !comment.deleted && <Meta article={comment} />}
        <Typography
          variant='body2'
          dangerouslySetInnerHTML={createMarkup(text)}
        />
      </div>
      {kids && <Comments commentIds={kids} />}
    </>
  );
};
