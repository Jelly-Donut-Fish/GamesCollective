import React from 'react';
import CatalogContainer from '../../containers/CatalogContainer.js';
import MyCollectionContainer from '../../containers/MyCollectionContainer.js';

function UserMain() {
  return (
    <div>
      <MyCollectionContainer />
      <CatalogContainer />
    </div>
  );
}

export default UserMain;
