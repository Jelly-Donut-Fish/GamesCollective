import React, { useState, useEffect } from 'react';
import MyCollectionList from './MyCollectionList';
import MyCollectionSearch from './MyCollectionSearch';

function MyCollection(props) {
  const [searchString, setSearchString] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  // take in search parameters, pass to collection list
  const filterMyCollection = (query, filter) => {
    setSearchString(query);
    setSearchFilter(filter);
  };

  return (
    <div>
      <h2>My Collection</h2>
      <MyCollectionSearch filterMyCollection={filterMyCollection} />
      <MyCollectionList searchString={searchString} searchFilter={searchFilter} />
    </div>
  );
}

export default MyCollection;
