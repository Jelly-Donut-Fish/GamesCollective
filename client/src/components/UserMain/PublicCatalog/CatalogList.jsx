import React from 'react';
import CatalogTile from './CatalogTile.jsx'

function CatalogList({
  catalog, searchQuery, filterBy, getMyCollection,
  currentUser, myCollection, getCatalog, triggerEasterEgg,
}) {
  const genreFilter = (genre) => genre.match(searchQuery);
  const platformFilter = (platform) => platform.match(searchQuery);
  const categoriesFilter = (categories) => categories.match(searchQuery);

  return (
    <div className="list">
      {catalog.results.map((item, index) => {
        switch (filterBy) {
          case 'genre':
            if (item.genres.some(genreFilter)) {
              return (
                <CatalogTile
                  key={index}
                  item={item}
                  getMyCollection={getMyCollection}
                  myCollection={myCollection}
                  currentUser={currentUser}
                  getCatalog={getCatalog}
                  triggerEasterEgg={triggerEasterEgg}
                />
              );
            }
            break;
          case 'platforms':
            if (item.platforms.some(platformFilter)) {
              return (
                <CatalogTile
                  key={index}
                  item={item}
                  getMyCollection={getMyCollection}
                  myCollection={myCollection}
                  currentUser={currentUser}
                  getCatalog={getCatalog}
                  triggerEasterEgg={triggerEasterEgg}
                />
              );
            }
            break;
          case 'category':
            if (item.categories.some(categoriesFilter)) {
              return (
                <CatalogTile
                  key={index}
                  item={item}
                  getMyCollection={getMyCollection}
                  myCollection={myCollection}
                  currentUser={currentUser}
                  getCatalog={getCatalog}
                  triggerEasterEgg={triggerEasterEgg}
                />
              );
            }
            break;
          default:
            if (item.name.toLowerCase().match(searchQuery.toLowerCase())) {
              return (
                <CatalogTile
                  key={index}
                  item={item}
                  getMyCollection={getMyCollection}
                  myCollection={myCollection}
                  currentUser={currentUser}
                  getCatalog={getCatalog}
                  triggerEasterEgg={triggerEasterEgg}
                />
              );
            }
            break;
        }
        return null;
      })}
    </div>
  );
}

export default CatalogList;
