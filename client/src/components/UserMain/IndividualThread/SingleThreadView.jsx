import React, { useState } from 'react';
import ThreadTopic from './ThreadTopic';
import Comments from './Comments';
import AddComment from './AddComment';
import { MdClear } from 'react-icons/md';

function SingleThreadView({
  thread, childComments, currentUser, gameId, addThread,
}) {
  const addComment = (comment) => {
    addThread(comment);
  };

  return (
    <div>
      <div>
        <ThreadTopic thread={thread} />
        <Comments comments={childComments} />
        <AddComment
          thread={thread}
          addComment={addComment}
          currentUser={currentUser}
          gameId={gameId}
          parentId={thread.id}
        />
      </div>
    </div>
  );
}

export default SingleThreadView;
