import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from "../../actions/modal_actions";
import Search from '../search/search'

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.entities.users[state.session.id]);

  const handleClick = () => dispatch(logout()).then(history.push('/'));
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
        <div className="nav-signin"onClick={() => dispatch(openModal('signup'))}>Sign up</div>
        <div className="nav-signin"onClick={() => dispatch(openModal('login'))}>Log In</div>
      </div>
    </div>
  );

  return (
    <header>
      <div className="navbar">
        <div className="nav">
          <div className="nav-1">
            <Link to="/"><img className="logo" src={logo} /></Link>
            <Search />
          </div>
          <div className="nav-2">{display}</div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
