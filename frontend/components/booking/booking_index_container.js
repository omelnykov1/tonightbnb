import { connect } from 'react-redux';
import { fetchBookings, destroyBooking} from '../../actions/booking_actions';
import { fetchSpots } from '../../actions/spot_actions';
import BookingIndex from './booking_index';
import { openModal, closeModal } from "../../actions/modal_actions";


const mSTP = (state) => ({
    user: state.entities.users[state.session.id],
    spots: state.entities.spots,
    bookings: Object.values(state.entities.bookings),
})

const mDTP = dispatch => ({
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    destroyBooking: (bookingId) => dispatch(destroyBooking(bookingId)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('review')),
    fetchSpots: () => dispatch(fetchSpots()),
})

export default connect(mSTP, mDTP)(BookingIndex);