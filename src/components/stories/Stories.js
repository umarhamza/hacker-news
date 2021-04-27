import React, { useEffect, useState } from 'react';
import { Story } from './Story';
import { getStories } from '../../services/api';

export const Stories = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStories().then((ids) => setStoryIds(ids));
  }, []);

  return storyIds
    .slice(0, 10)
    .map((storyId, i) => <Story key={i} storyId={storyId} />);
};
