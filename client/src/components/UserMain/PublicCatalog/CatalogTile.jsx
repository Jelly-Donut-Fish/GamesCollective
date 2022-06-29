import React from 'react';

function CatalogTile( {item} ) {
  console.log(item);
  return (
    <div>
      <img src={item.header_image} />
      <h3>{item.name}</h3>
      <span>{item.release_date.date}</span>
      <h4>{item.publishers}</h4>
      <span>Platforms Available</span>
      <span>genre, genre, genre</span>
      <p>{item.rating}</p>
      <label htmlFor="game status">
        <select name="status" id="game status">
          <option value="Want">Want</option>
          <option value="Started">Started</option>
          <option value="Finished">Finished</option>
          <option value="Backlog">Haven&apos;t Started</option>
        </select>
      </label>
    </div>
  );
}

export default CatalogTile;
