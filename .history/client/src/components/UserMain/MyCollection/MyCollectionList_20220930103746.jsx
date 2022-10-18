/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import React, { Component, useEffect } from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import MyCollectionTile from "./MyCollectionTile";

function MyCollectionList({
  myCollection,
  currentUser,
  query,
  toggleGameView,
  toggleThreadsView,
  getMyCollection,
}) {
  useEffect(() => {
    console.log("Component has mounted");
    return () => {
      console.log("component has unmounted");
    };
  }, []);

  const removeFromCollection = (index) => {
    const myList = myCollection;
    myList.splice(index, 1);
    getMyCollection([...myList]);
  };

  return (
    <div className="list">
      {myCollection.length === 0 ? (
        <div>
          <div className="empty">
            <h4>
              Add a game from the catalog to start&nbsp;
              <BsArrowRightSquareFill />
            </h4>
          </div>
        </div>
      ) : (
        <div className="list">
          {myCollection.length > 1 && myCollection.map((game, i) => {
            console.log(myCollection.length)
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

            const genreField = document
              .getElementById("genre")
              .value.toLowerCase();
            const categoryField = document
              .getElementById("category")
              .value.toLowerCase();
            const statusField = document
              .getElementById("status")
              .value.toLowerCase();

            const compareGenreTest = (item) => {
              item = item.toLowerCase();
              return item.match(genreField);
            };
            const compareCategoryTest = (item) => {
              item = item.toLowerCase();
              return item.match(categoryField);
            };

            let isTrue = true;
            if (!game.name.toLowerCase().match(query.toLowerCase())) {
              isTrue = false;
            } else if (!game.genres.some(compareGenreTest)) {
              isTrue = false;
            } else if (!game.categories.some(compareCategoryTest)) {
              isTrue = false;
            } else if (!game.status.toLowerCase().match(statusField)) {
              isTrue = false;
            }

            if (isTrue) {
              return tile;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default MyCollectionList;
