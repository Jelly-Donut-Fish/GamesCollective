import React from 'react';
import { MdComment, MdReport, MdClear } from 'react-icons/md';

function ThreadTopic({ thread }) {
  return (
    <div>
      <div>
        <h2>{thread.title}</h2>
      </div>
      <div>
        <div className="postInfo">
          <span>{thread.username}</span>
          <span>{thread.rating}</span>
          <span>{thread.datePosted}</span>
        </div>
        <h3>{thread.title}</h3>
        <p>
          {thread.body}
        </p>
      </div>
      <div>
        <span>{MdComment}</span>
        <span>{MdReport}</span>
      </div>
    </div>
  );
}

export default ThreadTopic;
