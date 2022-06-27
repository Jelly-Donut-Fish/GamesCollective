import { connect } from 'react-redux';
import LandingPage from '../components/LandingPage/LandingPage.jsx';

const mapStateToProps = (state) => (
  {
    //  place state props that need to be added
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

const LandingPageContainer = connect(mapStateToProps)(LandingPage);

export default LandingPageContainer;
