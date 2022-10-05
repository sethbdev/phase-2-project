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
      <Link to={`/stories/${id}`}>
        <img className="spooky-image" src={image} alt={`${title} by ${author}`} />
      </Link>
      <p></p>
      <button className="delete-button" onClick={handleBackendDelete}>
        Delete
      </button>
      <p></p>
    </div>
  );
};

export default SpookyStories;
