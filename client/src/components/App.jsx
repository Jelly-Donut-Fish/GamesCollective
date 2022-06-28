import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageContainer from '../containers/LandingPageContainer';
import UserMainContainer from '../containers/UserMainContainer';
import Register from './LandingPage/Register';
import Reset from './LandingPage/Reset';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageContainer />} />
        <Route path="/UserMain" element={<UserMainContainer />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;
