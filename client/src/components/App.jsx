import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< Updated upstream
// import LandingPage from './LandingPage/LandingPage';
import UserMain from './UserMain/UserMain';
=======
import UserMainContainer from '../containers/UserMainContainer.js';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
        {/* <Route exact path="/"><LandingPage /></Route> */}
        <Route path="/user"><UserMain /></Route>
=======
        <Route path="/" element={<UserMainContainer />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
