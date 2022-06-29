import React from 'react';
import CatalogTile from './CatalogTile.jsx'

function CatalogList({ catalog, searchQuery }) {
  return (
    <div>
      {catalog.results.map((item, index) => {
        if (item.name.match(searchQuery)) {
          return <CatalogTile key={index} item={item} />;
        }
        return null;
      })}
    </div>
  );
}

export default CatalogList;
