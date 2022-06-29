import React from 'react';
import axios from 'axios';
import { MdComment } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

function MyCollectionTile({ game, toggleGameView }) {
  // delete request
  const removeFromCollection = (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to remove [insert game title here] from your collection?') === true) {
      axios.delete('/games_users', { data: { user_id: '[userId here]', game_id: '[gameId here]' } })
        .then(() => {
          alert('[Game Title] was removed from your collection');
        })
        .catch((err) => {
          console.error('[game title] was not able to be removed at this time, please see the below error:');
          console.log(err);
        });
    }
  };

  const openGameView = (e) => {
    e.preventDefault();
    toggleGameView(game);
  };

  return (
    <div>
      <img src={game.header_image} alt={`${game.name} thumbnail`} />
      <h3 onClick={openGameView}>{game.name}</h3>
      <span>{game.release_date.date}</span>
      <h4>{game.developers}</h4>
      <h4>{game.publishers}</h4>
      <span>Platforms Available: </span>
      {game.platforms.map((platform) => {
        return <span>{platform}</span>
      })}
      {game.genres.map((genre) => {
        return <p>{genre}</p>
      })}
      {game.categories.map((category) => {
        return <p>{category}</p>
      })}
      <p>{game.rating}</p>
      <p>{game.status}</p>
      <p className="game_icon"><MdComment /></p>
      <p onClick={removeFromCollection} className="game_icon"><FaTrashAlt /></p>
    </div>
  );
}

export default MyCollectionTile;
