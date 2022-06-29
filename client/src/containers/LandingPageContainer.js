import { connect } from 'react-redux';
import LandingPage from '../components/LandingPage/LandingPage';

const mapStateToProps = (state) => (
  {
    //  place state props that need to be added
    catalog: state.catalog,
  }
);

// example of mapping reducers
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

const LandingPageContainer = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export default LandingPageContainer;
