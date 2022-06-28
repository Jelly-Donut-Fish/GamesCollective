import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../../authentication/firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const steamLogIn = () => {
    axios.post('/auth/openid')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('error in steam axios', err)
      })
  };

  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return;
  //   }
  //   if (user) navigate('/UserMain');
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
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button type="button" className="login_btn login_google" onClick={signInWithGoogle}>
          Login with Google
        </button>

        <button type="button" className="login_btn login_google" onClick={steamLogIn}>
          {/* <img id="steamLogin" src="../../../../dist/assets/steamLogin.png" alt="" /> */}
          Login with Steam
        </button>

        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account?
          {/* pop up model to register */}
          <Link to="/register">Register</Link>
          {/* <button type="button" className="login__btn login__google" onClick={signInWithGoogle}>Register now.</button> */}
        </div>
      </div>
    </div>
  );
}
export default Login;
