import React, { useState, useEffect } from 'react';
import MyCollectionList from './MyCollectionList';
import MyCollectionSearch from './MyCollectionSearch';

function MyCollection(props) {
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');

  const setDropDowns = (genre, category, status) => {
    var genreList = genres.slice();
    var categoryList = categories.slice();
    var statusList = statuses.slice();
    if (genreList.indexOf(genre) > -1) {
      genreList.push(genre);
    };
    if (categoryList.indexOf(category) > -1) {
      categoryList.push(category);
    };
    if (statusList.indexOf(status) > -1) {
      statusList.push(category);
    };
    setGenres(genreList);
    setCategories(categoryList);
    setStatuses(statusList);
  };

  const setFilters = (search, genre, category, status) => {
    if (search) {
      setQuery(search);
    };
    if (genre) {
      setGenre(genre);
    }
    if (category) {
      setCategory(category);
    };
    if (status) {
      setStatus(status);
    };
  }

  return (
    <div>
      <h2>My Collection</h2>
      <MyCollectionSearch genres={genres} categories={categories} statuses={statuses}/>
      <MyCollectionList setDropDowns={setDropDowns} />
    </div>
  );
}

export default MyCollection;
