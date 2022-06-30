import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyCollectionList from './MyCollectionList';
import MyCollectionSearch from './MyCollectionSearch';

function MyCollection({
  currentUser, myCollection, getMyCollection,
  toggleGameView, toggleThreadsView,
}) {
  console.log(currentUser);
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

  useEffect(() => {
    const userID = currentUser.site_id || 1;
    console.log('userID');
    console.log(userID, typeof userID);
    console.log(currentUser.site_id, typeof currentUser.site_id);
    axios.get(`/games_users/${userID}`)
      .then((games) => getMyCollection(games.data.results))
      .catch((err) => console.error(err));
  }, []);

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
