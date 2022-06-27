import React from 'react';
import ThreadTopic from './ThreadTopic';
import Comments from './Comments';

const SingleThreadView = function (props) {
  return (
    <div>
      <ThreadTopic />
      <Comments />
    </div>
  );
};

export default SingleThreadView;
