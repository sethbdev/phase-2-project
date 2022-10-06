import React from "react";

const CostumeSearch = ({ setCostumeSearch }) => {
  return (
    <div className="searchbar">
      <label className="search-label" type="search">Search Costumes: </label>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onChange={(e) => setCostumeSearch(e.target.value)}
      />
    </div>
  );
};

export default CostumeSearch;
