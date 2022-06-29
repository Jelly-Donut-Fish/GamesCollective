import React from 'react';

function CommentTile() {
  return (
    <div className="commentTile">
      <div className="postInfo">
        <span className="Author">Author</span>
        <span className="authorRating">Author Rating</span>
        <span className="postDate">Date Posted</span>
      </div>
      <div className="commentBody">
        <p className="postBody">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</p>
      </div>
      <div className="actionsIcons">
        <span>comment icon</span>
        <span>report icon</span>
      </div>
    </div>
  );
}

export default CommentTile;
