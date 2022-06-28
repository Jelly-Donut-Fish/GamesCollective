import { connect } from 'react-redux';
import Register from '../components/LandingPage/Register';

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

const RegisterPageContainer = connect(mapStateToProps)(Register);

export default RegisterPageContainer;
