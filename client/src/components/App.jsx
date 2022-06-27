import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './LandingPage/LandingPage';
import UserMain from './UserMain/UserMain';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/"><LandingPage /></Route> */}
        <Route path="/user"><UserMain /></Route>
      </Routes>
    </Router>
  );
}

export default App;
