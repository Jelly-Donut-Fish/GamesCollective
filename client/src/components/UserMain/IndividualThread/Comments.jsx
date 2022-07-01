import React from 'react';
import CommentTile from './CommentTile';

function Comments({ comments }) {
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => (
        <CommentTile comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default Comments;
