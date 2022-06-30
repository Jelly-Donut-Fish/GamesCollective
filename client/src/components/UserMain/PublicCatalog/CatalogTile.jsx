import React from 'react';
import axios from 'axios';

function CatalogTile({ item, getMyCollection, myCollection, currentUser }) {
  const handleClick = function () {
    item.status = 'Want to Play';
    getMyCollection([...myCollection, item]);
    // axios request to add to my collection
    axios.post(
      `/games_users/${currentUser.site_id}`,
      { game_id: item.id },
    )
      .then(() => console.log('added'))
      .catch((err) => console.log(err));
  };
  const uniqueCheck = (game) => game.name === item.name;
  return (
    <div>
      <img src={item.header_image} alt="game in the collection" />
      <h3>{item.name}</h3>
      <span>{item.release_date ? item.release_date.date : "No release date available"}</span>
      <h4>{item.publishers}</h4>
      <h4> Available on: </h4>
      <ul>
        {item.platforms ? item.platforms.map((platform) => <li>{platform}</li>) : "No platforms found"}
      </ul>
      <h4> Genres </h4>
      <ul>
        {item.genres ? item.genres.map((genres) => <li>{genres}</li>) : "No genres found"}
      </ul>
      <p>{item.rating ? item.rating : "No ratings found"}</p>
      {myCollection ? !myCollection.some(uniqueCheck) ? <button onClick={handleClick} type="submit"> Add </button> : null : null}
    </div>
  );
}

export default CatalogTile;
