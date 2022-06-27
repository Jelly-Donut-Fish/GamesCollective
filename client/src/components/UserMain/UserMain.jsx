import React from 'react';
import MyCollection from './MyCollection/MyCollection';

function UserMain({ catalog }) {
  console.log(catalog);
  return (
    <div>
      <MyCollection />
    </div>
  );
}

export default UserMain;
