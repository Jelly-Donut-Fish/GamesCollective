import React, { useState } from 'react';
import axios from 'axios';
import { MdClear } from 'react-icons/md'
import ThreadsList from './ThreadsList';
import SingleThreadView from '../IndividualThread/SingleThreadView';
import AddThread from './AddThread';

function ThreadsView({ currentUser, game, exitModal }) {
  const [addThreadView, setAddThreadView] = useState(false);
  const [singleThreadView, setSingleThreadView] = useState(false);
  const [selectedThread, setSelectedThread] = useState({});
  const [singleThreadComments, setSingleThreadComments] = useState([]);
  const [threads, setThreads] = useState([{
    id: 1,
    username: 'IsMyEl',
    date: 1656517924,
    title: 'Can play for hours',
    body: 'This game is so good. ',
    parent_id: 0,
    image_url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  }]);

  console.table(threads);

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
    axios.post('/comments', thread)
      .then(() => (axios.get(`/comments/${game.id}`)))
      .then((res) => setThreads(res.data))
      .catch((err) => console.log(err));
  };

  const exit = (event) => {
    event.preventDefault();
    exitModal();
  };

  return (
    <div>
      <h2>{game.name}</h2>
      {singleThreadView && (
        <span onClick={toggleSingleThreadView}>Go Back to Discussions</span>
      )}
      <span onClick={exit}>{MdClear}</span>
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
        addThread={addThread}
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
