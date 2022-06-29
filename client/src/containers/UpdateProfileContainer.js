import { connect } from 'react-redux';
import UpdateProfile from '../components/LandingPage/UpdateProfile';
// import getUser from '../../actions/getUser';

const mapStateToProps = (state) => (
  {
    //  place state props that need to be added
    currentUser: state.currentUser,
  }
);

// example of mapping reducers
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUser: (currentUser) => dispatch(getUser(currentUser)),
//   };
// };

const UpdateProfileContainer = connect(mapStateToProps)(UpdateProfile);

export default UpdateProfileContainer;
