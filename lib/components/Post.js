import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const style = {
    posts: {
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold'
    },
    user: {
        paddingTop: 10,
        paddingBottom: 10
    },
    body: {
        paddingLeft: 20
    }
};

const Post = (props) => {
    const {post, user} = props;

    return (<div style={style.posts}>
        <div style={style.title}>{post.title}</div>
        <div style={style.user}>
            By:
            <a href="{user.website}">{user.username}
                ({user.name})</a>
        </div>
        <div style={style.body}>{post.body}</div>
    </div>);
};

Post.propType = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired
    })
};

function extraProps(store, originalProps) {
    return {
        user: store.lookupUser(originalProps.post.userId),
    };
}

export default storeProvider(extraProps)(Post);
