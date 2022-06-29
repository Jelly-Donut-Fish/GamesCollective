import React from 'react';
import axios from 'axios';
import { MdComment } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

function MyCollectionTile({
  game, index, toggleGameView, toggleThreadsView, removeFromCollection,
}) {
  // delete request
  const removeGame = (e) => {
    e.preventDefault();
    removeFromCollection(index);
    axios.delete('/games_users', { data: { user_id: '[userId here]', game_id: game.id } })
    .then(() => {
      alert(`${game.name} was removed from your collection`);
    })
    .catch((err) => {
      console.error('[game title] was not able to be removed at this time, please see the below error:');
      console.log(err);
    });
  };

  const openGameView = (e) => {
    e.preventDefault();
    toggleGameView(game);
  };

  const openThreadView = (e) => {
    e.preventDefault();
    toggleThreadsView(game.id);
  };

  return (
    <div>
      <img src={game.header_image} alt={`${game.name} thumbnail`} />
      <div><h3 onClick={openGameView} className="title">{game.name}</h3></div>
      <span>{game.release_date.date}</span>
      <h4>{game.developers}</h4>
      <h4>{game.publishers}</h4>
      <span>Platforms Available: </span>
      {game.platforms.map((platform) => <span>{platform}</span>)}
      {game.genres.map((genre) => <p>{genre}</p>)}
      {game.categories.map((category) => <p>{category}</p>)}
      <p>{game.rating}</p>
      <p>{game.status}</p>
      <button type="button" onClick={openThreadView} className="game_icon"><MdComment /></button>
      <button type="button" onClick={removeGame} className="game_icon"><FaTrashAlt /></button>
    </div>
  );
}

export default MyCollectionTile;
