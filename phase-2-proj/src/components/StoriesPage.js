import React, { useState, useEffect } from "react";
import SpookyStoriesContainer from "./SpookyStoriesContainer";

const StoriesPage = () => {
    
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  function handleDelete(id) {
    const newStories = stories.filter((story) => story.id !== id);
    setStories(newStories);
  }

  return (
    <div>
      <SpookyStoriesContainer stories={stories} handleDelete={handleDelete} />
    </div>
  );
};

export default StoriesPage;
