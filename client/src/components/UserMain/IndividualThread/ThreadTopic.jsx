import React from 'react';
import { MdComment, MdReport, MdClear } from 'react-icons/md';
import moment from 'moment';

function ThreadTopic({ thread }) {
  return (
    <div>
      <div>
        <h2>{thread.title}</h2>
      </div>
      <div className="topic">
        <div className="postInfo">
          <span>{thread.username}</span>
          <span className="datePosted">{moment(thread.date).format('d MMM, YYYY')}</span>
          <div className="clear" />
        </div>
        <h3>{thread.title}</h3>
        <br />
        <p>
          {thread.body}
        </p>
        <div className="actionsIcons">
          <MdReport className="icon" />
        </div>
      </div>
    </div>
  );
}

export default ThreadTopic;
