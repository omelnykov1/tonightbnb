import { DO_SEARCH } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case DO_SEARCH:
      return action.request
    default:
      return state;
  }
}

export default searchReducer;