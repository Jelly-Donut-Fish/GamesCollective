import React, { useState } from 'react';
import CatalogContainer from '../../containers/CatalogContainer.js';
import MyCollectionContainer from '../../containers/MyCollectionContainer.js';
import GameDetails from './GameDetails/GameDetails';
import ThreadsView from './Threads/ThreadsView';

function UserMain() {
  const [gameDisplayed, toggleGameDisplay] = useState(false);
  const [gameThreadsDisplayed, toggleGameThreads] = useState(false);
  const [gameId, setGameId] = useState();

  const toggleGameView = (gameID) => {
    setGameId(gameID);
    toggleGameDisplay(!gameDisplayed);
  };

  const toggleThreadsView = (gameID) => {
    setGameId(gameID);
    toggleGameThreads(!gameThreadsDisplayed);
  };

  return (
    <div>
      <MyCollectionContainer
        toggleGameView={toggleGameView}
        toggleThreadsView={toggleThreadsView}
      />
      <CatalogContainer
        toggleGameView={toggleGameView}
        toggleThreadsView={toggleThreadsView}
      />
      {gameDisplayed && <GameDetails gameId={gameId} />}
      {gameThreadsDisplayed && <ThreadsView gameId={gameId} />}
    </div>
  );
}

export default UserMain;
