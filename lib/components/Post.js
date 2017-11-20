import React from 'react';

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
}

const Post = (props) => {
  const {post, actions} = props;
  const user = actions.lookupUser(post.userId);

  return (<div style={style.posts}>
    <div style={style.title}>{post.title}</div>
    <div style={style.user}>
      By:
      <a href="{user.website}">{user.username}
        ({user.name})</a>
    </div>
    <div style={style.body}>{post.body}</div>
  </div>)
}

export default Post;
