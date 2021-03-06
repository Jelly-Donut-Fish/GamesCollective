import React from 'react';
import axios from 'axios';
import moment from 'moment';

function CatalogTile({
  item, getMyCollection, myCollection,
  currentUser, triggerEasterEgg, toggleGameView,
}) {
  console.log(item.name);
  const handleClick = function () {
    item.status = 'Want to Play';
    if (item.name.includes('Portal')) {
      triggerEasterEgg();
    }
    // getMyCollection([...myCollection, item]);
    // axios request to add to my collection
    axios.post(
      `/games_users/${currentUser.site_id}`,
      { game_id: item.id },
    )
      .then((res) => {
        getMyCollection([...myCollection, item]);
      })
      .catch((err) => console.error(err));
  };
  const uniqueCheck = (game) => game.name === item.name;

  const openGameView = (e) => {
    e.preventDefault();
    toggleGameView(item);
  };

  return (
    <div className="catalogTile">
      <div className="gameImage">
        <img src={item.header_image} alt="game in the collection" />
      </div>
      <div className="gameInfo">
        <div className="gameTitle">
        <h3 onClick={openGameView} className="mainTitle">{item.name}</h3><br></br>
        </div>

        <h4>{`Publisher: ${item.publishers}`}</h4>
        <h4>Available on: {item.platforms ? item.platforms.map((platform) => <p>{platform} | </p>) : "No platforms found"}</h4>
        <h4>Genres: {item.genres ? item.genres.map((genres, i) => i <= 3 && <p>{genres} | </p>) : "No genres found"}</h4>
      </div>
      <div className="otherInfo">
        <span className="release">{item.release_date ? moment(item.release_date).format("d MMM, YYYY") : "No release date available"}</span>
        <div className="ratingContainer">
          <p className="mainRating">{item.rating ? item.rating : "No ratings yet"}</p>
        </div>
        <div className="addGame">
          {myCollection ? !myCollection.some(uniqueCheck) ? <button onClick={handleClick} type="submit" className="add">Add to Collection</button> : null : null}
        </div>
      </div>
    </div>
  );
}

export default CatalogTile;
