import React from "react";

const StorySearch = ({ setStorySearch }) => {
  return (
    <div className="searchbar">
      <label type="search">Search Stories: </label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        onChange={(e) => setStorySearch(e.target.value)}
      />
    </div>
  );
};

export default StorySearch;
