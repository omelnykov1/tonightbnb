import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    render() {
        let { currentUser, logout } = this.props

        const display = currentUser ? (
            <div>
                <p>Hello, {currentUser.name}</p>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : (
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <br />
                    <Link to="/login">Log In</Link>
                </div>
            );

        return (
            <header>
                <div>
                    {display}
                </div>
            </header>
        );
    }
};

export default Greeting