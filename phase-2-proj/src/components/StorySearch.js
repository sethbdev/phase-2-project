import React from "react";

const StorySearch = ({ setStorySearch }) => {
  return (
    <div className="searchbar">
      <label className="search-label" type="search">Search Stories: </label>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onChange={(e) => setStorySearch(e.target.value)}
      />
    </div>
  );
};

export default StorySearch;
