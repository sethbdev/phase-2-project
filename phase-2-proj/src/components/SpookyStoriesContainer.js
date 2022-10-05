import React from "react";
import SpookyStories from "./SpookyStories";

const SpookyStoriesContainer = ({ stories, handleDelete }) => {
  
  const storyCards = stories.map((story) => {
    return (
      <SpookyStories {...story} key={story.id} handleDelete={handleDelete} />
    );
  });

  return (
    <div className="spooky-stories-container">
      <h1>Spooky Stories</h1>
      {storyCards}
    </div>
  );
};

export default SpookyStoriesContainer;
