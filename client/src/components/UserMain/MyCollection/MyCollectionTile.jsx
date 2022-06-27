import React from 'react';
import { MdComment } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

function MyCollectionTile() {
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
      <p><MdComment /></p>
      <p><FaTrashAlt /></p>
    </div>
  );
}

export default MyCollectionTile;
