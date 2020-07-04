import React from 'react';
import 'react-dates/initialize';
import DayPicker from 'react-day-picker';
import { withRouter } from 'react-router';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'

class NewBookingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.booking;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addGuest = this.addGuest.bind(this)
        this.substractGuest = this.substractGuest.bind(this);
        this.state.condition = false;
    }

    handleDate(date) {
        if (date) {
            const dateStr = date.toISOString().slice(0, 10);
            const dateArr = dateStr.split("-");
            dateArr.push(dateArr.shift());
            return dateArr.join("/");
        } else {
            return "";
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.booking.guest_id) {
            const { startDate, endDate, num_guests, guest_id } = this.state;
            this.props.action({
                spot_id: this.props.spot.id,
                guest_id: guest_id,
                num_guests: num_guests,
                start_date: startDate._d,
                end_date: endDate._d,
            }).then(() => this.props.history.push(`/${this.state.guest_id}/bookings`))
        } else {
            this.props.openModal('login')
        }
        
    }

    addGuest(e) {
        e.preventDefault();
        if (this.state.num_guests < 6) {
            this.setState({ num_guests: this.state.num_guests + 1 });
        }
    }

    substractGuest(e) {
        e.preventDefault();
        if (this.state.num_guests > 1) {
            this.setState({ num_guests: this.state.num_guests - 1 });
        }
    }

    render() {
        let guests;
        if (this.state.num_guests > 1) {
            guests = 'guests'
        } else {
            guests = 'guest'
        } 

        let dayPicker
        if (this.state.condition) {
            dayPicker = <div className="booking-daypicker">
                <DayPickerRangeController
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => (this.setState({ startDate, endDate }))}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => (this.setState({ focusedInput }))}
                    numberOfMonths={1}
                    hideKeyboardShortcutsPanel={true}
                />
            </div>
        } else {
            dayPicker = null;
        }

        const condition = this.state.condition
        let guestCount

        if (this.state.num_guests > 1) {
            guestCount = (this.state.num_guests - 1 )/ 2.0 * this.props.spot.price;
        } else {
            guestCount = 0
        };

        let guestTotal = (this.handleDate(this.state.endDate).split('/')[1] - this.handleDate(this.state.startDate).split('/')[1]) * this.props.spot.price;
        let total = guestCount + guestTotal
        const toggleClass = this.props.scroll;
        let bookingShadow = document.getElementById('shadow')
        if (this.props.spot) {
        return (
            <div className={toggleClass} id="shadow">   
                <div className="booking-header">
                    <div className="spot-price-booking">
                        <span>{this.props.spot.price}</span>/night
                        </div>
                    <div className="rating-container-booking">
                        <div className="star"><i className="fas fa-star"></i></div>{this.props.rating}
                    </div>
                </div>
                <div className="booking-calendar">
                    {dayPicker}
                </div>
                <div className="check-guest-out">
                    <div className="checkin-checkout">
                        <div className="booking-spot-start">
                            <label className="date-label">Check-in</label>
                            <input
                                className="date-input"
                                type="text"
                                value={this.handleDate(this.state.startDate)}
                                placeholder="MM/DD/YYYY"
                                required
                                onClick={() => {
                                    bookingShadow.setAttribute('style','height: 685px');
                                    this.setState({condition: true})
                                }}
                            />
                        </div>
                        <div className="booking-spot-end">
                            <label className="date-label">Check-out</label>
                            <input
                                className="date-input"
                                type="text"
                                value={this.handleDate(this.state.endDate)}
                                placeholder="MM/DD/YYYY"
                                required
                                onClick={() => {
                                    bookingShadow.removeAttribute('style', 'height: 685px');
                                    this.setState({ condition: false })
                                }}
                            />
                        </div>
                    </div>
                    <div className="container-booking-checkout">
                            <div className="guest-container">
                                <label>GUESTS</label>
                                <div className="adding-guests-booking">
                                    <span className="substract-guests-booking" onClick={this.substractGuest}>-</span>
                                    <div className="num-guests-123">
                                <div className="booking-num-guests">{this.state.num_guests} {guests} </div>
                                    </div>
                                    <span className="add-guests-booking" onClick={this.addGuest}>+</span>
                                </div>
                        </div>
                    </div>
                </div>
                    <div className="booking-gem">
                        <div className="booking-extra-container">
                            <p className="des"><span>This is a rare find. </span> Usually this place is booked</p>
                            <div className="gem">
                                <i className="far fa-gem"></i>
                            </div>
                        </div>
                    </div>
                    <div className="total-price-booking">
                        <span>Total</span>
                        <div className="booking-total">${total ? total : 0}</div>
                    </div>
                    <button className="reserve-booking" onClick={this.handleSubmit}>Reserve</button>
                    <div className="booking-add">
                        <p>You won't be charged</p>
                    </div>
            </div>
        )
        } else {
            return null;
        }
    }
}


export default withRouter(NewBookingForm); 
