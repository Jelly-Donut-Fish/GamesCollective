/* eslint-disable import/extensions */
import { connect } from 'react-redux';
import MyCollection from '../components/UserMain/MyCollection/MyCollection.jsx';

const mapStateToProps = (state) => (
  {
    // place state props that need to be added
    catalog: state.catalog,
  }
);

// example of mapping reducers
// var mapDispatchToProps = (dispatch) => {
//   return {
//     setNewFilter: (filter) => dispatch(setNewFilter(filter)),
//     setUserIsSort: (boolValue) => dispatch(setUserIsSort(boolValue))
//   };
// };

const MyCollectionContainer = connect(mapStateToProps)(MyCollection);

export default MyCollectionContainer;
