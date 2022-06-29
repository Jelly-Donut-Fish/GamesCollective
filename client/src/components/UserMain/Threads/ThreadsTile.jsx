import React from 'react';
import { MdComment, MdReport } from 'react-icons/md';

function ThreadsTile({ toggleThreadView, thread }) {
  const handleThreadClick = (event) => {
    event.preventDefault();
    toggleThreadView(thread);
  };
  return (
    <div>
      <div>
        <span>{thread.username}  </span>
        <span>{thread.rating}  </span>
        <span>{thread.datePosted}</span>
      </div>
      <div>
        <h3 onClick={handleThreadClick}>{thread.title}</h3>
      </div>
      <div>
        <button onClick={handleThreadClick}>discuss</button>
        <button>report</button>
      </div>
    </div>
  );
}

export default ThreadsTile;
