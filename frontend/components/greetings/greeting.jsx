import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import SearchContainer from '../search/search_container'

export const Greeting = ({ logout, currentUser, openModal }) => {
  const history = useHistory();
  const handleClick = () => logout().then(history.push('/'));
  const handleTripsClick = () => history.push(`/${currentUser.id}/bookings`);
  const logo = window.newlogo

  const display = currentUser ? (
    <div className="nav-right">   
      <div className="social-media">
        <a className="angel-list" href="https://angel.co/u/dev-melnikov">
          <i className="fab fa-angellist"></i>
        </a>
        <a className="git" href="https://github.com/omelnykov1">
          <i className="fab fa-github"></i>
        </a>
        <a className="personal-social" href="https://www.linkedin.com/in/oleksandr-melnykov-347b811a8/">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="nav-2-right">
        <div onClick={() => $(window).scrollTop(0)}>
          <div className="nav-signin" onClick={handleClick}>Log Out</div>
        </div>  
        <div className="nav-signin" onClick={handleTripsClick}>Trips</div>
      </div>
    </div>  
  ) : (
    <div className="nav-right">
      <div className="social-media">
        <a className="angel-list" href="https://angel.co/u/dev-melnikov">
          <i className="fab fa-angellist"></i>
        </a>
        <a className="git" href="https://github.com/omelnykov1">
          <i className="fab fa-github"></i>
        </a>
        <a className="personal-social" href="https://www.linkedin.com/in/oleksandr-melnykov-347b811a8/">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="nav-2-right">
        <div className="nav-signin"onClick={() => openModal('signup')}>Sign up</div>
        <div className="nav-signin"onClick={() => openModal('login')}>Log In</div>
      </div>
    </div>
  );

  return (
    <header>
      <div className="navbar">
        <div className="nav">
          <div className="nav-1">
            <Link to="/"><img className="logo" src={logo} /></Link>
            <SearchContainer/>
          </div>
          <div className="nav-2">{display}</div>
        </div>
      </div>
    </header>
  );
};