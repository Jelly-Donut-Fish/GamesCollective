/* eslint-disable consistent-return */
import React from 'react';
import MyCollectionTile from './MyCollectionTile';

function MyCollectionList({
  myCollection, query, genre, category, status, platform,
  toggleGameView, toggleThreadsView,
}) {
  return (
    <div>
      {myCollection.map((game) => {
        const gameTitle = game.name.toLowerCase();

        if (query) {
          const lowerQuery = query.toLowerCase();
          if (gameTitle.includes(lowerQuery)) {
            return (
              <MyCollectionTile
                key={game.id}
                game={game}
                toggleGameView={toggleGameView}
                toggleThreadsView={toggleThreadsView}
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
                toggleGameView={toggleGameView}
                toggleThreadsView={toggleThreadsView}
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
                toggleGameView={toggleGameView}
                toggleThreadsView={toggleThreadsView}
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
                toggleGameView={toggleGameView}
                toggleThreadsView={toggleThreadsView}
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
                toggleGameView={toggleGameView}
                toggleThreadsView={toggleThreadsView}
              />
            );
          }
        }
        if (!query
          && !genre
          && !category
          && !status) {
          return (
            <MyCollectionTile
              key={game.id}
              game={game}
              toggleGameView={toggleGameView}
              toggleThreadsView={toggleThreadsView}
            />
          );
        }
      })}
    </div>
  );
}

export default MyCollectionList;
