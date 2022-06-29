import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import {
  query, collection, getDocs, where,
} from 'firebase/firestore';
import {
  auth, signInWithEmailAndPassword, signInWithGoogle, db, logout
} from '../../authentication/firebase';

function Login({ getUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();



  // const steamLogIn = () => {
  //   axios.post('/auth/openid')
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log('error in steam axios', err);
  //     });
  // };

  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return;
  //   }
  //   if (user) navigate('/UserMain');
  // }, [user, loading]);

  useEffect(() => {
    if (user) getuserId();
  }, [user]);

  const getuserId = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      getUser(data.uid);
    } catch (err) {
      console.error(err);
      console.log('An error occured while fetching user data');
    }
  };

  return (
    <div className="login">
      <nav className="nav-bar">
        <h3>Games Collection</h3>
        <br />
        <Link className="link" to="/UserMain">User Main</Link>
      </nav>
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
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button type="button" className="login_btn login_google" onClick={signInWithGoogle}>
          Login with Google
        </button>

        {/* <button type="button" className="login_btn login_google" onClick={steamLogIn}>
          <img id="steamLogin" src="../../../../dist/assets/steamLogin.png" alt="" />
          Login with Steam
        </button> */}

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
