import React from 'react';
import { useHistory } from 'react-router';

const BookingListItem = ({ booking, destroyBooking }) => {
  const history = useHistory();
  const handleShow = () => history.push(`/spots/${booking.spot.id}`);
  const handleDelete = () => destroyBooking(this.props.booking.id);

  const handleDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const fixedStart = date.split('-');
    let month = fixedStart[1];
    let day = fixedStart[2].slice(0, 2);
    if (month.length > 1 && month[0] === '0') month = parseInt(month[1]);
    else month = parseInt(month);
    if (day.length > 1 && day[0] === '0') day = parseInt(day[1]);
    else day = parseInt(day);
    return [months[month - 1], day]
  }

  const {start_date, end_date, photoUrls, spot} = booking;
  const start = handleDate(start_date);
  const end = handleDate(end_date)
  const total = booking.spot.price * (end[1] - start[1])
  return(
    <div className="booking-item-container">
      <div>
        <div className="photo-booking"><img src={photoUrls[0]}/></div>
        <div className="bottom-booking-item">
          <div className="booking-head">
            <div className="date-booking-header">
              {start[0]} {start[1]}-{end[0]} {end[1]}
            </div>
            <div className="booking-total-header">
              <span>Your total</span>: ${total}
            </div>
          </div>
          <div className="booking-location">
            <h2>{spot.city}</h2>
          </div>
          <div className="booking-middle" onClick={handleShow}>
            <div className="booking-middle-photo"><img src={photoUrls[1]} /></div>
            <div className="booking-title">{spot.title}</div>
          </div>
          <div className="booking-footer">
            <button className="destroy-booking" onClick={handleDelete}>Cancel Booking</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default BookingListItem;