/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillCheckCircleFill, BsFillPencilFill } from 'react-icons/bs';

function GameDetails({ gameId, user_id }) {
  const [rating, setRating] = useState(0);
  const [saveRating, setSaveRating] = useState('');
  const [review, setReview] = useState('');
  const [saveReview, setSaveReview] = useState('');
  const [changeRating, setChangeRating] = useState(true);
  const [changeReview, setChangeReview] = useState(true);

  axios.get(`/games_users/${user_id}`)
    .then((res) => {
      res.results.forEach((game) => {
        if (gameId === game.id) {
          setRating(game.user_rating);
          setReview(game.user_review);
        }
      })
    })
    .catch((err) => console.log(err));

  const setNewRating = (e) => {
    e.preventDefault();
    if (e.target.name === 'rating') {
      setChangeRating(!changeRating);
      setRating(saveRating);
    }
    if (e.target.name === 'review') {
      setChangeReview(!changeReview);
      setReview(saveReview);
    }
  };

  const saveNewRating = (e) => {
    e.preventDefault();
    if (e.target.name === 'rating') {
      setSaveRating(e.target.value);
    }
    if (e.target.name === 'review') {
      setSaveReview(e.target.value);
      axios.put();
    }
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
              <input type="number" min="0" max="5" name="rating" onChange={saveNewRating} />
              <BsFillCheckCircleFill name="rating" onClick={setNewRating} />
            </span>
          )
            : <p>{rating} <BsFillPencilFill name="rating" onClick={setNewRating} /></p>)
            : <p>0.0 <BsFillPencilFill name="rating" onClick={setNewRating} /></p>}
        </div>
        <div>
          <p>Status</p>
          <div>
            {review ? (changeReview ? (
              <span>
                <textarea value="" rows="5" columns="30" name="review" onChange={saveNewRating} />
                <BsFillCheckCircleFill name="review" onClick={setNewRating} />
              </span>
            )
              : <p>{review} <BsFillPencilFill name="review" onClick={setNewRating} /></p>)
              : (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  <BsFillPencilFill name="review" onClick={setNewRating} />
                </p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
