import React, { useState } from 'react';
import { MdClear } from "react-icons/md";


function AddThread({
  toggleAddThread, addThread, currentUser, gameId,
}) {
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadBody, setNewThreadBody] = useState('');

  const exitAddThread = (event) => {
    event.preventDefault();
    toggleAddThread();
  };

  const handleTyping = (event) => {
    const { id, value } = event.target;
    switch (id) {
      case 'newThreadTitle':
        setNewThreadTitle(value);
        break;
      case 'newThreadBody':
        setNewThreadBody(value);
        break;
      default:
        alert('Typing in invalid input');
    }
  };

  const postThread = (event) => {
    event.preventDefault();
    const postBody = {
      user_id: currentUser.id,
      game_id: gameId,
      body: newThreadBody,
      parent_comment_id: 0,
      title: newThreadTitle,
    };

    addThread(postBody);
  };

  return (
    <div>
      <span onClick={exitAddThread}>{MdClear}</span>
      <form>
        <input
          type="text"
          id="newThreadTitle"
          onChange={handleTyping}
          label="Title"
          placeholder="Topic Title"
        />
        <br />
        <textarea
          id="newThreadBody"
          rows="5"
          col="200"
          onChange={handleTyping}
          label="Body"
          placeholder="What are your thoughts?"
        />
      </form>
      <button type="submit" onClick={postThread}>Submit</button>
    </div>
  );
}

export default AddThread;
