import React from 'react';

function Search({ setSearchQuery }) {
  const handleChange = function (event) {
    setSearchQuery(event.target.value);
  };
  return (
    <div>
      <label htmlFor="user filter">
        <select name="filters" id="user filter">
          <option value="">Filter by</option>
          <option value="title">Title</option>
          <option value="genre">Genre</option>
          <option value="category">Category</option>
          <option value="status">Status</option>
          <option value="platform">Platform</option>
          <option value="service">Game Library</option>
        </select>
      </label>
      <label htmlFor="filter collection">
        <input onChange={handleChange} type="text" placeholder="Filter Collection" id="filter collection" />
      </label>
    </div>
  );
}

export default Search;
