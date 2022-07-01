import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdClear } from 'react-icons/md';
import ThreadsList from './ThreadsList';
import SingleThreadView from '../IndividualThread/SingleThreadView';
import AddThread from './AddThread';

function ThreadsView({ currentUser, game, exitModal }) {
  const [addThreadView, setAddThreadView] = useState(false);
  const [singleThreadView, setSingleThreadView] = useState(false);
  const [selectedThread, setSelectedThread] = useState({});
  const [singleThreadComments, setSingleThreadComments] = useState([]);
  const [threads, setThreads] = useState([]);

  const selectedGame = game.id || 0;

  useEffect(() => {
    axios.get(`/comments/${selectedGame}`)
      .then((res) => {
        setThreads(res.data);
      })
      .catch((err) => console.log(err));
  }, [game]);

  const toggleAddThreadView = (event) => {
    event.preventDefault();
    setAddThreadView(!addThreadView);
  };

  const toggleSingleThreadView = (comment = {}) => {
    setSelectedThread(comment);
    setSingleThreadComments(filterChildren(comment));
    setSingleThreadView(!singleThreadView);
  };

  const filterChildren = (comment = {}) => {
    const childrenComments = [];
    threads.forEach((thread) => {
      if (thread.parent_id === comment.id) {
        childrenComments.push(thread);
      }
    });
    return childrenComments;
  };

  const addThread = (thread) => {
    axios.post('/comments', thread)
      .then(() => (axios.get(`/comments/${game.id}`)))
      .then((res) => setThreads(res.data))
      .then(() => setSingleThreadComments(filterChildren(selectedThread)))
      .catch((err) => console.log(err));

    if (addThreadView) {
      setAddThreadView(!addThreadView);
    }
  };

  const exit = (event) => {
    event.preventDefault();
    exitModal(game);
  };

  return (
    <div className="outerModal">
      <div className="modal">
        <div className="threadsView">
          <div className="threadsHeader">
            <div className="close">
              <MdClear onClick={exit} />
            </div>
            <div className="clear" />
            <h2 className="gameDiscussed">{game.name}</h2>
            <br />
            <div>
              <button
                type="button"
                onClick={toggleAddThreadView}
                className="addThreadButton"
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
            {singleThreadView && (
              <span
                onClick={toggleSingleThreadView}
                className="link">
                Go Back to Discussions
              </span>
            )}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreadsView;
