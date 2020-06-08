import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import spotsReducer from './spots_reducer';
import bookingsReducer from './booking_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    spots: spotsReducer,
    bookings: bookingsReducer,
})

export default entitiesReducer;