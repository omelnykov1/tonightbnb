import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { fetchSpot, createSpot, updateSpot } from '../../../actions/spot_actions';
import Spot from './spot';

const mSTP = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.match.params.spotId]
})

const mDTP = dispatch => ({
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    createSpot: spot => dispatch(createSpot(spot)),
    updateSpot: spot => dispatch(updateSpot(spot)),
    openModal: () => dispatch(openModal('createBooking')),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Spot);