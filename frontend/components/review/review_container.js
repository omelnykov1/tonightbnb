import { createReview, fetchSpot } from '../../actions/spot_actions';
import ReviewForm from './review_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'


const mSTP = (state, ownProps) => {
    debugger
    return {
    review: {
        body: "",
        guest_id: state.session.id,
        spot_id: "",
        rating: ""
    }
}}


const mDTP = (dispatch) => ({
    createReview: (review) => dispatch(createReview(review)),
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    openModal: () => dispatch(openModal('login'))
})

export default connect(mSTP, mDTP)(ReviewForm);