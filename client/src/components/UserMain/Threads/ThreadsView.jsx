import React, { useState } from 'react';
import ThreadsList from './ThreadsList';
import SingleThreadView from '../IndividualThread/SingleThreadView';
import AddThread from './AddThread';


const dummyThreads = [
  {
    id: 1, username: 'WillyWonka', date: '04/24/1994', title: 'Come on in, the chocolate is fine!', body: 'Opened a candy factory in this game and had some guests over. Things got a little messy.', parent_id: 0,
  },
  {
    id: 446, username: 'GrandpaJoe', date: '04/24/1994', title: 'Fly like a bubble... to the fan', body: 'All I\'m saying is I was bedridden for years and I got to Fly. No regrets.', parent_id: 0,
  },
  {
    id: 545, username: 'Augustus', date: '04/24/1994', title: null, body: 'This chocolate was amazing but they should really put up a no swimming sign.', parent_id: 1,
  },
  {
    id: 546, username: 'Violet', date: '04/24/1994', title: null, body: 'Amazing you say? Well I want it now!', parent_id: 1,
  },
];

function ThreadsView({ currentUser, game }) {
  const [addThreadView, setAddThreadView] = useState(false);
  const [singleThreadView, setSingleThreadView] = useState(false);
  const [selectedThread, setSelectedThread] = useState({});
  const [singleThreadComments, setSingleThreadComments] = useState([]);
  const [threads, setThreads] = useState(dummyThreads);

  const toggleAddThreadView = (event) => {
    event.preventDefault();
    setAddThreadView(!addThreadView);
  };

  const toggleSingleThreadView = (comment = {}) => {
    let childrenComments = [];
    dummyThreads.forEach((thread) => {
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
  };

  return (
    <div>
      <ThreadsList
        toggleThreadView={toggleSingleThreadView}
        threads={threads}
      />
      {singleThreadView && (
      <SingleThreadView
        toggleThreadView={toggleSingleThreadView}
        thread={selectedThread}
        childComments={singleThreadComments}
        currentUser={currentUser}
        gameId={game.id}
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
