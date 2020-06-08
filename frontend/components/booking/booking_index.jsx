import React from 'react';

class BookingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBookings(this.props.user.id);
    }

    render() {
        const {bookings, user, spots, destroyBooking} = this.props;
        const upcomingBookings = bookings.length === 0 ? (
            <div>
                <p>When you’re ready to start planning your next trip, we’re here to help.</p>
            </div>
        ) : (
            <div>
                {bookings.map(booking => (
                    < BookingItem 
                        booking={booking}
                        user={user}
                        spots={spots}
                        destroyBooking={destroyBooking}
                        key={booking.id}
                    />
                ))}
            </div>
        )
    }
}

export default BookingIndex;