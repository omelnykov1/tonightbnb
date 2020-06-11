import { connect } from 'react-redux';
import { fetchSearch} from '../../actions/spot_actions';
import SearchShow from './search_show';

const mSTP = (state) => ({
    spots: Object.values(state.entities.spots),
    search: state.entities.search,
})

const mDTP = dispatch => ({
    fetchSearch: (query) => dispatch(fetchSearch(query))
})

export default connect(mSTP, mDTP)(SearchShow);