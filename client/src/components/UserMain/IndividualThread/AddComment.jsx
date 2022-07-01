import React, { useState } from 'react';
import axios from 'axios';

function AddComment({ thread, addComment, currentUser, gameId }) {
  const [newCommentBody, setNewCommentBody] = useState('');

  let handleTyping = (event) => {
    setNewCommentBody(event.target.value);
  };

  const sendComment = (event) => {
    event.preventDefault();
    const comment = {
      user_id: currentUser.site_id,
      game_id: gameId,
      body: newCommentBody,
      parent_comment_id: thread.id,
    };
    addComment(comment);
  };

  return (
    <div>
      <form>
        <textarea id="newComment" onChange={handleTyping} value={newCommentBody} />
      </form>
      <button
        type="submit"
        onClick={sendComment}
      >
        Add Comment
      </button>
    </div>
  );
}

export default AddComment;
