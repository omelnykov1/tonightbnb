import { connect } from 'react-redux';
import { doSearch } from '../../actions/search_actions';
import Search from './search';

const mDTP = dispatch => ({
    doSearch: request => dispatch(doSearch(request))
})

export default connect(null, mDTP)(Search);