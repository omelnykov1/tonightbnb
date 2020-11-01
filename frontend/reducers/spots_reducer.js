import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT, RECEIVE_SEARCH} from '../actions/spot_actions'

const spotsReducer = (state = {}, action) => {
  Object.freeze(state) 
  switch(action.type) {
    case RECEIVE_ALL_SPOTS:
      return Object.values(action.spots);
    case RECEIVE_SPOT: 
      return Object.assign({}, state, { [action.spot.id]: action.spot });
    case RECEIVE_SEARCH:
      return action.result;
    default:
      return state;
  }
}

export default spotsReducer