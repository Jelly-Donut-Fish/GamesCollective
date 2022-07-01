import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { getAuth, updateProfile, signInAnonymously } from 'firebase/auth';
import { auth, db, updateUser } from '../../authentication/firebase';

function UpdatUserProfile({ currentUser, getUser }) {
  const [user, loading, error] = useAuthState(auth);
  const [displayName, setName] = useState(currentUser.username);
  const [photoURL, setPhotoURL] = useState(currentUser.image_url);
  const [bio, setBio] = useState(currentUser.bio);
  const navigate = useNavigate();

  const profileUpdate = () => {
    const loggedUser = currentUser;
    loggedUser.username = displayName;
    loggedUser.image_url = photoURL;
    loggedUser.bio = bio;

    // console.log('logged user', loggedUser);
    getUser(loggedUser);
    axios.put('/users', {
      user_id: loggedUser.site_id,
      bio: loggedUser.bio,
      username: loggedUser.username,
      img_url: loggedUser.image_url,
    })
      // .then(() => {
      //   navigate('/UserMain');
      // });
  };

  return (
    <div className="page">
      <nav className="nav-bar">
        <h3 className="pageTitle">Games Collective</h3>
        <br />
        <Link className="link" to="/UserMain">Home</Link>
      </nav>
      <div className="page_container">
        <input
          type="text"
          className="login_textBox"
          value={displayName || ''}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          className="login_textBox"
          value={photoURL || ''}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Profile Pic URL"
        />
        <textarea
          type="text"
          className="login_textBox"
          value={bio || ''}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <button type="button" className="login_btn" onClick={profileUpdate}>
          Update Profile
        </button>
      </div>
    </div>
  );
}
export default UpdatUserProfile;
