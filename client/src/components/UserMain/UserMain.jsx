import React from 'react';
import UserInfo from './UserInfo';
import MyCollection from './MyCollection/MyCollection';
import Catalog from './PublicCatalog/Catalog';

function UserMain({ catalog }) {
  console.log(catalog);
  return (
    <>
      <UserInfo />
      <MyCollection />
      <Catalog />
    </>
  );
}

export default UserMain;
