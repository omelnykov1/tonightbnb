import { fetchSpot } from '../../actions/spot_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchBookings, fetchBooking, createBooking } from '../../actions/booking_actions';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import { createSpot } from '../../util/spot_api_util';

const mSTP = (state, ownProps) => ({
    spot: state.entities.spots[ownProps.spotId],
    booking: {
        startDate: null,
        endDate: null,
        num_guests: 2,
        adults: 2,
        children: 0,
        infants: 0,
        guest_id: state.session.id,
        spot_id: ownProps.spotId,
        focusedInput: START_DATE,
        open: false,
        error: ""
    },
    formType: 'createBooking'
})

const mDTP = dispatch => ({
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    action: booking => dispatch(createBooking(booking)),
    closeModal: () => dispatch(closeModal())
})


export default connect(mSTP, mDTP)(BookingForm)


