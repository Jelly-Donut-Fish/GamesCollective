import React, { useState } from 'react';

function AddThread(props) {
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadBody, setNewThreadBody] = useState('');

  return (
    <div>
      <form>
        <input type="text" />
        <input type="textarea" />
      </form>
    </div>
  );
}

export default AddThread;
