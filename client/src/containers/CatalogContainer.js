/* eslint-disable import/extensions */
import { connect } from 'react-redux';
import Catalog from '../components/UserMain/PublicCatalog/Catalog.jsx';
import getMyCollection from '../../actions/getMyCollection.js';
import getCatalog from '../../actions/getCatalog.js';

const mapStateToProps = (state) => (
  {
    // place state props that need to be added
    catalog: state.catalog,
    currentUser: state.currentUser,
    myCollection: state.myCollection,
  }
);

// example of mapping reducers
const mapDispatchToProps = (dispatch) => {
  return {
    getMyCollection: (myCollection) => dispatch(getMyCollection(myCollection)),
    getCatalog: (catalog) => dispatch(getCatalog(catalog)),
  };
};

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
