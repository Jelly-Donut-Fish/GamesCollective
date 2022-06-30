import React from 'react';
import ThreadsTile from './ThreadsTile';

function ThreadsList({ toggleThreadView, threads }) {
  const parents = threads.filter((thread) => (thread.parentId === 0));
  console.log(parents);
  return (
    <div>
      <span>Threads List will go here</span>
      <div>
        {parents.map((parent) => (
          <ThreadsTile
            toggleThreadView={toggleThreadView}
            thread={parent}
            key={parent.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ThreadsList;
