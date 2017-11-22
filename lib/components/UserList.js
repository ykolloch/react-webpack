import React from 'react';
import User from './User';

const style = {
    userlist: {
        color: '#ffffff',
        background: '#343a40'
    }
};

const UserList = (props) => {

    return (
        <div className="container">
            <ul>
                {Object.values(props.users).map(user =>
                    <li style={style.userlist}
                        key={user.id}>
                        <User
                            user={user}
                            store={props.store}
                        />
                    </li>
                )}
            </ul>

        </div>
    );
};

export default UserList;