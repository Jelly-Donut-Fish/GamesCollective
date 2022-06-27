import React, { useState } from 'react';

function UserMain({ catalog }) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  console.log(catalog);
  return (
    <div>
      <p>
        You clicked
        {count}
        times
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UserMain;
