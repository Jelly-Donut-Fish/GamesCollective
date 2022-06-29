import React, { useState } from 'react';
import CatalogList from './CatalogList.jsx'
import Search from './Search.jsx'

function Catalog({ catalog }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <CatalogList catalog={catalog} searchQuery={searchQuery} />
      <Search setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default Catalog;
