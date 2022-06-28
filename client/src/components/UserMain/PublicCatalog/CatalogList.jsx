import React from 'react';
import CatalogTile from './CatalogTile.jsx'

function CatalogList({ catalog }) {
  return (
    <div>
      {catalog.results.map((item, index) => <CatalogTile key={index} item={item} />)}
    </div>
  );
}

export default CatalogList;
