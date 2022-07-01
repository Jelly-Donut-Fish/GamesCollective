import React from 'react';
import ThreadsTile from './ThreadsTile';

function ThreadsList({ toggleThreadView, threads }) {
  if (threads.length > 0) {
    var parents = threads.filter((thread) => (thread.parent_id === 0))
  }

  return (
    <div>
      <h2 className="discussions">Discussions</h2>
      <div className="threadsList">
        {
        threads.length > 0 ? parents.map((parent) => (
          <ThreadsTile
            toggleThreadView={toggleThreadView}
            thread={parent}
            key={parent.id}
          />
        ))
          : (<div>Sorry, no threads found...</div>)
      }
      </div>
    </div>
  );
}

export default ThreadsList;
