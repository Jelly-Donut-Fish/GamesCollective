import React from 'react';
import { MdComment, MdReport } from 'react-icons/md';
import axios from 'axios';
import moment from 'moment';

function ThreadsTile({ toggleThreadView, thread }) {
  const handleThreadClick = (event) => {
    event.preventDefault();
    toggleThreadView(thread);
  };

  const handleReport = (event) => {
    event.preventDefault();
    axios({
      method: 'put',
      url: `/comments/${thread.id}/report`,
    });
  };

  return (
    <div className="threadTile">
      <div className="postInfo">
        <span>{thread.username}</span>
        <span className="datePosted">{moment(thread.date).format("d MMM, YYYY")}</span>
      </div>
      <div className="clear" />
      <div>
        <h3 className="link" onClick={handleThreadClick}>
          {thread.title}
        </h3>
      </div>
      <div className="actionsIcons">
        <MdComment onClick={handleThreadClick} alt="discuss" className="icon" />
        <MdReport onClick={handleReport} alt="report" className="icon" />
      </div>
      <div className="clear" />
    </div>
  );
}

export default ThreadsTile;
