import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, sendPasswordResetEmail } from '../../authentication/firebase';

function Reset() {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) navigate('/');
  // }, [user, loading]);

  const resetClickHandler = (email) => {
    sendPasswordResetEmail(email);
    navigate('/UserMain');
  };

  return (
    <div className="page">
      <nav className="nav-bar">
        <h3 className="title">Games Collection</h3>
        <br />
        <Link className="link" to="/">Home</Link>
      </nav>
      <div className="page_container">
        <input
          type="text"
          className="login_textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          type="button"
          className="login_btn"
          onClick={() => resetClickHandler(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account?
          <br />
          <Link className="link" to="/Register">Register Now</Link>
        </div>
      </div>
    </div>
  );
}
export default Reset;
