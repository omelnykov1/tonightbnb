import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.logout()
    }

    render() {
        let { currentUser, logout, openModal } = this.props

        const display = currentUser ? (
            <div>
                <Link className="nav-content" to="#">Messages</Link>
                <button className="nav-content" onClick={this.handleClick}>Log Out</button>
            </div>
        ) : (
                <nav className="navbar">
                    <div className="nav-signin"onClick={() => openModal('signup')}>Sign up</div>
                    <div className="nav-signin"onClick={() => openModal('login')}>Log In</div>
                </nav>
            );

        return (
            <header>
                <div className="navbar">
                    <div className="nav">
                        <div className="nav-1">
                            <Link to="/"><img className="logo" src={window.logo} /></Link>
                            <a href="/"><img src="https://fontmeme.com/permalink/200603/be1991fbd18af4d63ba11a9437ca05c8.png" alt="famous-fonts" border="0"/></a>
                        </div>
                        <div className="nav-2">
                            {display}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};

export default withRouter(Greeting)