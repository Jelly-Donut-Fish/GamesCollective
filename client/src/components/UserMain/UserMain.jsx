/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CatalogContainer from '../../containers/CatalogContainer.js';
import MyCollectionContainer from '../../containers/MyCollectionContainer.js';
import GameDetails from './GameDetails/GameDetails.jsx';
import ThreadsContainer from '../../containers/ThreadsContainer.js';
import UserInfo from './UserInfo.jsx';
import { auth } from '../../authentication/firebase';
import { signOut } from 'firebase/auth';

function UserMain({ currentUser, getUser }) {
  const [gameDisplayed, toggleGameDisplay] = useState(false);
  const [gameThreadsDisplayed, toggleGameThreads] = useState(false);
  const [game, setGame] = useState({});
  const [gameId, setGameId] = useState();
  const [userphoto, setUserphoto] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');
  const [playAudio, setPlayAudio] = useState(false);
  const navigate = useNavigate();

  const toggleGameView = (gameInfo) => {
    setGame(gameInfo);
    toggleGameDisplay(!gameDisplayed);
  };

  const toggleThreadsView = (selectedGame) => {
    setGame(selectedGame);
    setGameId(selectedGame.id);
    toggleGameThreads(!gameThreadsDisplayed);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        getUser({});
        alert('User signed out');
        navigate('/');
      });
  };

  const triggerEasterEgg = () => {
    setPlayAudio(true);
  };

  return (
    <div className="landing-page">
      <nav className="nav-bar">
        <h3 className="pageTitle">Games Collective</h3>
        {/* <Link className="link nav" to="/">Login</Link> */}
        <Link className="link nav" to="/UpdateProfile">Update Profile</Link>
        <div className="log-out">
          Logged in as
          <div>{currentUser.username}</div>
          <button type="button" className="logout_btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav >
      <UserInfo
        currentUser={currentUser}
        userphoto={userphoto}
      />
      <div className="container">
        <div className="collection">
          <MyCollectionContainer
            toggleGameView={toggleGameView}
            toggleThreadsView={toggleThreadsView}
            triggerEasterEgg={triggerEasterEgg}
          />
        </div>
        <div className="catalog">
          <CatalogContainer
            toggleGameView={toggleGameView}
            toggleThreadsView={toggleThreadsView}
            triggerEasterEgg={triggerEasterEgg}
          />
        </div>
      </div>
      <div className="clear">
        {gameDisplayed && (
          <GameDetails
            gameId={gameId}
            game={game}
            currentUser={currentUser}
            toggleThreadsView={toggleThreadsView}
            toggleGameView={toggleGameView}
          />
        )}
        {gameThreadsDisplayed && (
          <ThreadsContainer
            gameId={gameId}
            game={game}
            exitModal={toggleThreadsView}
          />
        )}
        <iframe width="560" height="315" src={playAudio && 'https://www.youtube.com/embed/Y6ljFaKRTrI?start=7&autoplay=1'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  hidden />
      </div>
    </div>
  );
}

export default UserMain;
