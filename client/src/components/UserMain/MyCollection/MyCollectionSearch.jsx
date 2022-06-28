import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function MyCollectionSearch({ genres, categories, statuses }) {
  const [search, setSearch] = useState('');
  // set submit handler
  const submitSearch = (e) => {
    e.preventDefault();
    // filterMyCollection(search);
  };

  // set search string
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  // set filter
  const filterHandler = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    // call function to lift state here
  };

  return (
    <div>
      <label htmlFor="title">
        <input type="text" placeholder="Search for a title" id="title" onChange={searchHandler} />
      </label>
      <label htmlFor="searchTitle" />
      <button id="searchTitle" type="button" onClick={submitSearch}>
        <AiOutlineSearch />
      </button>

      <label htmlFor="genre">
        <select name="filters" id="genre" onChange={filterHandler}>
          <option value="" disabled selected hidden>Choose a genre</option>
          {genres.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
      </label>
      <label htmlFor="category">
        <select name="filters" id="category" onChange={filterHandler}>
          <option value="" disabled selected hidden>Choose a genre</option>
          {categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </label>
      <label htmlFor="status">
        <select name="filters" id="status" onChange={filterHandler}>
          <option value="" disabled selected hidden>Choose a genre</option>
          {statuses.map(status => (
            <option value={status}>{status}</option>
          ))}
        </select>
      </label>
      <label htmlFor="platform">
        <select name="filters" id="platform" onChange={filterHandler}>
          <option value="" disabled selected hidden>Choose a genre</option>
          {platforms.map(platform => (
            <option value={platform}>{platform}</option>
          ))}
        </select>
      </label>

    </div>
  );
}

export default MyCollectionSearch;
