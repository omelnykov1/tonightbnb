import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from "./navbar/navbar";
import SessionModal from './modal/session_modal';
import Splash from './splash/splash';
import SpotIndex from './spots/spot_index';
import SpotContainer from "./spots/spot_page/spot_container"
import BookingIndexContainer from './booking/booking_index_container';
import SearchShow from './search/search_show';


const App = () => (
  <div>
    <SessionModal/>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/spots" component={SpotIndex}/>
      <Route path={`/spots/:spotId`} component={SpotContainer} />
      <Route path={`/:userId/bookings`} component={BookingIndexContainer}/>
      <Route path="/search" component={SearchShow} />
    </Switch>
  </div>
)

export default App;