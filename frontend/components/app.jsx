import React from 'react';
import { Route } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container'; 
import { AuthRoute } from '../util/route_util';
import GreetingContainer from "./greetings/greeting_container";
import SessionModal from './modal/session_modal';


const App = () => (
    <div>
        <SessionModal/>
        <header>
            <h1>Tonight BnB</h1>
            <GreetingContainer />
        </header>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;