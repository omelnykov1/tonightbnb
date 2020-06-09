import { SEND_SEARCH } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SEND_SEARCH:
            return action.form
        default:
            return state;
    }
}

export default searchReducer;