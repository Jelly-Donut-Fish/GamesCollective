import React from 'react';

function UserInfo({ currentUser, userphoto }) {
  return (
    <div className="userInfo">
      <div className="userImage">
        { currentUser.image_url
          ? <img src={currentUser.image_url} alt={`${currentUser.username}'s profile`} className="profilePic" />
          : <img src={userphoto} alt={`${currentUser.username}'s profile`} className="profilePic" />}
      </div>
      <div className="userDeets">
        {currentUser.username
          ? <h3 className="userName">{currentUser.username}</h3>
          : <h3 className="userName">Anonymous Gamer</h3>}
        { currentUser.bio
          ? <p>{currentUser.bio}</p>
          : <p> Games Collective&lsquo;s Biggest Fan </p>}
      </div>
    </div>
  );
}

export default UserInfo;
