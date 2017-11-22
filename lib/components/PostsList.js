import React from 'react';
import Post from './Post';

class PostsList extends React.PureComponent {
    render() {
        return (
            <div>
                {Object.values(this.props.posts).map(post =>
                    <Post
                        key={post.id}
                        post={post}
                    />
                )}
            </div>
        );
    }
}

export default PostsList;
