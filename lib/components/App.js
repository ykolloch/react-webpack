import React from 'react';
import DataApi from 'state-api/DataApi';
import PostsList from './PostsList';

class App extends React.Component {
  state = this.props.store.getState();


  render() {
    return (
        <PostsList
          posts={this.state.posts}
          store={this.props.store}
        />
    );
  }
}
export default App;
