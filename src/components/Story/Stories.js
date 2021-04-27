import React, { useEffect, useState } from 'react';
import { Story } from './Story';
import { getStoriesById } from '../../services/api';

export const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoriesById().then((ids) => setStoryIds(ids));
  }, []);

  // return <Story storyId='26957215' />;

  return storyIds
    .slice(0, 10)
    .map((storyId, i) => <Story key={i} storyId={storyId} />);
};
