import React from "react";

const SpookyStories = ({ story }) => {
  const { id, title, author, content } = story;

  return (
    <div className="spooky-story-card">
      <h1>{title}</h1>
      <h2>By {author}</h2>
      <h3>{content}</h3>
    </div>
  );
};

export default SpookyStories;
