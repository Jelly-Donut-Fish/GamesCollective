import React from 'react';
import { MdReport } from 'react-icons/md';
import axios from 'axios';
import moment from 'moment';

function CommentTile({ comment }) {
  const reportComment = (event) => {
    event.preventDefault();
    axios({
      method: 'put',
      url: `/comments/${comment.id}/report`,
    });
  }

  return (
    <div className="commentTile">
      <div className="postInfo">
        <span className="Author">{comment.username}</span>
        <span className="datePosted">{moment(comment.date).format('d MMM, YYYY')}</span>
      </div>
      <div className="commentBody">
        <p className="postBody">{comment.body}</p>
        <div className="actionsIcons">
          <MdReport onClick={reportComment} className="icon" />
        </div>
      </div>
    </div>
  );
}

export default CommentTile;
