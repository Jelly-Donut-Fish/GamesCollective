import React from 'react';
import CatalogList from './CatalogList.jsx'

function Catalog({ catalog }) {
  console.log(catalog);
  return (
    <div>
      <CatalogList />
    </div>
  );
}

export default Catalog;
