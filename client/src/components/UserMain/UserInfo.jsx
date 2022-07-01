import React from 'react';

function UserInfo({ username, userphoto }) {
  return (
    <div className="userInfo">
      <div className="userImage">
        <img src={userphoto} alt={`${username}'s profile`} className="profilePic" />
      </div>
      <div className="userDeets">
        <h3 className="userName">{username}</h3>
      </div>
    </div>
  );
}

export default UserInfo;
