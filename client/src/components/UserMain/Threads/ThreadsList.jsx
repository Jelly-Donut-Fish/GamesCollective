import React from 'react';
import ThreadsTile from './ThreadsTile';

function ThreadsList({ toggleThreadView, threads }) {
  const parents = threads.filter((thread) => (thread.parentId === null));
  console.log(parents);
  return (
    <div>
      <span>Threads List will go here</span>
      <div>
        {parents.map((parent) => (
          <ThreadsTile
            toggleThreadView={toggleThreadView}
            thread={parent}
          />
        ))}
      </div>
    </div>
  );
}

export default ThreadsList;
