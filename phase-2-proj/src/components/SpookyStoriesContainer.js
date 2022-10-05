import React, { useState, useEffect } from "react";
import SpookyStories from "./SpookyStories";

const SpookyStoriesContainer = () => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  const storyCards = stories.map((story) => {
    return <SpookyStories 
      key={story.id}
      id={story.id}
      title={story.title}
      author={story.author}
      link={story.link}
      image={story.image}
      content={story.content} />;
  });

  return (
    <div className="spooky-stories-container">
      <h1>Spooky Stories</h1>
      {storyCards}
    </div>
  );
};

export default SpookyStoriesContainer;
