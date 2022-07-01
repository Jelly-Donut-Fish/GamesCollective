/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillCheckCircleFill, BsFillPencilFill } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import moment from 'moment';

function GameDetails({ game, currentUser, toggleThreadsView, toggleGameView }) {
  const [rating, setRating] = useState('');
  const [saveRating, setSaveRating] = useState('');
  const [review, setReview] = useState('');
  const [saveReview, setSaveReview] = useState('');
  const [changeRating, setChangeRating] = useState(true);
  const [changeReview, setChangeReview] = useState(true);
  const [threads, setThreads] = useState([]);
  const [parent, setParent] = useState([]);

  console.log(currentUser);

  useEffect(() => {
    axios.get(`/comments/${game.id}`)
      .then((res) => {
        setThreads(res.data);
        const parents = res.data.filter((thread) => (thread.parent_id === 0)) || [];
        setParent(parents);
      })
      .catch((err) => console.log(err));
  }, [game]);

  const handleMoreComments = () => {
    toggleThreadsView(game);
    toggleGameView(game);
  };


  axios.get(`/games_users/${currentUser.site_id}`)
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
    <div className="outerModal">
      <div className="modal">
        <div className="close">
          <MdClear />
        </div>
        <div className="game info">
          <div className="game picture">
            <img src={game.header} />
          </div>
          <div className="game details">
            <span>
              <h3>{game.name}</h3>
              <span>{moment(game.release_date).format("d MMM, YYYY")}</span><br></br>
            </span>
            <h4>{`Developer/Publisher: ${game.developers} ${game.publishers}`}</h4><br></br>
            <span>Platforms Available: </span>
            {game.platforms.map((platform) => <span>{platform}</span>)}<br></br>
            <span>Features:</span><br></br>
            {game.genres.map((genre) => <span>{genre} |</span>)}
            {game.categories.map((category) => <span>{category} |</span>)}
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
            <p>{game.status}</p>
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
        <div className="short description and comments">
          <div className="shortdescription">
            <h2>Short Description</h2>
            <span>{game.short_description}</span>
          </div>
          <div className="comments">
            <div className="threadsList">
              {parent.slice(0, 3).map((parent) => (
                <div className="threadTile">
                  <div className="postInfo">
                    <span>{parent.username}  </span>
                    <span>{parent.date}</span>
                  </div>
                  <div>
                    <h3>{parent.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleMoreComments}>More Comments</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
