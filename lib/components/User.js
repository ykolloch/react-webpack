import React from 'react';

const User = (props) => {
    const {user, store} = props;

    return (
        <div>
            <h5>{user.username}</h5>
            <p>{user.name} (<a href="{user.email}">{user.email}</a>)</p>
        </div>
    );
};

export default User;