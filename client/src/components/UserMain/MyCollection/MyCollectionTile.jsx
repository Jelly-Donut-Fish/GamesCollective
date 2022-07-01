import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { MdComment } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

function MyCollectionTile({
  game, index, currentUser,
  toggleGameView, toggleThreadsView,
  removeFromCollection,
}) {
  // delete request
  const removeGame = (e) => {
    e.preventDefault();
    if (confirm(`Are you sure you want to remove ${game.name} from your collection?`) === true) {
      removeFromCollection(index);
    }
    axios.delete('/games_users', { params: { user_id: currentUser.site_id, game_id: game.id } })
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
    toggleThreadsView(game);
  };

  return (
    <div className="collectionTile">
      <div className="mainInfo">
        <img src={game.header_image} alt={`${game.name} thumbnail`} className="title_image" />
        <h3 onClick={openGameView} className="mainTitle">{game.name}</h3><br></br>
        <span className="mainDate">{moment(game.release_date).format("d MMM, YYYY")}</span><br></br>
        <h4 className="mainDevelopers">{`Developer/Publisher: ${game.developers} ${game.publishers}`}</h4>
      </div>
      <div className="gameDetailsMini">
        <span className="highlight">Platforms Available: </span>
        {game.platforms.map((platform) => <span className="lowlight">{platform}</span>)}<br></br>
        <div className="features">
          <span className="highlight">Features:</span><br></br>
          {game.genres.map((genre) => <p className="lowlight">{genre}</p>)}
          {game.categories.map((category) => <p className="lowlight">{category}</p>)}
        </div>
      </div>
      <div className="moreInfo">
        <div className="status">
          <p className="status">{game.status}</p>
        </div>
        <div className="ratingMini">
          <p className="rating">{game.rating}</p>
        </div>
        <div className="buttons">
          <span onClick={openThreadView} className="game_icon"><MdComment /></span>
          <span onClick={removeGame} className="game_icon"><FaTrashAlt /></span>
        </div>
      </div>
    </div>
  );
}

export default MyCollectionTile;
