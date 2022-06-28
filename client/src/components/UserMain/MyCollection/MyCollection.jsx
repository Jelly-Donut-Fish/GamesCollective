import React, { useState, useEffect } from 'react';
import MyCollectionList from './MyCollectionList';
import MyCollectionSearch from './MyCollectionSearch';

function MyCollection() {
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');



  const setDropDowns = (gen, cat, stat) => {
    const genreList = genres.slice();
    const categoryList = categories.slice();
    const statusList = statuses.slice();
    if (genreList.indexOf(gen) > -1) {
      genreList.push(gen);
    }
    if (categoryList.indexOf(cat) > -1) {
      categoryList.push(cat);
    }
    if (statusList.indexOf(stat) > -1) {
      statusList.push(stat);
    }
    setGenres(genreList);
    setCategories(categoryList);
    setStatuses(statusList);
  };

  const setFilters = (search, gen, cat, stat) => {
    if (search) {
      setQuery(search);
    }
    if (gen) {
      setGenre(gen);
    }
    if (cat) {
      setCategory(cat);
    }
    if (stat) {
      setStatus(stat);
    }
  };

  return (
    <div>
      <h2>My Collection</h2>
      <MyCollectionSearch
        genres={genres}
        categories={categories}
        statuses={statuses}
        setFilters={setFilters}
      />
      <MyCollectionList
        setDropDowns={setDropDowns}
        query={query}
        genre={genre}
        category={category}
        status={status}
      />
    </div>
  );
}

export default MyCollection;
