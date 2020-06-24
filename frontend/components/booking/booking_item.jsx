import React from 'react';
import { withRouter } from 'react-router';

class BookingListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this)
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleShow() {
        this.props.history.push(`/spots/${this.props.booking.spot.id}`)
    }

    handleDelete() {
        this.props.destroyBooking(this.props.booking.id)
    }

    handleDate(date){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const fixedStart = date.split('-');
        let month = fixedStart[1];
        let day = fixedStart[2].slice(0, 2);
        if (month.length > 1 && month[0] === '0') {
            month = parseInt(month[1])
        } else {
            month = parseInt(month)
        }
        if (day.length > 1 && day[0] === '0') {
            day = parseInt(day[1])
        } else {
            day = parseInt(day)
        }
        return [months[month - 1], day]
    }
    render(){
        const {start_date, end_date, photoUrls, spot} = this.props.booking
        let start = this.handleDate(start_date);
        let end = this.handleDate(end_date)
        let total = this.props.booking.spot.price * (end[1] - start[1])
        return(
            <div className="booking-item-container">
                <div>
                    <div className="photo-booking">
                       <img src={photoUrls[0]}/>
                    </div>
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
                        <div className="booking-middle" onClick={this.handleShow}>
                            <div className="booking-middle-photo">
                                <img src={photoUrls[1]} />
                            </div>
                            <div className="booking-title">
                                {spot.title}
                            </div>
                        </div>
                        <div className="booking-footer">
                            <button className="destroy-booking" onClick={this.handleDelete}>Cancel Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(BookingListItem);