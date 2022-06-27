/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageContainer from '../containers/LandingPageContainer.js';
import UserMainContainer from '../containers/UserMainContainer.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/"><LandingPage /></Route> */}
        <Route path="/user"><UserMainContainer /></Route>
        <Route path="/landingpage"><LandingPageContainer /></Route>
      </Routes>
    </Router>
  );
}

export default App;
