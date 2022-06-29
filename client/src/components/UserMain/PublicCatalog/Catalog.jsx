import React, { useState } from 'react';
import CatalogList from './CatalogList.jsx'
import Search from './Search.jsx'

function Catalog({ catalog, getMyCollection, currentUser, myCollection }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('');

  return (
    <div>
      <Search setSearchQuery={setSearchQuery} setFilterBy={setFilterBy} />
      <CatalogList
        catalog={catalog}
        searchQuery={searchQuery}
        filterBy={filterBy}
        getMyCollection={getMyCollection}
        currentUser={currentUser}
        myCollection={myCollection} />
    </div>
  );
}

export default Catalog;
