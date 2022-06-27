import React from 'react';

function GameComment() {
  return (
    <div>
      <label htmlFor="add comment">
        <textarea id="add comment" name="comment" rows="5" cols="70" placeholder="Add your comment here" />
      </label>
      <button type="button">Add Comment</button>
      <button type="button">Cancel</button>
    </div>
  );
}

export default GameComment;
