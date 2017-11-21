import React from 'react';
import Header from 'components/common/Header';
import PostsList from './PostsList';
import UserList from './UserList';

const style = {
    content: {
        paddingTop: 10,
    }
};

class App extends React.Component {
    state = this.props.store.getState();

    

    render() {
        return (
            <div>
                <Header/>
                <div style={style.content}>
                    <div className="row">
                        <div className="col-sm-2 col-md-3">
                            <UserList
                                users={this.state.users}
                                store={this.props.store}
                            />
                        </div>
                        <div className="col-sm-10 col-md-8">
                            <PostsList
                                posts={this.state.posts}
                                store={this.props.store}
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
