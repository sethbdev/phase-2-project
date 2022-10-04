import React from "react";
import SpookyStories from "./SpookyStories";

const SpookyStoriesContainer = ({ stories }) => {


  const storyCards = stories.map((story) => {
    return <SpookyStories key={story.id} story={story} />;
  });

  return (
    <div className="spooky-stories-container">
      <h1>Spooky Stories</h1>
      {storyCards}
    </div>
  );
};

export default SpookyStoriesContainer;
