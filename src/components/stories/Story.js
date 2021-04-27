import React, { useEffect, useState } from 'react';
import { getStory } from '../../services/api';
import { Meta } from '../meta/Meta';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Comments } from '../comments/Comments';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionDetails: {
    padding: '0 0 20px 0',
    display: 'block'
  },
}));

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => {
      if (data && data.url) {
        setStory(data);
      }
    });
  }, []);

  const classes = useStyles();
  const { title, kids, id, url } = story;

  return story && url ? (
    <Accordion data-id={id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <div>
          <Meta article={story} />
          {kids && <Comments commentIds={kids} root />}
        </div>
      </AccordionDetails>
    </Accordion>
  ) : null;
};
