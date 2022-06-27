import React, { useState } from 'react';
import Login from './LogIn';

function LandingPage() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <Login />
    </div>
  );
}

export default LandingPage;
