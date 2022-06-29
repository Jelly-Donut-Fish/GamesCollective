import { connect } from 'react-redux';
import Register from '../components/LandingPage/Register';

const mapStateToProps = (state) => (
  {
    //  place state props that need to be added
    ccurrentUser: state.currentUser,
  }
);

// example of mapping reducers
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (currentUser) => dispatch(getUser(currentUser)),
  };
};

const RegisterPageContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterPageContainer;
