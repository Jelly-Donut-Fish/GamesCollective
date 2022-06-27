import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserMainContainer from '../containers/UserMainContainer.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserMainContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
