import React, { useState } from 'react';
import axios from 'axios';
import ThreadsList from './ThreadsList';
import SingleThreadView from '../IndividualThread/SingleThreadView';
import AddThread from './AddThread';

function ThreadsView({ currentUser, game }) {
  const [addThreadView, setAddThreadView] = useState(false);
  const [singleThreadView, setSingleThreadView] = useState(false);
  const [selectedThread, setSelectedThread] = useState({});
  const [singleThreadComments, setSingleThreadComments] = useState([]);
  const [threads, setThreads] = useState([]);

  const toggleAddThreadView = (event) => {
    event.preventDefault();
    setAddThreadView(!addThreadView);
  };

  const toggleSingleThreadView = (comment = {}) => {
    const childrenComments = [];
    threads.forEach((thread) => {
      if (thread.parentId === comment.commentId) {
        childrenComments.push(thread);
      }
    });
    setSelectedThread(comment);
    setSingleThreadComments(childrenComments);
    setSingleThreadView(!singleThreadView);
  };

  const addThread = (thread) => {
    setThreads([...threads, thread]);
    axios.post('/comments', thread);
  };

  return (
    <div>
      <h2>{game.name}</h2>
      { !singleThreadView && (
      <ThreadsList
        toggleThreadView={toggleSingleThreadView}
        threads={threads}
      />
      )}
      {singleThreadView && (
      <SingleThreadView
        toggleThreadView={toggleSingleThreadView}
        thread={selectedThread}
        childComments={singleThreadComments}
        currentUser={currentUser}
        gameId={game.id}
        game={game.name}
      />
      )}
      <button
        type="button"
        onClick={toggleAddThreadView}
      >
        Add Thread
      </button>
      {addThreadView && (
      <AddThread
        toggleAddThread={toggleAddThreadView}
        addThread={addThread}
        threads={threads}
        currentUser={currentUser}
        gameId={game.id}
      />
      )}
    </div>
  );
}

export default ThreadsView;
