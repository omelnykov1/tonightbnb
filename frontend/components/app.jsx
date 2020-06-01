import React from 'react';
import { Route } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import SessionForm from './session/session_form'
import { AuthRoute } from '../util/route_util';



const App = () => (
    <div>
        <h1>Tonight BnB</h1>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;