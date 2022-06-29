/* eslint-disable import/extensions */
import { connect } from 'react-redux';
import Catalog from '../components/UserMain/PublicCatalog/catalog.jsx';

const mapStateToProps = (state) => (
  {
    // place state props that need to be added
    catalog: state.catalog,
    currentUser: state.currentUser,
  }
);

// example of mapping reducers
// var mapDispatchToProps = (dispatch) => {
//   return {
//     setNewFilter: (filter) => dispatch(setNewFilter(filter)),
//     setUserIsSort: (boolValue) => dispatch(setUserIsSort(boolValue))
//   };
// };

const CatalogContainer = connect(mapStateToProps)(Catalog);

export default CatalogContainer;
