import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const StoriesForm = () => {
  const [newStoryTitle, setNewStoryTitle] = useState("");
  const [newStoryAuthor, setNewStoryAuthor] = useState("");
  const [newStoryImage, setNewStoryImage] = useState("");
  const [newStoryContent, setNewStoryContent] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      title: newStoryTitle,
      author: newStoryAuthor,
      image: newStoryImage,
      content: [newStoryContent],
    };
    fetch("http://localhost:3000/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newStory) => {
        history.push(`/stories/${newStory.id}`);
      });
  }

  return (
    <div className="stories-form">
      <h1 className="pageTitleForm">Add Your Own Spooky Story</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Title: </label>
        <input
          className="form-input"
          type="text"
          id="title"
          value={newStoryTitle}
          onChange={(e) => setNewStoryTitle(e.target.value)}
        />
        <label className="form-label">Author: </label>
        <input
          className="form-input"
          type="text"
          id="author"
          value={newStoryAuthor}
          onChange={(e) => setNewStoryAuthor(e.target.value)}
        />
        <label className="form-label">Image: </label>
        <input
          className="form-input"
          type="text"
          id="image"
          value={newStoryImage}
          onChange={(e) => setNewStoryImage(e.target.value)}
        />
        <label className="form-label">Story: </label>
        <textarea
          className="form-input"
          type="text"
          id="story"
          value={newStoryContent}
          onChange={(e) => setNewStoryContent(e.target.value)}
        />
        <div>
          <button className="submit-button" type="submit">
            Submit Story
          </button>
        </div>
      </form>
    </div>
  );
};

export default StoriesForm;
