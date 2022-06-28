import React from 'react';
<<<<<<< HEAD
import MyCollection from './MyCollection/MyCollection';
import ThreadsView from './Threads/ThreadsView';
import Catalog from './PublicCatalog/Catalog.jsx';
=======
import CatalogContainer from '../../containers/CatalogContainer.js';
import MyCollectionContainer from '../../containers/MyCollectionContainer.js';
>>>>>>> ae29445871c7e0c709788bf3750cd5bedb041e37

function UserMain() {
  return (
    <div>
<<<<<<< HEAD
      <MyCollection />
      <Catalog />
      <ThreadsView />
=======
      <MyCollectionContainer />
      <CatalogContainer />
>>>>>>> ae29445871c7e0c709788bf3750cd5bedb041e37
    </div>
  );
}

export default UserMain;
