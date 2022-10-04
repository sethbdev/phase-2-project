import React from "react";

const SpookyStories = ({ story }) => {
  const { id, title, author, link, image, content } = story;

  return (
    <div className="spooky-story-card">
      <h1>{title}</h1>
      <h2>By {author}</h2>
      <img src={image} alt={`${title} by ${author}`} />
      <h3>{content}</h3>
      <h5>{link}</h5>
    </div>
  );
};

export default SpookyStories;
