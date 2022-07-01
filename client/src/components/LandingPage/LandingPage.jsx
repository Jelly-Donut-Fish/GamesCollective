import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { auth, logout } from '../../authentication/firebase';
import Login from './LogIn';
import DemoSection from './DemoSection';

function LandingPage({ getUser, currentUser }) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const getUserdb = () => {
    axios.get('./users', {
      params: {
        user_id: user.uid,
      },
    })
      .then((res) => {
        if (res.data !== 'no user found') {
          const loggedUser = {};
          loggedUser.username = res.data.results.username;
          loggedUser.email = user.email;
          loggedUser.site_id = user.uid;
          loggedUser.image_url = res.data.results.img_url;
          loggedUser.bio = res.data.results.bio;
          getUser(loggedUser);
        }
      })
      .catch((err) => {
        console.log('error in landing page get user db', err);
      });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    getUser({});
  };

  useEffect(() => {
    if (user) getUserdb();
    // navigate('/')
  }, [user]);

  return (
    <div className="landing-page">
      <nav className="nav-bar">
        <h3 className="title">Games Collection</h3>
        <br />
        <Link className="link nav" to="/UserMain">User Main</Link>
        <Link className="link nav" to="/UpdateProfile">Update Profile</Link>
          <div className="log-out">
            Logged in as
            <div>{currentUser.username}</div>
            <button type="button" className="logout_btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
      </nav>
      <div className="landing">
        <DemoSection />
        <div className="landing_login">
          <Login getUser={getUser} currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
