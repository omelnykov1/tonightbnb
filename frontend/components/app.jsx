import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login/login_form_container';
import SignupFormContainer from './session/signup/signup_form_container'; 
import { AuthRoute } from '../util/route_util';
import GreetingContainer from "./greetings/greeting_container";
import SessionModal from './modal/session_modal';
import Splash from './splash/splash';
import SpotIndexContainer from './spots/spot_index_container';
import SpotContainer from "./spots/spot_page/spot_container"
import BookingIndex from './booking/booking_index';




const App = () => (
    <div>
        <SessionModal/>
        <GreetingContainer />
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/spots" component={SpotIndexContainer}/>
            <Route path={`/spots/:spotId`} component={SpotContainer} />
            <Route path={`/:userId/bookings`} component={BookingIndex}/>
        </Switch>
    </div>
)

export default App;