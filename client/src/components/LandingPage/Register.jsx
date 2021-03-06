import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useHistory, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../authentication/firebase';

function Register({ getUser, currentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const getUserInfo = () => {
    try {
      const loggedUser = {};
      loggedUser.username = displayName;
      loggedUser.email = email;
      loggedUser.site_id = user.uid;
      loggedUser.image_url = photoURL;
      getUser(loggedUser);
    } catch (err) {
      console.error('An error occurred while fetching user data', err);
    }
  };

  const register = () => {
    if (!name) {
      alert('Please enter name')
    } else {
      const promises = [
        registerWithEmailAndPassword(name, email, password, displayName, photoURL),
        getUserInfo(),
      ];
      Promise.all(promises)
        .then(() => {
          axios.post('/users', {
            site_id: user.uid,
            username: displayName,
            email: email,
            image_url: photoURL,
          });
        })
        .then(() => {
          // navigate('/');
        })
        .catch((err) => {
          console.error('error in register', err);
        });
    }
  };

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) navigate('/');
  // }, [user, loading]);

  return (
    <div className="page">
      <nav className="nav-bar">
        <h3 className="pageTitle">Games Collective</h3>
        <Link className="link" to="/">Login</Link>
      </nav>
      <div className="page_container">
        <input
          type="text"
          className="login_textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          className="login_textBox"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="DisplayName"
        />
        <input
          type="text"
          className="login_textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login_textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          className="login_textBox"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Photo URL"
        />
        <button type="button" className="login_btn" onClick={register}>
          Register
        </button>
        <button
          type="button"
          className="login_btn"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account?
          <Link className="link" to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
