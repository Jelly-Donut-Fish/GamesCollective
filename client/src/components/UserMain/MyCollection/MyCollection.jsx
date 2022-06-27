import React, { useState } from 'react';
import MyCollectionList from './MyCollectionList';
import MyCollectionSearch from './MyCollectionSearch';

function MyCollection(props) {
  const [searchString, setSearchString] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  // take in search parameters, pass to collection list
  const filterMyCollection = () => {

  }

  return (
    <div>
      <h2>My Collection</h2>
      <MyCollectionSearch />
      <MyCollectionList />
    </div>
  );
}

export default MyCollection;
