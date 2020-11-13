import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const LoginForm = () => {
  const errors = useSelector(state => state.errors.session);
  const demo = {
    email: "tonightbnb@admin.com",
    password: "welcometomyapp"
  };
  const dispatch = useDispatch();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(clearErrors());
  }, [clearErrors])

  const handleSubmit = () => {
    const user = { email, password };
    dispatch(login(user)).then(() => dispatch(closeModal()));
  };

  const demoLogin = () => dispatch(login(demo)).then(() => dispatch(closeModal()));

  const renderErrors = () => {
    if (!errors.length) return null;
    return (
      <div className="errors">
        {errors.map((error, i) => (
          <p className="errors-body" key={`error-${i}`}>
            {error}
          </p>
        ))}
      </div>
    )
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <header className="modal-header">
          <div className="login-header">Log in</div>
          <div className="modal-close" onClick={() => dispatch(closeModal())} >X</div> 
        </header>
        <div className="modal-content">
          <div className="input-container" data-error={errors.length ? errors : null}>
            <input 
              className="modal-field" 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              id="email"
              required/>
              <label className="modal-label">Email</label>
              <br/>
          </div>
          <div className="input-container" data-error={errors.length ? errors : null}>
            <input 
              className="modal-field1" 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              id="password" 
              required />
            <label className="modal-label-password">Password</label>
          </div>
          <div className="signin-errors">{renderErrors()}</div>
          <br/>    
          <button className="nav-btn" type="submit">Log in</button>
          <br/>
        </div>
        <button className="nav-btn" type="submit" onClick={() => demoLogin()}>Demo</button>
        <span className="footer-login">Don't have an account?
          <div className="footer-btn">
            <div onClick={() => dispatch(openModal('signup'))}>Sign up</div>
          </div>
        </span>
      </form>
    </div>
  )
}

export default LoginForm