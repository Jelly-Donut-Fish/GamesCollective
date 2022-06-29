import React, {useState} from 'react';

function AddComment() {
  const [newCommentBody, setNewCommentBody] = useState('');

  let handleTyping = (event) => {
    setNewCommentBody(event.target.value);
  };

  return (
    <div>
      <form>
        <input id="newComment" type="textarea" onChange={handleTyping} value={newCommentBody} />
      </form>
      <button type="submit">submit</button>
    </div>
  );
}

export default AddComment;
