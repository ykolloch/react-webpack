import React from 'react';
import DataApi from 'state-api/DataApi';
import PostsList from './PostsList';

class App extends React.Component {
  state = {
    posts: this.props.initialData.posts,
    users: this.props.initialData.users,
  };

  postActions = {
    lookupUser: id => this.state.users[id],
  };

  render() {
    return (
        <PostsList
          posts={this.state.posts}
          postActions={this.postActions}
        />
    );
  }
}
export default App;
