import React, { useState } from 'react';
import ThreadTopic from './ThreadTopic';
import Comments from './Comments';
import AddComment from './AddComment';

function SingleThreadView({ thread, childComments, currentUser, gameId }) {
  const [comments, setComments] = useState(childComments);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <ThreadTopic thread={thread} />
      <Comments comments={childComments} />
      <AddComment
        addComment={addComment}
        currentUser={currentUser}
        gameId={gameId}
        parentId={thread.id}
      />
    </div>
  );
}

export default SingleThreadView;
