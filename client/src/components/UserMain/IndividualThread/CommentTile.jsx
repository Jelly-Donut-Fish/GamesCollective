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
        <span className="postDate">{moment(comment.date).format('d MMM, YYYY')}</span>
      </div>
      <div className="commentBody">
        <p className="postBody">{comment.body}</p>
      </div>
      <div className="actionsIcons">
        <MdReport onClick={reportComment} />
      </div>
    </div>
  );
}

export default CommentTile;
