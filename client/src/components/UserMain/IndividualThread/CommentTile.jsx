import React from 'react';
import { MdComment, MdReport } from 'react-icons/md';

function CommentTile({ comment }) {


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
        <span onClick={reportComment}>{MdReport}</span>
        <span onClick={}
      </div>
    </div>
  );
}

export default CommentTile;
