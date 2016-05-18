import React, {PropTypes} from 'react';

const MainView = props => {
    let ghUserNodes = props.ghUsers.map( (user) => {
        return (
            <li key={user.id}>
                <div>{user.login}</div>
            </li>
        );
    });

    return (
        <div className="main-view-wrapper">
            <ul className="user-list">
                {ghUserNodes}
            </ul>

            <button onClick={props.refreshUserList}>Refresh</button>
        </div>
    );
}

MainView.propTypes = {
    ghUsers: PropTypes.array.isRequired,
    refreshUserList: PropTypes.func
};

export default MainView;
