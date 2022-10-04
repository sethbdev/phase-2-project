import React, { useState, useEffect } from "react";
import SpookyStories from "./SpookyStories";

const SpookyStoriesContainer = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/spookystories")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

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
