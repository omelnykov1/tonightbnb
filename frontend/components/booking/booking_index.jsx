import React from 'react';

class BookingIndex extends React.Component {
    constructor(props) {
        super(props)
        debugger
    }

    componentDidMount() {
        debugger
        this.props.fetchBookings(this.props.match.params.userId);
    }

    render() {
        debugger
        console.log(this.props)
        if (this.props.user === undefined) {
            return <></>
        } else {
        
        // const {bookings, user, spots, destroyBooking} = this.props;
        // const upcomingBookings = bookings.length === 0 ? (
        //     <div>
        //         <p>When you’re ready to start planning your next trip, we’re here to help.</p>
        //     </div>
        // ) : (
        //     <div></div>
            // <div>
            //     {bookings.map(booking => (
            //         < BookingItem 
            //             booking={booking}
            //             user={user}
            //             spots={spots}
            //             destroyBooking={destroyBooking}
            //             key={booking.id}
            //         />
            //     ))}
            // </div>
        // )
        const b1 = window.booking
        const b2 = window.booking1
        return (
            <div className="booking-index-container">
                <h1>Trips</h1>
                <div className="background-picture">
                    <img src={b1} />
                </div>
                {/* {upcomingBookings} */}
            </div>
        )
        }
    }
}

export default BookingIndex;