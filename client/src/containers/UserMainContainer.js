import { connect } from 'react-redux';
import UserMain from '../components/UserMain/UserMain.jsx';

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

const UserMainContainer = connect(mapStateToProps)(UserMain);

export default UserMainContainer;
