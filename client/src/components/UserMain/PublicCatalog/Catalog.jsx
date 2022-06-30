import React, { useState } from 'react';
import CatalogList from './CatalogList.jsx'
import Search from './Search.jsx'

function Catalog({ catalog, getMyCollection, currentUser, myCollection, getCatalog }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('');

  return (
    <div>
      <Search
        setSearchQuery={setSearchQuery}
        setFilterBy={setFilterBy}
        getCatalog={getCatalog}
        catalog={catalog}
        filterBy={filterBy} />
      <CatalogList
        catalog={catalog}
        searchQuery={searchQuery}
        filterBy={filterBy}
        getMyCollection={getMyCollection}
        currentUser={currentUser}
        myCollection={myCollection}
        getCatalog={getCatalog} />
    </div>
  );
}

export default Catalog;
