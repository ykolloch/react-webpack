import React from 'react';
import Post from './Post';

const PostsList = (props) => {
  return (
    <div>
        {Object.values(props.posts).map(post =>
          <Post
            key={post.id}
            post={post}
            actions={props.postActions}
          />
        )}
    </div>
  )
}

export default PostsList;
