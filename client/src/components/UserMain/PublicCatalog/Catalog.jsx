import React, { useState } from 'react';
import CatalogList from './CatalogList.jsx'
import Search from './Search.jsx'

function Catalog({
  catalog, getMyCollection, currentUser, toggleGameView,
  myCollection, getCatalog, triggerEasterEgg,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('');

  return (
    <div>
      <Search
        setSearchQuery={setSearchQuery}
        setFilterBy={setFilterBy}
        getCatalog={getCatalog}
        catalog={catalog}
        filterBy={filterBy}
      />
      <CatalogList
        catalog={catalog}
        searchQuery={searchQuery}
        filterBy={filterBy}
        getMyCollection={getMyCollection}
        currentUser={currentUser}
        myCollection={myCollection}
        getCatalog={getCatalog}
        triggerEasterEgg={triggerEasterEgg}
        toggleGameView={toggleGameView}
      />
    </div>
  );
}

export default Catalog;
