import React, { useState } from 'react';
import axios from 'axios';

function AddComment() {
  const [newCommentBody, setNewCommentBody] = useState('');

  let handleTyping = (event) => {
    setNewCommentBody(event.target.value);
  };

  const sendComment = (event) => {
    event.preventDefault();
    //axios.post()
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
