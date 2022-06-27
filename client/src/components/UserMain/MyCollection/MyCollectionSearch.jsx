import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function MyCollectionSearch() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  // set search string
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // set filter
  const filterHandler = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="user filter">
        <select name="filters" id="user filter" onChange={filterHandler}>
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
        <input type="text" placeholder="Search Your Collection" id="filter collection" onChange={searchHandler} />
      </label>
      <label htmlFor="search_collection" />
      <button id="search_collection" type="button">
        <AiOutlineSearch />
      </button>

    </div>
  );
}

export default MyCollectionSearch;
