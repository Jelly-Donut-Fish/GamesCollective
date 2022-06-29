/* eslint-disable consistent-return */
import React from 'react';
import MyCollectionTile from './MyCollectionTile';

function MyCollectionList({
  myCollection, query, genre, category, status, platform,
  toggleGameView, toggleThreadsView, getMyCollection,
}) {
  const removeFromCollection = (gameID) => {
    e.preventDefault();
    if (confirm('Are you sure you want to remove [insert game title here] from your collection?') === true) {
      getMyCollection(myCollection.splice((myCollection.indexOf(gameID)), 1));
      axios.delete('/games_users', { data: { user_id: '[userId here]', game_id: '[gameId here]' } })
        .then(() => {
          alert('[Game Title] was removed from your collection');
        })
        .catch((err) => {
          console.error('[game title] was not able to be removed at this time, please see the below error:');
          console.log(err);
        });
    }
  };

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
                getMyCollection={getMyCollection}
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
                getMyCollection={getMyCollection}
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
                getMyCollection={getMyCollection}
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
                getMyCollection={getMyCollection}
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
                getMyCollection={getMyCollection}
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
              getMyCollection={getMyCollection}
            />
          );
        }
      })}
    </div>
  );
}

export default MyCollectionList;
