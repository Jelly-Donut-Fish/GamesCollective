/* eslint-disable consistent-return */
import React from 'react';
import MyCollectionTile from './MyCollectionTile';

function MyCollectionList({
  myCollection, query, genre, category, status, platform,
  toggleGameView,
}) {
  return (
    <div>
      {myCollection.map((game) => {
        const gameTitle = game.name.toLowerCase();
        const lowerQuery = query.toLowerCase();

        if (query) {
          if (gameTitle.includes(lowerQuery)) {
            return <MyCollectionTile key={game.id} game={game} toggleGameView={toggleGameView} />;
          }
        }
        if (genre) {
          if (game.genre === genre) {
            return (<MyCollectionTile key={game.id} game={game} toggleGameView={toggleGameView} />);
          }
        }
        if (category) {
          if (game.category === category) {
            return (<MyCollectionTile key={game.id} game={game} toggleGameView={toggleGameView} />);
          }
        }
        if (status) {
          if (game.status === status) {
            return (<MyCollectionTile key={game.id} game={game} toggleGameView={toggleGameView} />);
          }
        }
        if (platform) {
          if (game.platform === platform) {
            return (<MyCollectionTile key={game.id} game={game} toggleGameView={toggleGameView} />);
          }
        }
        if (!query
          && !genre
          && !category
          && !status) {
          return <MyCollectionTile key={game.id} game={game} toggleGameView={toggleGameView} />;
        }
      })}
    </div>
  );
}

export default MyCollectionList;
