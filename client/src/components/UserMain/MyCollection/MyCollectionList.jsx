import React from 'react';
import MyCollectionTile from './MyCollectionTile';

function MyCollectionList() { // import functions that take information about each game and push it up into state

  return (
    <div>
      {[input].map(game => {
        // call function here and pass in game.title, game.genre, game.category, game.status, game.platform
        if (query) {
          var gameTitle = game.title.toLowerCase();
          query = query.toLowerCase();
          if (gameTitle.includes(query)) {
            return  <MyCollectionTile />
          }
        }
        if (genre) {
          if (game.genre === genre) {
            return <MyCollectionTile />
          }
        }
        if (category) {
          if (game.category === category) {
            return <MyCollectionTile />
          }
        }
        if (status) {
          if (game.status === status) {
            return <MyCollectionTile />
          }
        }
        if (platform) {
          if (game.platform === platform) {
            return <MyCollectionTile />
          }
        }
        if (!query &&
          !genre &&
          !category &&
          !status) {
            return <MyCollectionTile />
          }
})}
    </div>
  );
}

export default MyCollectionList;
