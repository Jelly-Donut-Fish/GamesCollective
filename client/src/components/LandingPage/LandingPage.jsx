import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import {
  query, collection, getDocs, where,
} from 'firebase/firestore';
import { auth, db, logout } from '../../authentication/firebase';
import Login from './LogIn';
import DemoSection from './DemoSection';

function LandingPage({ getUser, currentUser }) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (loading) return;
  //   console.log('use effect');
  //   fetchUserName();
  // }, [user, loading]);

  const getUserInfo = () => {
    if (user) {
      try {
        console.log('user', user);
        const loggedUser = currentUser;
        loggedUser.username = user.displayName;
        loggedUser.email = user.email;
        loggedUser.site_id = user.uid;

        console.log('logged user', loggedUser);
        getUser(loggedUser);
      } catch (err) {
        console.error(err);
        console.log('An error occured while fetching user data');
      }
    }
  };
  const putUserindb = () => {
    axios.post('/users', {
      name,
      username: displayName,
      email,
      site_id: 'local',
      image_url: photoURL,
    })
      .then(() => console.log('registered successfully'))
      .catch((err) => console.log(err));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    getUser();
  };
  useEffect(() => {
    if (user) getUserInfo();
  }, [user]);
  return (
    <div className="landing-page">
      <nav className="nav-bar">
        <h3>Games Collection</h3>
        <br />
        <Link className="link" to="/UserMain">User Main</Link>
        <Link className="link" to="/UpdateProfile">Update Profile</Link>
      </nav>
      <div className="landing">
        <DemoSection />
        <div className="landing_login">
          <div className="log-out">
            Logged in as
            <div>{currentUser.username}</div>
            <button type="button" className="logout_btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <Login getUser={getUser} currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
