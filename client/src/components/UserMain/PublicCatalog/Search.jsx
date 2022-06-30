import React from 'react';
import axios from 'axios';

function Search({ setSearchQuery, setFilterBy, getCatalog, filterBy }) {
  let newCatalog;
  let queryString;
  const handleChange = function (event) {
    setSearchQuery(event.target.value);
    queryString = filterBy === 'title' || filterBy === '' ? event.target.value : '';
    axios({ method: 'get', url: '/games', baseURL: 'http://localhost:3000', params: { page: 1, count: 10, q: `${queryString}` } })
      .then((item) => {
        newCatalog = [...item.data.results];
        getCatalog({count: 10, page: 1, query: `${queryString}`, results: newCatalog});
      })
      .catch((err) => console.log(err));
  };

  const handleFilter = function (event) {
    setFilterBy(event.target.value);
  };

  return (
    <div>
      <label htmlFor="user filter">
        <select name="filters" id="user filter" onChange={handleFilter}>
          <option value="">Filter by</option>
          <option value="title">Title</option>
          <option value="genre">Genre</option>
          <option value="category">Category</option>
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
