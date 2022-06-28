import React from 'react';
import MyCollectionTile from './MyCollectionTile';

function MyCollectionList({ catalog, setDropDowns }) {
  return (
    <div>
      {catalog.results.map((game) => {
        // call function here and pass in game.genre, game.category, game.status, game.platform
        setDropDowns(game.genre, game.category, game.status);
        if (query) {
          var gameTitle = game.title.toLowerCase();
          query = query.toLowerCase();
          if (gameTitle.includes(query)) {
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
        if (query
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
