import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login/login_form_container';
import SignupFormContainer from './session/signup/signup_form_container'; 
import { AuthRoute } from '../util/route_util';
import GreetingContainer from "./greetings/greeting_container";
import SessionModal from './modal/session_modal';
import Splash from './splash/splash';



const App = () => (
    <div>
        <SessionModal/>
        <GreetingContainer />
        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
)

export default App;