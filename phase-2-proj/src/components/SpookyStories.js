import React from "react";
import { Link } from "react-router-dom";

const SpookyStories = ({ id, title, author, image, handleDelete }) => {
  function handleBackendDelete() {
    fetch(`http://localhost:3000/stories/${id}`, {
      method: "DELETE",
    });
    handleDelete(id);
  }

  return (
    <div className="spooky-story-card">
      <h2>{title}</h2>
      <h3>By {author}</h3>
      <img
        className="spooky-image"
        src={image}
        alt={`${title} by ${author}`}
      />
      <div className="story-buttons-div">
        <Link to={`/stories/${id}`}>
          <button className="read-button">Read</button>
        </Link>
        <button className="delete-button" onClick={handleBackendDelete}>Delete</button>
      </div>
    </div>
  );
};

export default SpookyStories;
