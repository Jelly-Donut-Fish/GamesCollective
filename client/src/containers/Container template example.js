// import { connect } from "react-redux";
// import App from "../components/App.jsx";

// // this is where you add what props you want from store.js

// const mapStateToProps = (state) => (
//   {
//     //place state props that need to be added
//     catalog: catalog
//   }
// );

// // example of mapping reducers this is what state you want to be able to change

// var mapDispatchToProps = (dispatch) => {
//   return {
//     getCatalog: (filter) => dispatch(getCatalog(filter)),
//     setUserIsSort: (boolValue) => dispatch(setUserIsSort(boolValue))
//   };
// };

// function Rare ( { getCatalog })
// // this is where you connect the container to the actual component

// const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
// // eslint-disable-next-line max-len
// // if your component doesnt effect state in anyway you can remove the mapDispatchToProps in the above line, and the variable

// export default AppContainer;
