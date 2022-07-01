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
      <label htmlFor="filter collection">
        <input className="innerSearch" onChange={handleChange} type="text" placeholder="Search for Games" id="filter collection" />
      </label>
    </div>
  );
}

export default Search;
