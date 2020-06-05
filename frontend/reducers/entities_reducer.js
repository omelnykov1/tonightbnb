import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import spotsReducer from './spots_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    spots: spotsReducer
})

export default entitiesReducer;