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
          <div>
            {myCollection.map((game, i) => {
              const tile = (
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
              console.log('game', game);
              console.log(query, genre, category, status);
              const gameTitle = game.name.toLowerCase();
              const lowerQuery = query.toLowerCase();
              if (gameTitle.includes(lowerQuery)
                && game.genres.includes(genre)
                && game.categories.includes(category)
                && game.status === status) {
                return tile;
              }
              if (gameTitle.includes(lowerQuery)
                && game.categories.includes(category)
                && game.status === status) {
                return tile;
              }
              if (gameTitle.includes(lowerQuery)
                && game.genres.includes(genre)
                && game.status === status) {
                return tile;
              }
              if (gameTitle.includes(lowerQuery)
                && game.genres.includes(genre)
                && game.categories.includes(category)) {
                return tile;
              }
              if (gameTitle.includes(lowerQuery)
                && game.genres.includes(genre)
                && game.categories.includes(category)
                && game.status === status) {
                return tile;
              }
              if (gameTitle.includes(lowerQuery)
                && game.genres.includes(genre)) {
                return tile;
              }
              if (gameTitle.includes(lowerQuery)
                && game.categories.includes(category)) {
                return tile;
              }
              if (gameTitle.includes(lowerQuery)
                && game.status === status) {
                return tile;
              }
              if (gameTitle.includes(lowerQuery) && lowerQuery !== '') {
                return tile;
              }
              if (game.genres.includes(genre)
                && game.categories.includes(category)
                && game.status === status) {
                return tile;
              }
              if (game.genres.includes(genre)
                && game.categories.includes(category)) {
                return tile;
              }
              if (game.genres.includes(genre)
                && game.status === status) {
                return tile;
              }
              if (game.genres.includes(genre)) {
                return tile;
              }
              if (game.categories.includes(category)
                && game.status === status) {
                return tile;
              }
              if (game.categories.includes(category)) {
                return tile;
              }
              if (game.status === status) {
                return tile;
              }
              if (gameTitle.includes(lowerQuery)) {
                return tile;
              }
            })}
          </div>
        )}
    </div>
  );
}

export default MyCollectionList;
