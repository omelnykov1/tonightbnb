import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import SessionForm from './session_form';

const mSTP = (state, ownProps) => ({
    errors: state.session.errors,
    formType: 'Signup'
})


const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)



