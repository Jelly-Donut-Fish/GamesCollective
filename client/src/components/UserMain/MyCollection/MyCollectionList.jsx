/* eslint-disable consistent-return */
import React from 'react';
import MyCollectionTile from './MyCollectionTile';

function MyCollectionList({
  myCollection, query, genre, category, status, platform,
  toggleGameView, toggleThreadsView, getMyCollection,
}) {
  const removeFromCollection = (index) => {
    console.log('my collection:');
    const myList = myCollection;
    myList.splice(index, 1);
    console.log(myList);
    getMyCollection([...myList]);
  };

  return (
    <div>
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
                toggleGameView={toggleGameView}
                toggleThreadsView={toggleThreadsView}
                removeFromCollection={removeFromCollection}
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
              index={i}
              toggleGameView={toggleGameView}
              toggleThreadsView={toggleThreadsView}
              removeFromCollection={removeFromCollection}
            />
          );
        }
      })}
    </div>
  );
}

export default MyCollectionList;
