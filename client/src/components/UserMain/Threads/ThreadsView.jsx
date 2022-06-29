import React, { useState } from 'react';
import ThreadsList from './ThreadsList';
import SingleThreadView from '../IndividualThread/SingleThreadView';
import AddThread from './AddThread';

const dummyThreads = [
  {
    commentId: 1, parentId: 0, username: 'WillyWonka', rating: 4, datePosted: '04/24/1994', body: 'Opened a candy factory in this game and had some guests over. Things got a little messy.', title: 'Come on in, the chocolate is fine!',
  },
  {
    commentId: 446, parentId: 0, username: 'GrandpaJoe', rating: 4, datePosted: '04/24/1994', body: 'All I\'m saying is I was bedridden for years and I got to Fly. No regrets.', title: 'Fly like a bubble... to the fan',
  },
  {
    commentId: 545, parentId: 1, username: 'Augustus', rating: 4, datePosted: '04/24/1994', body: 'This chocolate was amazing but they should really put up a no swimming sign.', title: null,
  },
  {
    commentId: 546, parentId: 1, username: 'Violet', rating: 3, datePosted: '04/24/1994', body: 'Amazing you say? Well I want it now!', title: null,
  },
];

function ThreadsView() {
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
      <ThreadsList toggleThreadView={toggleSingleThreadView} threads={threads} />
      {singleThreadView && (
      <SingleThreadView
        toggleThreadView={toggleSingleThreadView}
        thread={selectedThread}
        childComments={singleThreadComments}
      />
      )}
      <button
        type="button"
        onClick={toggleAddThreadView}
      >
        Add Thread
      </button>
      {addThreadView && (
      <AddThread toggleAddThread={toggleAddThreadView} addThread={addThread} threads={threads} />
      )}
    </div>
  );
}

export default ThreadsView;
