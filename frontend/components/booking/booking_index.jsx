import React from 'react';
import BookingItem from './booking_item'

class BookingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBookings(this.props.match.params.userId);
    }

    render() {
        console.log(this.props)
        if (this.props.user === undefined) {
            return <></>
        } else {
        
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
        const b1 = window.booking
        const b2 = window.booking1
        const b3 = window.trips
        return (
            <div className="booking-index-container">
                <h1>Trips</h1>
                <div className="booking-index-header">
                    <div className="upcoming-booking">
                        Upcoming
                    </div>
                    <br/>
                    <div className="past-booking">
                        Past    
                    </div>
                </div>
                    <hr className="underline"/>
                {upcomingBookings}
                <div className="background-picture">
                    <img className="booking-picture" src={b3} />
                </div>
                <div className="booking-button">
                     <button className="booking-index-button">Explore Tonightbnb</button>
                </div>
            </div>
        )
        }
    }
}

export default BookingIndex;