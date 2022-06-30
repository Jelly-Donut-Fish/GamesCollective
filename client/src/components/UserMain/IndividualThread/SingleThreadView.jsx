import React, { useState } from 'react';
import ThreadTopic from './ThreadTopic';
import Comments from './Comments';
import AddComment from './AddComment';

function SingleThreadView({
  thread, childComments, currentUser, gameId, game
}) {
  const [comments, setComments] = useState(childComments);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <div>
        <h2>{game}</h2>
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
