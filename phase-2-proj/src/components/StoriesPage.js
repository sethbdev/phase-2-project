import React, { useState, useEffect } from "react";
import SpookyStoriesContainer from "./SpookyStoriesContainer";
import StorySearch from "./StorySearch";

const StoriesPage = () => {
  const [stories, setStories] = useState([]);
  const [storySearch, setStorySearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  function handleDelete(id) {
    const newStories = stories.filter((story) => story.id !== id);
    setStories(newStories);
  }

  const displayedStories = stories.filter((story) => {
    return (
      story.title.toLowerCase().includes(storySearch.toLowerCase()) ||
      story.author.toLowerCase().includes(storySearch.toLowerCase())
    );
  });

  return (
    <div>
      <h1 className="pageTitle">Spooky Stories</h1>
      <StorySearch setStorySearch={setStorySearch} />
      <SpookyStoriesContainer
        stories={displayedStories}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default StoriesPage;
