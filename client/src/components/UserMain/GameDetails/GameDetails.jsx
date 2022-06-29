/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { BsFillCheckCircleFill, BsFillPencilFill } from 'react-icons/bs';

function GameDetails({ game }) {
  const [rating, setRating] = useState('');
  const [changeRating, setChangeRating] = useState(false);

  const setNewRating = (e) => {
    e.preventDefault();
    setChangeRating(!changeRating);
  };

  return (
    <div className="modal">
      <div className="game info">
        <div className="game picture">
          <img src={game.header} />
        </div>
        <div className="game details">
          <span>
            <h3>Game Title</h3>
            <span>Release Date</span>
          </span>
          <h4>Publisher/Studio</h4>
          <span>Platforms Available</span>
          <p>genre, genre, genre</p>
        </div>
        <div>
          {rating ? (changeRating ? (
            <span>
              <input type="number" min="0" max="5" />
              <BsFillCheckCircleFill onClick={setNewRating} />
            </span>
          )
            : <p>{rating} <BsFillPencilFill onClick={setNewRating} /></p>)
            : <p>0.0 <BsFillPencilFill /></p>}
        </div>
        <p>Status</p>
      </div>
    </div>
  );
}

export default GameDetails;
