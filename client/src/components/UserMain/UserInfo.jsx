import React from 'react';

function UserInfo({ username, userphoto }) {
  return (
    <>
      <img src={userphoto} alt={`${username}'s profile`} />
      <h3>{username}</h3>
    </>
  );
}

export default UserInfo;
