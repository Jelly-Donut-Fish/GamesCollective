import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageContainer from '../containers/LandingPageContainer';
import UserMainContainer from '../containers/UserMainContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageContainer />} />
        <Route path="/UserMain" element={<UserMainContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
