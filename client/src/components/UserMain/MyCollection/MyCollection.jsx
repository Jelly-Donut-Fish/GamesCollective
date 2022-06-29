import React, { useState } from 'react';
import MyCollectionList from './MyCollectionList';
import MyCollectionSearch from './MyCollectionSearch';

function MyCollection({
  myCollection, getMyCollection, toggleGameView, toggleThreadsView,
}) {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');

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
      <MyCollectionSearch setFilters={setFilters} />
      <MyCollectionList
        myCollection={myCollection}
        query={query}
        genre={genre}
        category={category}
        status={status}
        toggleGameView={toggleGameView}
        toggleThreadsView={toggleThreadsView}
        getMyCollection={getMyCollection}
      />
    </div>
  );
}

export default MyCollection;
