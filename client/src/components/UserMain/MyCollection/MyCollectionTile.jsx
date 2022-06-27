import React, { useState } from 'react';
import axios from 'axios';
import { MdComment } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

function MyCollectionTile() {
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

  return (
    <div>
      <img src="https://en.wikipedia.org/wiki/Sly_Cooper#/media/File:Sly_Cooper_series.png" alt="[Game Title] thumbnail" />
      <h3>Game Title</h3>
      <span>[Release Date]</span>
      <h4>Publisher/Studio</h4>
      <span>Platforms Available</span>
      <p>genre, genre, genre</p>
      <p>Rating</p>
      <p>Status</p>
      <p className="game_icon"><MdComment /></p>
      <p onClick={removeFromCollection} className="game_icon"><FaTrashAlt /></p>
    </div>
  );
}

export default MyCollectionTile;
