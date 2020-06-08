export const fetchBookings = (userId) => (
    $.ajax({
        url: `api/users/${userId}/bookings`
    })
);

export const fetchBooking = bookingId => (
    $.ajax({
        url: `api/bookings/${bookingId}`
    })
);

export const createBooking = booking => (
    $.ajax({
        method: "POST",
        url: `api/bookings`,
        data: { booking }
    })
);

export const updateBooking = booking => (
    $.ajax({
        method: 'PATCH',
        url: `api/bookings/${booking.id}`,
        data: { booking }
    })
);

export const destroyBooking = bookingId =>(
    $.ajax({
        method: "DELETE",
        url: `api/bookings/${bookingId}`
    })
)