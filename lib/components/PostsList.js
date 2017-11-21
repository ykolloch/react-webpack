import React from 'react';
import Post from './Post';

const PostsList = (props) => {
    console.log(Object.values(props.posts).filter(function (post) {
        return post.userId == props.store.getSelectedUser();
    }));

    return (
        <div>
            {Object.values(props.posts).map(post =>
                <Post
                    key={post.id}
                    post={post}
                    store={props.store}
                />
            )}
        </div>
    );
};

export default PostsList;
