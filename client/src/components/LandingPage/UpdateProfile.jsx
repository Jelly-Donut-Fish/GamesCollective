import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, updateProfile, signInAnonymously } from 'firebase/auth';
import { auth } from '../../authentication/firebase';

function UpdateProfile( {currentUser} ) {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState(currentUser.email);
  const [displayName, setName] = useState(currentUser.displayName);
  const [photoURL, setPhotoURL] = useState(currentUser.photoURL);
  const navigate = useNavigate();

  const profileUpdate = async () => {
    // Calling authentication function
    const authenticate = getAuth();
    // You need to pass the authentication instance as param
    // Passing user's object as first param and updating it
    updateProfile(authenticate.user, {
      displayName,
      photoURL,
    })
      .then(() => {
        console.log('Profile Updated');
      })
      .catch((err) => {
        console.log(err);
      });
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
        <button type="button" className="register__btn" onClick={profileUpdate}>
          Update Profile
        </button>
      </div>
    </div>
  );
}
export default UpdateProfile;
