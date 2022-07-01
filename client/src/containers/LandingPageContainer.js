import { connect } from 'react-redux';
import LandingPage from '../components/LandingPage/LandingPage';
import getUser from '../../actions/getUser';

const mapStateToProps = (state) => (
  {
    //  place state props that need to be added
    currentUser: state.currentUser,
  }
);

// example of mapping reducers
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (currentUser) => dispatch(getUser(currentUser)),
  };
};

const LandingPageContainer = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export default LandingPageContainer;
