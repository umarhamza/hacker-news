import React, { useEffect, useState } from 'react';
import { Story } from '../components/Story/Story';
import { getStoriesById } from '../services/api';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoriesById().then((ids) => setStoryIds(ids));
  }, []);

  return storyIds
    .slice(0, 10)
    .map((storyId, i) => <Story key={i} storyId={storyId} />);
};
