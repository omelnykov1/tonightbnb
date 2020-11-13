import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from "../../actions/modal_actions";
import { signup, clearErrors } from "../../actions/session_actions";

const SignupForm = () => {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors.session);
  const [email, setEmail] = useState("");
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const newUser = { email, name , password };
    dispatch(signup(newUser)).then(() => dispatch(closeModal()));
  }

  useEffect(() => {
    dispatch(clearErrors());
  }, [clearErrors])

  const renderErrors = () => {
    if (!errors.length) return null;
    else return (
      <div className="errors">
        {errors.map((error, i) => (
          <p className="errors-body" key={`error-${i}`}>
            {error}
          </p>
        ))}
      </div>
    )
  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <header className="modal-header">
          <div className="login-header">Sign up</div>
          <div className="modal-close" onClick={() => dispatch(closeModal())} >X</div>
        </header>
        <div className="modal-content">
          <div className="input-container" data-error={errors.length ? errors : null}>
          <input className="modal-field4" type="text" value={email} onChange={e => setEmail(e.target.value)} required/>
            <label className="modal-label">Email</label>
          </div>
          <br />
          <div className="input-container" data-error={errors.length ? errors : null}>
            <input className="modal-field2" type="text" value={name} onChange={e => setName(e.target.value)} required/>
            <label className="modal-label">Name</label>
          </div>
          <br />
          <div className="input-container" data-error={errors.length ? errors : null}>
            <input className="modal-field3" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <label className="modal-label">Password</label>
          </div>
          {renderErrors()}
          <br/>
          <button className="nav-btn" type="submit">Sign up</button>
        </div>
        <span className="footer-login">Already have an account?
          <div className="footer-btn">
            <div className="session-button" onClick={() => dispatch(openModal('login'))}> Log in </div>
          </div>
        </span>
      </form>
    </div>
  )
}

export default SignupForm;