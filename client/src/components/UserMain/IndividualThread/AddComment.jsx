import React, { useState } from 'react';
import axios from 'axios';

function AddComment({ addComment, currentUser, gameId }) {
  const [newCommentBody, setNewCommentBody] = useState('');

  let handleTyping = (event) => {
    setNewCommentBody(event.target.value);
  };

  const sendComment = (event) => {
    event.preventDefault();
    let comment = {
      user_id: currentUser.id,
      game_id: gameId,
      body: newCommentBody,
      parent_comment_id
    };
    //axios.post()
    addComment(comment);

  };

  return (
    <div>
      <form>
        <input id="newComment" type="textarea" onChange={handleTyping} value={newCommentBody} />
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
