import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData.json';
import PostsList from './PostsList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: api.getPosts(),
      users: api.getUsers(),
    };
  }

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
