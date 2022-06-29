import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, updateProfile, signInAnonymously } from 'firebase/auth';
import { auth } from '../../authentication/firebase';

function UpdateProfile() {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState(user?.email);
  const [displayName, setName] = useState(user?.displayName);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const [summary, setSummary] = useState(user?.summary);
  const navigate = useNavigate();

  const profileUpdate = async () => {
    // Calling authentication function
    const auth = getAuth();
    // You need to pass the authentication instance as param
    let { user } = await signInAnonymously(auth);

    // Passing user's object as first param and updating it
    await updateProfile(user, {
      displayName,
      photoURL,
      summary,
    });
    navigate('/');
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
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
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
          value={summary || ''}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summary"
        />
        <button type="button" className="register__btn" onClick={profileUpdate}>
          Update Profile
        </button>
      </div>
    </div>
  );
}
export default UpdateProfile;
