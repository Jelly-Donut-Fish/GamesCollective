/* eslint-disable import/extensions */
import React, { useState } from 'react';
import CatalogContainer from '../../containers/CatalogContainer.js';
import MyCollectionContainer from '../../containers/MyCollectionContainer.js';
import GameDetails from './GameDetails/GameDetails.jsx';
import ThreadsContainer from '../../containers/ThreadsContainer.js';
import UserInfo from './UserInfo.jsx';

function UserMain() {
  const [gameDisplayed, toggleGameDisplay] = useState(false);
  const [gameThreadsDisplayed, toggleGameThreads] = useState(false);
  const [game, setGame] = useState({});
  const [gameId, setGameId] = useState();
  const [username, setUsername] = useState('Joy Parker');
  const [userphoto, setUserphoto] = useState('https://i.postimg.cc/J4Knq464/Joy.png');

  const toggleGameView = (gameInfo) => {
    setGame(gameInfo);
    toggleGameDisplay(!gameDisplayed);
  };

  const toggleThreadsView = (selectedGame) => {
    setGame(selectedGame);
    setGameId(selectedGame.id);
    toggleGameThreads(!gameThreadsDisplayed);
  };

  return (
    <div>
      <UserInfo
        username={username}
        userphoto={userphoto}
      />
      <div className="container">
        <div className="collection">
          <MyCollectionContainer
            toggleGameView={toggleGameView}
            toggleThreadsView={toggleThreadsView}
          />
        </div>
        <div className="catalog">
          <CatalogContainer
            toggleGameView={toggleGameView}
            toggleThreadsView={toggleThreadsView}
          />
        </div>
      </div>
      <div className="clear">
        <div>
          <div>
            {gameDisplayed && <GameDetails gameId={gameId} game={game} />}
            {gameThreadsDisplayed && (
            <ThreadsContainer
              gameId={gameId}
              game={game}
              exitModal={toggleThreadsView}
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMain;
