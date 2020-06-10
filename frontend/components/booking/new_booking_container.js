import { createBooking } from '../../actions/booking_actions';
import { fetchSpot } from '../../actions/spot_actions';
import NewBookingForm from './new_booking_form';
import { connect } from 'react-redux';
import { START_DATE} from 'react-dates/src/constants'

const mSTP = (state, ownProps) => ({
    booking: {
        startDate: null,
        endDate: null,
        num_guests: 1,
        guest_id: state.session.id,
        spot_id: ownProps.spotId,
        focusedInput: START_DATE,
        open: false,
        error: ""
    },
    formType: 'createBooking'
})

const mDTP = (dispatch) => ({
    action: (booking) => dispatch(createBooking(booking)),
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
})

export default connect (mSTP, mDTP)(NewBookingForm);