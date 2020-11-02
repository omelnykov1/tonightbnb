import React, { useState, useEffect } from 'react';

const LoginForm = ({ 
  processForm, 
  closeModal, 
  demo, 
  clearErrors, 
  errors, 
  redirect 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    clearErrors();
  }, [clearErrors])

  const handleSubmit = () => {
    const user = { email, password };
    processForm(user).then(() => closeModal())
  };

  const demoLogin = () => processForm(demo).then(() => closeModal());

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
          <div className="modal-close" onClick={closeModal} >X</div> 
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
          <div className="footer-btn"> {redirect}</div>
        </span>
      </form>
    </div>
  )
}

export default LoginForm