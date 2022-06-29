/* eslint-disable import/extensions */
import { connect } from 'react-redux';
import MyCollection from '../components/UserMain/MyCollection/MyCollection.jsx';

const mapStateToProps = (state) => (
  {
    // place state props that need to be added
    catalog: state.catalog,
    myCollection: state.myCollection,
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    getMyCollection: (myCollection) => dispatch(getMyCollection(myCollection))
  };
};

const MyCollectionContainer = connect(mapStateToProps, mapDispatchToProps)(MyCollection);

export default MyCollectionContainer;
