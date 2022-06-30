import React from 'react';
import ThreadsTile from './ThreadsTile';

function ThreadsList({ toggleThreadView, threads }) {
  const parents = threads.filter((thread) => (thread.parent_id === 0)) || [];
  return (
    <div>
      <h3>Discussions</h3>
      <div className="threadsList">
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
