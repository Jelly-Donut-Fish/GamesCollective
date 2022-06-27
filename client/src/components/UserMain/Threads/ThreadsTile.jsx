import React from 'react';

const ThreadsTile = function (props) {
  return (
    <div>
      <span> This is a tile </span>
      <div>
        <span>Author</span>
        <span>Rating</span>
        <span>Date Posted</span>
      </div>
      <div>
        <h3>Thread Title</h3>
      </div>
      <div>
        <span>comment</span>
        <span>report</span>
      </div>
    </div>
  );
};

export default ThreadsTile;
