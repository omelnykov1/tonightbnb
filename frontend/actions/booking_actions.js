import * as BookingAPI from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

const receiveAllBookings = bookings => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings: bookings.bookings,
  spots: bookings.spots
});

const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
})

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});


export const fetchBookings = (userId) => dispatch => (
  BookingAPI.fetchBookings(userId).then(bookings => dispatch(receiveAllBookings(bookings)))
);

export const fetchBooking = bookingId => dispatch => (
  BookingAPI.fetchBooking(bookingId).then(booking => dispatch(receiveBooking(booking)))
);

export const createBooking = booking => dispatch => (
  BookingAPI.createBooking(booking).then(booking => dispatch(receiveBooking(booking)))
);

export const updateBooking = booking => dispatch => (
  BookingAPI.updateBooking(booking).then(booking => dispatch(receiveBooking(booking)))
);

export const destroyBooking = bookingId => dispatch => (
  BookingAPI.destroyBooking(bookingId).then(() => dispatch(removeBooking(bookingId)))
);