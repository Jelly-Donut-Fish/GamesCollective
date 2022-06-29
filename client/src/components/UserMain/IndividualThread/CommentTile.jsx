import React from 'react';
import { MdComment, MdReport } from 'react-icons/md';

function CommentTile({ comment }) {
  return (
    <div className="commentTile">
      <div className="postInfo">
        <span className="Author">{comment.username}</span>
        <span className="authorRating">{comment.rating}</span>
        <span className="postDate">{comment.datePosted}</span>
      </div>
      <div className="commentBody">
        <p className="postBody">{comment.body}</p>
      </div>
      <div className="actionsIcons">
        <span>{MdReport}</span>
      </div>
    </div>
  );
}

export default CommentTile;
