import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from "./greetings/greeting_container";
import SessionModal from './modal/session_modal';
import Splash from './splash/splash';
import SpotIndexContainer from './spots/spot_index_container';
import SpotContainer from "./spots/spot_page/spot_container"
import BookingIndexContainer from './booking/booking_index_container';
import SearchShowContainer from './search/search_show_container';


const App = () => (
    
    <div>
        <SessionModal/>
        <GreetingContainer />
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/spots" component={SpotIndexContainer}/>
            <Route path={`/spots/:spotId`} component={SpotContainer} />
            <Route path={`/:userId/bookings`} component={BookingIndexContainer}/>
            <Route path="/search" component={SearchShowContainer} />
        </Switch>
    </div>
)

export default App;