import React from 'react';
import ThreadTopic from './ThreadTopic';
import Comments from './Comments';
import AddComment from './AddComment';

function SingleThreadView({ thread, childComments }) {
  return (
    <div>
      <ThreadTopic thread={thread} />
      <Comments comments={childComments} />
      <AddComment />
    </div>
  );
}

export default SingleThreadView;
