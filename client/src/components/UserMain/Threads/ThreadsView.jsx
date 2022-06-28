import React from 'react';
import ThreadsList from './ThreadsList';
import IndividualThread from '../IndividualThread/SingleThreadView';

function ThreadsView() {
  return (
    <div>
      <ThreadsList />
      <IndividualThread />
    </div>
  );
}

export default ThreadsView;
