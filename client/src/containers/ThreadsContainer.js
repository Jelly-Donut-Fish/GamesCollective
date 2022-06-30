import { connect } from "react-redux";
import ThreadsView from '../components/UserMain/Threads/ThreadsView';

// // this is where you add what props you want from store.js

const mapStateToProps = (state) => (
  {
//  place state props that need to be added
    currentUser: state.currentUser,
  }
);

// // this is where you connect the container to the actual component

const ThreadsContainer = connect(mapStateToProps)(ThreadsView);
// eslint-disable-next-line max-len
//if your component doesnt effect state in anyway you can remove the mapDispatchToProps in the above line, and the variable

export default ThreadsContainer;
