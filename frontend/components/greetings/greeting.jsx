import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import SearchContainer from '../search/search_container'

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleTripsClick = this.handleTripsClick.bind(this)
    }

    handleClick() {
        this.props.logout().then(this.props.history.push('/'))
    }

    handleTripsClick() {
        this.props.history.push(`/${this.props.currentUser.id}/bookings`)
    }

    render() {
        let { currentUser, logout, openModal } = this.props
        // const logo = window.lo
        const logo = window.newlogo
        const display = currentUser ? (
            <nav className="navbar">
                <div className="social-media">
                    <a className="git" href="https://github.com/omelnykov1">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="personal-social" href="https://www.linkedin.com/in/oleksandr-melnykov-347b811a8/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="nav-signin" onClick={this.handleClick}>Log Out</div>
                <div className="nav-signin" onClick={this.handleTripsClick}>Trips</div>
                {/* <div className="nav-signin1">Welcome, {this.props.currentUser.name}</div> */}
                {/* <img className="profile-img" src={window.profile_pic} /> */}
            </nav>
        ) : (
                <nav className="navbar">
                    <div className="social-media">
                        <a className="git" href="https://github.com/omelnykov1">
                            <i className="fab fa-github"></i>
                        </a>
                        <a className="personal-social" href="https://www.linkedin.com/in/oleksandr-melnykov-347b811a8/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="nav-signin"onClick={() => openModal('signup')}>Sign up</div>
                    <div className="nav-signin"onClick={() => openModal('login')}>Log In</div>
                </nav>
            );

        return (
            <header>
                <div className="navbar">
                    <div className="nav">
                        <div className="nav-1">
                            <Link to="/"><img className="logo" src={logo} /></Link>
                            <SearchContainer/>
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