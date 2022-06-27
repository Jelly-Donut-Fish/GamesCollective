import React from 'react';
import MyCollectionList from './MyCollectionList';
import MyCollectionSearch from './MyCollectionSearch';

function MyCollection() {
  return (
    <div>
      <h2>My Collection</h2>
      <MyCollectionSearch />
      <MyCollectionList />
    </div>
  );
}

export default MyCollection;
