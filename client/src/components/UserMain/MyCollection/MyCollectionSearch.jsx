import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';

function MyCollectionSearch({ setFilters }) {
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  // set submit handler
  const submitSearch = (e) => {
    e.preventDefault();
    setFilters(search);
  };

  // set search string
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filterHandler = (e) => {
    e.preventDefault();
    if (e.target.id === 'genre') {
      setFilters(null, e.target.value);
    }
    if (e.target.id === 'category') {
      setFilters(null, null, e.target.value);
    }
    if (e.target.id === 'status') {
      setFilters(null, null, null, e.target.value);
    }
  };

  const getAllGenres = () => {
    const promise1 = axios.get('/genres');
    const promise2 = axios.get('/categories');
    const promise3 = axios.get('/platforms');
    Promise.all([promise1, promise2, promise3])
      .then((results) => {
        setGenres(results[0]);
        setCategories(results[1]);
        setPlatforms(results[2]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllGenres();
  }, []);

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
          <option value="" defaultValue="" hidden>Choose a genre</option>
          {genres.map((genre) => (
            <option value={genre}>{genre}</option>
          ))}
        </select>
      </label>
      <label htmlFor="category">
        <select name="filters" id="category" onChange={filterHandler}>
          <option value="" defaultValue="" hidden>Choose a category</option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </label>
      <label htmlFor="status">
        <select name="filters" id="status" onChange={filterHandler}>
          <option value="" defaultValue="">Choose a status</option>
          <option value="want">Want to Play</option>
          <option value="started">Started</option>
          <option value="playing">Playing</option>
          <option value="finished">Finished</option>
          <option value="purchased">Purchased</option>
        </select>
      </label>
    </div>
  );
}

export default MyCollectionSearch;
