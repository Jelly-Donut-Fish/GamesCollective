import React from 'react';

function UserInfo({ username, userphoto }) {
  return (
<<<<<<< HEAD
    <>
      <img src={userphoto} alt={`${username}'s profile`} className="userProfilePic" />
      <h3>{username}</h3>
    </>
=======
    <div className="userInfo">
      <div className="userImage">
        <img src={userphoto} alt={`${username}'s profile`} className="profilePic" />
      </div>
      <div className="userDeets">
        <h3 className="userName">{username}</h3>
      </div>
    </div>
>>>>>>> 8d397b36b52d1540ef155f6000abcf58c6a2989d
  );
}

export default UserInfo;
