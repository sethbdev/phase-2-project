import React from "react";
import { Link } from "react-router-dom";

const SpookyStories = ({ id, title, author, link, image, content }) => {
  return (
    <div className="spooky-story-card">
      <h2>{title}</h2>
      <h3>By {author}</h3>
      <Link to={`/stories/${id}`}>
        <img classname="spooky-image" src={image} alt={`${title} by ${author}`} />
      </Link>
      <p></p>
    </div>
  );
};

export default SpookyStories;
