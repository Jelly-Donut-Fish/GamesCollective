import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, updateProfile, signInAnonymously } from 'firebase/auth';
import {
  query, collection, getDocs, where,
} from 'firebase/firestore';
import { auth, db, updateUser } from '../../authentication/firebase';

function UpdatUserProfile({ currentUser, getUser }) {
  const [user, loading, error] = useAuthState(auth);
  const [displayName, setName] = useState(currentUser.username);
  const [photoURL, setPhotoURL] = useState(currentUser.image_url);
  const [bio, setBio] = useState(currentUser.bio);
  const navigate = useNavigate();

  const profileUpdate = async () => {
    const authenticate = getAuth();
    const res = authenticate.user;
    updateProfile(user, { photoURL, displayName })
      .then(() => {
        console.log('user updated');
      })
      .then(() => {
        const loggedUser = {
          username: displayName,
          email: user.email,
          site_id: user.uid,
          image_url: photoURL,
          bio,
        };
        console.log('logged user', loggedUser);
        getUser(loggedUser);
      })
      .catch((err) => {
        console.log('error in update Profile', err);
      });
      // then post to db
    // navigate('/');
  };

  return (
    <div className="register">
      <nav className="nav-bar">
        <h3>Games Collection</h3>
        <br />
        <Link className="link" to="/">Home</Link>
      </nav>
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={displayName || ''}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          className="register__textBox"
          value={photoURL || ''}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Profile Pic URL"
        />
        <input
          type="text"
          className="register__textBox"
          value={bio || ''}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <button type="button" className="register__btn" onClick={profileUpdate}>
          Update Profile
        </button>
      </div>
    </div>
  );
}
export default UpdatUserProfile;
