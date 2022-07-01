import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageContainer from '../containers/LandingPageContainer';
import UserMainContainer from '../containers/UserMainContainer';
import ResetPageContainer from '../containers/ResetPageContainer';
import RegisterPageContainer from '../containers/RegisterPageContainer';
import UpdateProfileContainer from '../containers/UpdateProfileContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageContainer />} />
        <Route path="/UserMain" element={<UserMainContainer />} />
        <Route path="/Register" element={<RegisterPageContainer />} />
        <Route path="/Reset" element={<ResetPageContainer />} />
        <Route path="/UpdateProfile" element={<UpdateProfileContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
