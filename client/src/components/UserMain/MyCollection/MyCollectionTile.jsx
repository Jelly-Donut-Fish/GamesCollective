import React from 'react';
import axios from 'axios';
import { MdComment } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

function MyCollectionTile({
  game, toggleGameView, toggleThreadsView, getMyCollection,
}) {
  // delete request
  const removeFromCollection = (e) => {

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
      <button type="button" onClick={removeFromCollection} className="game_icon"><FaTrashAlt /></button>
    </div>
  );
}

export default MyCollectionTile;
