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

  const exit = (e) => {
    e.preventDefault();
    toggleGameView(game);
  };

  return (
    <div className="outerModal">
      <div className="modal">
        <div className="close">
          <MdClear onClick={exit} />
        </div>
        <div className="innerContent">
          <div className="gameDetailsInfo">
            <div className="imageHolder">
              <img alt="mainTitle" src={game.header_image} />
            </div>
            <div className="deets">
              <h3 className="detailTitle">{game.name}</h3><br></br>
              <span className="rDate">{moment(game.release_date).format('d MMM, YYYY')}</span>
              <h4 className="publishers">{`Publisher: ${game.publishers}`}</h4><br></br>
            </div>
          </div>
          <div className="clearDeets">
            <span>Platforms Available: </span>
            {game.platforms.map((platform) => <span>{platform}</span>)}
            <br></br>
            <br></br>
            <span>Features:</span><br></br>
            {game.genres.map((genre) => <span>{genre} |</span>)}
            {game.categories.map((category) => <span>{category} |</span>)}
            <br></br>
            <br></br>

            {rating ? (changeRating ? (
              <span className="ratingSize">
                <input type="number" min="0" max="5" name="rating" onChange={saveNewRating} />
                <BsFillCheckCircleFill name="rating" onClick={setNewRating} />
              </span>
            )
              : <p className="ratingSize">{rating} <BsFillPencilFill name="rating" onClick={setNewRating} /></p>)
              : <p className="ratingSize">0.0 <BsFillPencilFill name="rating" onClick={setNewRating} /></p>}

            <p className="ratingSize">{game.status}</p><br></br>
            <div>
              <p className="ratingSize">My Review: </p>
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

            <div className="moreDetails">

              <div className="descriptionDetail">
                <div className="shortdescription">
                  <h2>About the Game: </h2>
                  <span>{game.short_description}</span>
                </div>
              </div>

              <div className="threadPreview">
                <div className="listThreads">
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
              </div>

            </div>
            <div className="buttonDiv">
              <button className="more" onClick={handleMoreComments}>More Comments</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
