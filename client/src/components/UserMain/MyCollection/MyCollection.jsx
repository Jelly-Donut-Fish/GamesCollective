import React, { useState } from 'react';
import MyCollectionList from './MyCollectionList';
import MyCollectionSearch from './MyCollectionSearch';

function MyCollection(props) {
  const [] = useState();

  return (
    <div>
      <h2>My Collection</h2>
      <MyCollectionSearch />
      <MyCollectionList />
    </div>
  );
}

export default MyCollection;
