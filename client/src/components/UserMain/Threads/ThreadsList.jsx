import React, { useState } from 'react';
import ThreadsTile from './ThreadsTile';

function ThreadsList({ toggleThreadView, threads }) {
  const parents = threads.filter((thread) => (thread.parent_id === 0)) || [];
  const [status, setStatus] = useState(false);

  const handleMoreThreads = function() {
    setStatus(true);
  };

  const handleCancel = function() {
    setStatus(false);
  };

  return (
    <div>
      <h3>Discussions</h3>
      <div>
        {parents.length > 3 && !status ?
          <>{parents.slice(0, 3).map((parent) => (
            <ThreadsTile
              toggleThreadView={toggleThreadView}
              thread={parent}
              key={parent.id}
            />
          ))}</>
        :
        <div className="moreThreadsModal">
          <span className="moreThreadsModalX" onClick={handleCancel}>&times;</span>
          {parents.map((parent) => (
            <ThreadsTile
              toggleThreadView={toggleThreadView}
              thread={parent}
              key={parent.id}
            />
          ))}
        </div>
        }
      </div>
      {parents.length > 3 && !status ? <button onClick={handleMoreThreads}>More Discussions</button> : <></>}
    </div>
  );
}

export default ThreadsList;
