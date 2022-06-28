import React from 'react';
import MyCollection from './MyCollection/MyCollection';
import ThreadsView from './Threads/ThreadsView';
import Catalog from './PublicCatalog/Catalog.jsx';

function UserMain({ catalog }) {
  console.log(catalog);
  return (
    <div>
      <MyCollection />
      <Catalog />
      <ThreadsView />
    </div>
  );
}

export default UserMain;
