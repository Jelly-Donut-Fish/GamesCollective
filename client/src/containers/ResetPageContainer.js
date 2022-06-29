import { connect } from 'react-redux';
import Reset from '../components/LandingPage/Reset';

const mapStateToProps = (state) => (
  {
    //  place state props that need to be added
    catalog: state.catalog,
  }
);

// example of mapping reducers
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUser: (user) => dispatch(setUser(user)),
//   };
// };

const ResetPageContainer = connect(mapStateToProps)(Reset);

export default ResetPageContainer;
