import React, { useState } from 'react';
import MyCollectionList from './MyCollectionList';
import MyCollectionSearch from './MyCollectionSearch';

function MyCollection({
  currentUser, myCollection, getMyCollection,
  toggleGameView, toggleThreadsView,
}) {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');

  const setFilters = (search, gen, cat, stat) => {
    setQuery(search);
    setGenre(gen);
    setCategory(cat);
    setStatus(stat);
  };

  return (
    <div>
      <h2>My Collection</h2>
      <MyCollectionSearch
        myCollection={myCollection}
        setFilters={setFilters}
        getMyCollection={getMyCollection}
      />
      <div id="collectionList">
        <MyCollectionList
          myCollection={myCollection}
          query={query}
          genre={genre}
          category={category}
          status={status}
          currentUser={currentUser}
          toggleGameView={toggleGameView}
          toggleThreadsView={toggleThreadsView}
          getMyCollection={getMyCollection}
        />
      </div>
    </div>
  );
}

export default MyCollection;
