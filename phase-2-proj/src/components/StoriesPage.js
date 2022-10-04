import React, { useState, useEffect } from "react";
import SpookyStoriesContainer from "./SpookyStoriesContainer";
import StoriesForm from "./StoriesForm";

const StoriesPage = () => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/spookystories")
      .then((res) => res.json())
      .then((stories) => setStories(stories));
  }, []);

  function onStoryAdd(newStoryObj) {
    setStories([...stories, newStoryObj]);
  }

<StoriesForm onStoryAdd={onStoryAdd}/>

  return (
    <div>
      <SpookyStoriesContainer stories={stories}/>
    </div>
    )
};

export default StoriesPage;