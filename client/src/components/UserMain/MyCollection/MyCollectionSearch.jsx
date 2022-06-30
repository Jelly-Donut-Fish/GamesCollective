import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';

function MyCollectionSearch({ myCollection, setFilters, getMyCollection }) {
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [platforms, setPlatforms] = useState([]);
  // set submit handler
  const submitSearch = (e) => {
    e.preventDefault();
    setFilters(search);
  };

  // set search string
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    getMyCollection([...myCollection]);
  };

  const filterHandler = (e) => {
    e.preventDefault();
    console.log(e.target.id, e.target.value);
    if (e.target.id === 'genre') {
      setFilters(null, e.target.value);
    }
    if (e.target.id === 'category') {
      setFilters(null, null, e.target.value);
    }
    if (e.target.id === 'status') {
      setFilters(null, null, null, e.target.value);
    }
    getMyCollection([...myCollection]);
  };

  const getAllGenres = () => {
    const promise1 = axios.get('/genres');
    console.log(promise1.then((results) => console.log(results)));
    const promise2 = axios.get('/categories');
    // const promise3 = axios.get('/platforms');
    Promise.all([promise1, promise2])
      .then((res) => {
        console.log(res[0].data.results);
        setGenres(res[0].data.results);
        setCategories(res[1].data.results);
        // setPlatforms(results[2]);
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
            <option value={genre.name}>{genre.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="category">
        <select name="filters" id="category" onChange={filterHandler}>
          <option value="" defaultValue="" hidden>Choose a category</option>
          {categories.map((category) => (
            <option value={category.name}>{category.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="status">
        <select name="filters" id="status" onChange={filterHandler}>
          <option value="">Choose a status</option>
          <option value="Want to Play">Want to Play</option>
          <option value="Started">Started</option>
          <option value="Playing">Playing</option>
          <option value="Finished">Finished</option>
          <option value="Purchased">Purchased</option>
          <option value="''">Any</option>
        </select>
      </label>
    </div>
  );
}

export default MyCollectionSearch;
