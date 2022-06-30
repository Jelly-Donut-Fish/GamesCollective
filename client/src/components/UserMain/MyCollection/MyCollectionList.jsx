/* eslint-disable consistent-return */
import React from 'react';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import MyCollectionTile from './MyCollectionTile';

function MyCollectionList({
  myCollection, currentUser, query, genre, category, status, platform,
  toggleGameView, toggleThreadsView, getMyCollection,
}) {
  const removeFromCollection = (index) => {
    const myList = myCollection;
    myList.splice(index, 1);
    getMyCollection([...myList]);
  };

  return (
    <div>
      {myCollection.length === 0
        ? (
          <div>
            <div className="empty">
              <h4>
                Add a game from the catalog to start&nbsp;
                <BsArrowRightSquareFill />
              </h4>
            </div>
          </div>
        )
        : (
          <div >
            {myCollection.map((game, i) => {
              const gameTitle = game.name.toLowerCase();

              if (query) {
                const lowerQuery = query.toLowerCase();
                if (gameTitle.includes(lowerQuery)) {
                  return (
                    <MyCollectionTile
                      key={game.id}
                      game={game}
                      index={i}
                      currentUser={currentUser}
                      toggleGameView={toggleGameView}
                      toggleThreadsView={toggleThreadsView}
                      removeFromCollection={removeFromCollection}
                    />
                  );
                }
              }
              if (genre) {
                if (game.genre === genre) {
                  return (
                    <MyCollectionTile
                      key={game.id}
                      game={game}
                      index={i}
                      currentUser={currentUser}
                      toggleGameView={toggleGameView}
                      toggleThreadsView={toggleThreadsView}
                      removeFromCollection={removeFromCollection}
                    />
                  );
                }
              }
              if (category) {
                if (game.category === category) {
                  return (
                    <MyCollectionTile
                      key={game.id}
                      game={game}
                      index={i}
                      toggleGameView={toggleGameView}
                      toggleThreadsView={toggleThreadsView}
                      removeFromCollection={removeFromCollection}
                    />
                  );
                }
              }
              if (status) {
                if (game.status === status) {
                  return (
                    <MyCollectionTile
                      key={game.id}
                      game={game}
                      index={i}
                      currentUser={currentUser}
                      toggleGameView={toggleGameView}
                      toggleThreadsView={toggleThreadsView}
                      removeFromCollection={removeFromCollection}
                    />
                  );
                }
              }
              if (platform) {
                if (game.platform === platform) {
                  return (
                    <MyCollectionTile
                      key={game.id}
                      game={game}
                      index={i}
                      currentUser={currentUser}
                      toggleGameView={toggleGameView}
                      toggleThreadsView={toggleThreadsView}
                    />
                  );
                }
              }
              if ((query === '')
                && (genre === '' || genre === undefined)
                && category === ''
                && (status === '' || game.status === undefined)) {
                return (
                  <MyCollectionTile
                    key={game.id}
                    game={game}
                    index={i}
                    currentUser={currentUser}
                    toggleGameView={toggleGameView}
                    toggleThreadsView={toggleThreadsView}
                    removeFromCollection={removeFromCollection}
                  />
                );
              }
            })}
          </div>
        )}
    </div>
  );
}

export default MyCollectionList;
