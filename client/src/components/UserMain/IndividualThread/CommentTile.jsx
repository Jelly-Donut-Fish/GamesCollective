import React from 'react';
import {  MdReport } from 'react-icons/md';
import axios from 'axios';

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
        <span className="postDate">{comment.date}</span>
      </div>
      <div className="commentBody">
        <p className="postBody">{comment.body}</p>
      </div>
      <div className="actionsIcons">
        <span onClick={reportComment}>
          {MdReport}
        </span>
      </div>
    </div>
  );
}

export default CommentTile;
