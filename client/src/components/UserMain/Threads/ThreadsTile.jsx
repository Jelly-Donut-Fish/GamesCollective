import React from 'react';
import { MdComment, MdReport } from 'react-icons/md';
import axios from 'axios';

function ThreadsTile({ toggleThreadView, thread }) {
  const handleThreadClick = (event) => {
    event.preventDefault();
    toggleThreadView(thread);
  };

  const handleReport = (event) => {
    event.preventDefault();
    axios({
      method: 'PUT',
      url: `/comments/${thread.id}/report`,
    });
  };

  return (
    <div>
      <div>
        <span>{thread.username}  </span>
        <span>{thread.date}</span>
      </div>
      <div>
        <h3 onClick={handleThreadClick}>
          {thread.title}
        </h3>
      </div>
      <div>
        <button onClick={handleThreadClick}>discuss</button>
        <button onClick={handleReport}>report</button>
      </div>
    </div>
  );
}

export default ThreadsTile;
