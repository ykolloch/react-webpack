import React from 'react';
import Header from 'components/common/Header';
import PostsList from './PostsList';
import UserList from './UserList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickBy';
import Timestamp from './Timestamp';

const style = {
    content: {
        paddingTop: 10,
    }
};

class App extends React.Component {
    static childContextTypes = {
        store: PropTypes.object,
    };
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    state = this.props.store.getState();
    onStoreChange = () => {
        this.setState(this.props.store.getState());
    };
    componentDidMount() {
        this.subscribeId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.startClock();
    }
    componentWillUnmount() {
        this.props.store.unsubscribe(this.subscribeId);
    }

    render() {
        let {posts, searchTerm} = this.state;
        const searchRE = new RegExp(searchTerm, 'i');
        if(searchTerm) {
            posts = pickBy(posts, (value) => {
                return value.title.match(searchRE) || value.body.match(searchRE);
            });
        }
        return (
            <div>
                <Header/>
                <div style={style.content}>
                    <div className="row p-5">
                        <div className="col-sm-2 col-md-3">
                            <Timestamp/>
                            <SearchBar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-3">
                            <UserList
                                users={this.state.users}
                                store={this.props.store}
                            />
                        </div>
                        <div className="col-sm-10 col-md-8">
                            <PostsList
                                posts={posts}
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
