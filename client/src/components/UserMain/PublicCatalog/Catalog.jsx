import React, { useState } from 'react';
import CatalogList from './CatalogList.jsx'
import Search from './Search.jsx'

function Catalog({ catalog }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('');

  return (
    <div>
      <CatalogList catalog={catalog} searchQuery={searchQuery} filterBy={filterBy} />
      <Search setSearchQuery={setSearchQuery} setFilterBy={setFilterBy} />
    </div>
  );
}

export default Catalog;
