import React, { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import BookingItem from './booking_item'

const BookingIndex = ({ bookings, fetchBookings, user, spots, destroyBooking }) => {
  const match = useRouteMatch();
  const history = useHistory();
  useEffect(() => {
    fetchBookings(match.params.userId)
  }, [fetchBookings])

  const handleClick = () => history.push('/spots');

  const b3 = window.trips
  if (!user) return null;
  const upcomingBookings = !bookings.length ? 
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
          <BookingItem 
            booking={booking}
            user={user}
            spots={spots}
            destroyBooking={destroyBooking}
            key={booking.id}
          />
        ))}
      </div>
    </div>
  )
  return (
    <div className="booking-index-container">
      <h1>Trips</h1>
      <hr className="underline"/>
      {upcomingBookings}
      <button className="booking-index-button" onClick={handleClick}>Explore Tonightbnb</button>
    </div>
  )
}

export default BookingIndex;