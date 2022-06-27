import React from 'react';
import axios from 'axios';
import { MdComment } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

function MyCollectionTile() {
  // comment - put request
  const addComment = (e) => {
    e.preventDefault();
    axios.put('[insert endpoint here]', { data: { comment: '[user\'s comment here]' } })
      .then(() => {

      })
      .catch((err) => {
        console.error('Comment was not successfully added:');
        console.log(err);
      });
  };

  // delete request
  const removeFromCollection = (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to remove [insert game title here] from your collection?') === true) {
      axios.delete('[insert endpoint here]', { data: { userId: '[userId here]', gameId: '[gameId here]' } })
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
      <span>genre, genre, genre</span>
      <p>Rating</p>
      <label htmlFor="game status">
        <select name="status" id="game status">
          <option value="Want">Want</option>
          <option value="Started">Started</option>
          <option value="Finished">Finished</option>
          <option value="Backlog">Haven&apos;t Started</option>
        </select>
      </label>
      <p ><MdComment /></p>
      <p onClick={removeFromCollection}><FaTrashAlt /></p>
    </div>
  );
}

export default MyCollectionTile;
