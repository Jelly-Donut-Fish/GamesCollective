import React from 'react';
import ThreadTopic from './ThreadTopic';
import Comments from './Comments';
import AddComment from './AddComment';

function SingleThreadView() {
  return (
    <div>
      <ThreadTopic />
      <Comments />
      <AddComment />
    </div>
  );
}

export default SingleThreadView;
