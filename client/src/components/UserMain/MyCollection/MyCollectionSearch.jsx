import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyCollectionSearch({ myCollection, setFilters, getMyCollection }) {
  const [search, setSearch] = useState('');
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [quer, setQuer] = useState('');
  const [gen, setGen] = useState('');
  const [cat, setCat] = useState('');
  const [stat, setStat] = useState('');
  // const [platforms, setPlatforms] = useState([]);
  // set submit handler
  const submitSearch = (e) => {
    e.preventDefault();
    console.log(quer, gen, cat, stat);
    setFilters(quer, gen, cat, stat);
    const myNewCollection = myCollection.slice();
    getMyCollection([...myNewCollection]);
  };

  const filterHandler = (e) => {
    e.preventDefault();
    console.log('filter', e.target.value);
    if (e.target.id === 'title') {
      setQuer(e.target.value);
    }
    if (e.target.id === 'genre') {
      setGen(e.target.value);
    }
    if (e.target.id === 'category') {
      setCat(e.target.value);
    }
    if (e.target.id === 'status') {
      setStat(e.target.value);
    }
  };

  const getAllGenres = () => {
    const promise1 = axios.get('/genres');
    const promise2 = axios.get('/categories');
    // const promise3 = axios.get('/platforms');
    Promise.all([promise1, promise2])
      .then((res) => {
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
        <input type="text" placeholder="Search for a title" id="title" onChange={filterHandler} />
      </label>
      <label htmlFor="searchTitle" />

      <label htmlFor="genre">
        <select name="filters" id="genre" onChange={filterHandler}>
          <option value="" defaultValue="">Choose a genre</option>
          {genres.map((genre) => (
            <option value={genre.name}>{genre.name}</option>
          ))}
        </select>
      </label>
      <label htmlFor="category">
        <select name="filters" id="category" onChange={filterHandler}>
          <option value="" defaultValue="">Choose a category</option>
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
        </select>
      </label>
      <button type="button" onClick={submitSearch}>Search</button>
    </div>
  );
}

export default MyCollectionSearch;
