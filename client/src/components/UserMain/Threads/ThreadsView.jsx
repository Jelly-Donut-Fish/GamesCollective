import React, { useState } from 'react';
import ThreadsList from './ThreadsList';
import IndividualThread from '../IndividualThread/SingleThreadView';
import AddThread from './AddThread';

function ThreadsView() {
  const [addThreadView, setAddThreadView] = useState(false);

  const toggleAddThreadView = (event) => {
    event.preventDefault();
    setAddThreadView(!addThreadView);
  };

  return (
    <div>
      <ThreadsList />
      <IndividualThread />
      <button
        type="button"
        onClick={toggleAddThreadView}
      >
        Add Thread
      </button>
      {addThreadView && <AddThread />}
    </div>
  );
}

export default ThreadsView;
