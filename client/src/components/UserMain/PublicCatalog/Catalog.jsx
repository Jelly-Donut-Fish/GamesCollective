import React from 'react';
import CatalogList from './CatalogList.jsx'

function Catalog( {catalog}) {
  return (
    <div>
      <CatalogList catalog = {catalog}/>
    </div>
  );
}

export default Catalog;
