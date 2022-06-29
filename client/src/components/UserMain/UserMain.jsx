import React, { useState } from 'react';
import CatalogContainer from '../../containers/CatalogContainer.js';
import MyCollectionContainer from '../../containers/MyCollectionContainer.js';
import GameDetails from './GameDetails/GameDetails';
import ThreadsView from './Threads/ThreadsView';

function UserMain() {
  const [gameDisplayed, toggleGameDisplay] = useState(false);
  const [gameThreadsDisplayed, toggleGameThreads] = useState(true);
  const [game, setGame] = useState({});
  const [gameId, setGameId] = useState();

  const toggleGameView = (gameInfo) => {
    setGame(gameInfo);
    toggleGameDisplay(!gameDisplayed);
  };

  const toggleThreadsView = (gameID) => {
    setGameId(gameID);
    toggleGameThreads(!gameThreadsDisplayed);
  };

  return (
    <div>
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
        {gameDisplayed && <GameDetails gameId={gameId} />}
        {gameThreadsDisplayed && <ThreadsView gameId={gameId} />}
      </div>
    </div>
  );
}

export default UserMain;
