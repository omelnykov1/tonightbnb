import React from 'react';
import BookingItem from './booking_item'

class BookingIndex extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchBookings(this.props.match.params.userId);
    }

    handleClick() {
        this.props.history.push('/spots')
    }

    render() {
        const b1 = window.booking
        const b2 = window.booking1
        const b3 = window.trips
        if (this.props.user === undefined) {
            return <></>
        } else {
        
        const {bookings, user, spots, destroyBooking} = this.props;
        const upcomingBookings = bookings.length === 0 ? 
            (
            <div className="no-bookings">
                <div className="booking-par">
                    <p>When you’re ready to start planning your next trip, we’re here to help.</p>
                </div>
                <div className="background-picture">
                    <img className="booking-picture" src={b3} />
                </div>
            </div>
        ) : (
            <div>
            <div className="background-picture">
                <img className="booking-picture1" src={b3} />
            </div>
            <div className="bookings-item-columns">
                {bookings.reverse().map(booking => (
                    < BookingItem 
                        booking={booking}
                        user={user}
                        spots={spots}
                        destroyBooking={destroyBooking}
                        key={booking.id}
                        openModal={this.props.openModal}
                    />
                ))}
            </div>
                </div>
        )
        return (
            <div className="booking-index-container">
                <h1>Trips</h1>
                <div className="booking-index-header">
                    <div className="upcoming-booking">
                        Upcoming
                    </div>
                    <div className="past-booking">
                        Past    
                    </div>
                </div>
                    <hr className="underline"/>
                {upcomingBookings}
                <button className="booking-index-button" onClick={this.handleClick}>Explore Tonightbnb</button>
            </div>
        )
        }
    }
}

export default BookingIndex;