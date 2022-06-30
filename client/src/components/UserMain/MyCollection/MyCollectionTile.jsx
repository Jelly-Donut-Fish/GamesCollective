import React from 'react';
// import axios from 'axios';
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
    // axios.delete('/games_users', { data: { user_id: currentUser, game_id: game.id } })
    // .then(() => {
    //   alert(`${game.name} was removed from your collection`);
    // })
    // .catch((err) => {
    //   console.error('[game title] was not able to be removed at this time, please see the below error:');
    //   console.log(err);
    // });
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
      <div className="image_container">
        <img src={game.header_image} alt={`${game.name} thumbnail`} className="title_image" />
      </div>
      <div className="info_container">
        <h3 onClick={openGameView} className="title">{game.name}</h3>
        <span className="date">{game.release_date.date}</span>
        <h4>{`Developer/Publisher: ${game.developers} ${game.publishers}`}</h4><br></br>
        <span>Platforms Available: </span>
        {game.platforms.map((platform) => <span>{platform}</span>)}<br></br>
        <div className="features">
        <span>Features:</span><br></br>
        {game.genres.map((genre) => <p>{genre}</p>)}
        {game.categories.map((category) => <p>{category}</p>)}
        </div>
        <p className="rating">{game.rating}</p>
        <p className="status">{game.status}</p>
        <span onClick={openThreadView} className="game_icon"><MdComment /></span>
        <span onClick={removeGame} className="game_icon"><FaTrashAlt /></span>
      </div>
    </div>
  );
}

export default MyCollectionTile;
