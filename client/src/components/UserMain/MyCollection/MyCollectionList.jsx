/* eslint-disable consistent-return */
import React from 'react';
import MyCollectionTile from './MyCollectionTile';

function MyCollectionList({
  catalog, query, genre, category, status, platform,
}) {
  return (
    <div>
      {catalog.results.map((game) => {
        const gameTitle = game.title.toLowerCase();
        const lowerQuery = query.toLowerCase();

        if (query) {
          if (gameTitle.includes(lowerQuery)) {
            return <MyCollectionTile />;
          }
        }
        if (genre) {
          if (game.genre === genre) {
            return (<MyCollectionTile />);
          }
        }
        if (category) {
          if (game.category === category) {
            return (<MyCollectionTile />);
          }
        }
        if (status) {
          if (game.status === status) {
            return (<MyCollectionTile />);
          }
        }
        if (platform) {
          if (game.platform === platform) {
            return (<MyCollectionTile />);
          }
        }
        if (!query
          && !genre
          && !category
          && !status) {
          return <MyCollectionTile />;
        }
      })}
    </div>
  );
}

export default MyCollectionList;
