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
                <div className="nav-signin1">Welcome, {this.props.currentUser.name}</div>
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
                            <Link to="/"><img className="logo" src={window.logo} /></Link>
                            {/* <div className="logo5">tonightbnb</div> */}
                            <div className="search-box">
                                <div className="nav-search">
                                    <input type="text"  name="search" id="search" placeholder="Where are you going?"/>
                                    <label>LOCATION</label>
                                        <div className="checkin-nav">
                                            <input type="datetime" name="checkin" id="checkin" placeholder="Add dates"/>
                                            <label>CHECK IN/CHECK OUT</label>
                                        </div>
                                    <button className="search-button"><i className="fas fa-search"></i>Search</button>
                                </div>
                            </div>
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