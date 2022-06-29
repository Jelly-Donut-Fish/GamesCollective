/* eslint-disable import/extensions */
import { connect } from 'react-redux';
import Catalog from '../components/UserMain/PublicCatalog/catalog.jsx';
import getMyCollection from '../../actions/getMyCollection.js';

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
    getMyCollection: (myCollection) => dispatch(getMyCollection(myCollection))
  };
};

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
