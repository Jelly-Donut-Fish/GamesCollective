import React from 'react';
import MyCollectionTile from './MyCollectionTile';

function MyCollectionList() { // import functions that take information about each game and push it up into state

  return (
    <div>
      {[input].map(game => {
        // call function here and pass in game.title, game.genre, game.category, game.status, game.platform
        if (query !== undefined) {
          var gameTitle = game.title.toLowerCase();
          query = query.toLowerCase();
          if (gameTitle.includes(query)) {
            return  <MyCollectionTile />
          }
        }
        if (genre !== undefined) {
          if (game.genre === genre) {
            return <MyCollectionTile />
          }
        }
        if (category !== undefined) {
          if (game.category === category) {
            return <MyCollectionTile />
          }
        }
        if (status !== undefined) {
          if (game.status === status) {
            return <MyCollectionTile />
          }
        }
        if (platform !== undefined) {
          if (game.platform === platform) {
            return <MyCollectionTile />
          }
        }
        if (query === undefined &&
          genre === undefined &&
          category === undefined &&
          status === undefined) {
            return <MyCollectionTile />
          }
})}
    </div>
  );
}

export default MyCollectionList;
