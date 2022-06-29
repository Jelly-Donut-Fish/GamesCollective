import React, { useState } from 'react';
import { MdClear } from "react-icons/md";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from '../../../authentication/firebase';

function AddThread({ toggleAddThread, addThread, threads }) {
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadBody, setNewThreadBody] = useState('');
  const [user] = useAuthState(auth);

  const exitAddThread = (event) => {
    event.preventDefault();
    toggleAddThread();
  };

  const handleTyping = (event) => {
    let id = event.target.id;
    let value = event.target.value;
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
      commentId: ++threads.length,
      parentId: null,
      author: user,
      datePosted: Date.now(),
      rating: 4,
      title: newThreadTitle,
      body: newThreadBody,
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
          rows="10"
          col="100"
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
