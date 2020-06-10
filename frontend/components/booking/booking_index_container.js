import { connect } from 'react-redux';
import { fetchBookings, destroyBooking} from '../../actions/booking_actions';
import { fetchSpots } from '../../actions/spot_actions';
import BookingIndex from './booking_index';


const mSTP = (state) => {
    debugger
    return{
    user: state.entities.users[state.session.id],
    spots: state.entities.spots,
    bookings: Object.values(state.entities.bookings),
    }
}

const mDTP = dispatch => ({
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    destroyBooking: (bookingId) => dispatch(destroyBooking(bookingId)),
    fetchSpots: () => dispatch(fetchSpots()),
})

export default connect(mSTP, mDTP)(BookingIndex);