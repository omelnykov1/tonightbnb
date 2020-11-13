import { createReview, fetchSpot, fetchReviews } from '../../actions/spot_actions';
import ReviewForm from './review_form';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { clearErrors } from "../../actions/spot_actions";


const mSTP = (state, ownProps) => ({
    errors: state.errors.review,
    review: {
      body: "",
      guest_id: state.session.id,
      spot_id: ownProps.spot.id,
      rating: ""
    }
})


const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  fetchReviews: id => dispatch(fetchReviews(id)),
  fetchSpot: spotId => dispatch(fetchSpot(spotId)),
  openModal: () => dispatch(openModal('login')),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(ReviewForm);