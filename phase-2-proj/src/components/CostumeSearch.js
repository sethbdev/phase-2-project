import React from "react";

const CostumeSearch = ({ setCostumeSearch }) => {
  return (
    <div className="searchbar">
      <label type="search">Search Costumes: </label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        onChange={(e) => setCostumeSearch(e.target.value)}
      />
    </div>
  );
};

export default CostumeSearch;
