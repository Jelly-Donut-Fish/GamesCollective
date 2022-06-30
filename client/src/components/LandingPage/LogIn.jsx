import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import {
  query, collection, getDocs, where,
} from 'firebase/firestore';
import {
  auth, logInWithEmailAndPassword, signInWithGoogle, db, logout
} from '../../authentication/firebase';

function Login({ getUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return;
  //   }
  //   if (!user) navigate('/');
  // }, [user, loading]);

  return (
    <div className="login">
      <div className="login_container">
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
        <button
          type="button"
          className="login_btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button type="button" className="login_btn login_google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link className="link" to="/Reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? Join the ultimate collection today!
          <Link className="link" to="/Register">Register</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
