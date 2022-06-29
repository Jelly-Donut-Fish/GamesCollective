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
        const gameTitle = game.title.toLowerCase();
        const lowerQuery = query.toLowerCase();

        if (query) {
          if (gameTitle.includes(lowerQuery)) {
            return <MyCollectionTile toggleGameView={toggleGameView} />;
          }
        }
        if (genre) {
          if (game.genre === genre) {
            return (<MyCollectionTile toggleGameView={toggleGameView} />);
          }
        }
        if (category) {
          if (game.category === category) {
            return (<MyCollectionTile toggleGameView={toggleGameView} />);
          }
        }
        if (status) {
          if (game.status === status) {
            return (<MyCollectionTile toggleGameView={toggleGameView} />);
          }
        }
        if (platform) {
          if (game.platform === platform) {
            return (<MyCollectionTile toggleGameView={toggleGameView} />);
          }
        }
        if (!query
          && !genre
          && !category
          && !status) {
          return <MyCollectionTile toggleGameView={toggleGameView} />;
        }
      })}
    </div>
  );
}

export default MyCollectionList;
