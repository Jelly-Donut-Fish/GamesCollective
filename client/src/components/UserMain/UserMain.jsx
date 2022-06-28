import React from 'react';
import MyCollection from './MyCollection/MyCollection';
<<<<<<< HEAD
import ThreadsView from './Threads/ThreadsView';
=======
import Catalog from './PublicCatalog/Catalog.jsx';
>>>>>>> fddbe0c6e23f0382c0efbedf256d9a4e135f15e0

function UserMain({ catalog }) {
  console.log(catalog);
  return (
<<<<<<< HEAD
    <>
      <MyCollection />
      <ThreadsView />
    </>
=======
    <div>
      <MyCollection />
      <Catalog />
    </div>
>>>>>>> fddbe0c6e23f0382c0efbedf256d9a4e135f15e0
  );
}

export default UserMain;
