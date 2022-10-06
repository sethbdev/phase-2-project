import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StoryDetail = () => {
  const [story, setStory] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/stories/${id}`)
      .then((res) => res.json())
      .then((data) => setStory(data));
  }, [id]);

  if (!story) return <h2>BOO!</h2>;

  const { title, author, image, content } = story;

  return (
    <div className="story-detail-page">
      <h1>{title}</h1>
      <h2>{author}</h2>
      <img src={image} alt={title} />
      <p className="story-detail-content">{content}</p>
    </div>
  );
};

export default StoryDetail;
