import React from 'react';
import MyCollection from './MyCollection/MyCollection';
import Catalog from './PublicCatalog/Catalog.jsx';

function UserMain({ catalog }) {
  console.log(catalog);
  return (
    <div>
      <MyCollection />
      <Catalog />
    </div>
  );
}

export default UserMain;
