import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import DayPicker from 'react-day-picker';
// import 'react-dates/lib/css/_datepicker.css';
// import './react_dates_overrides.css'

class BookingForm extends React.Component {
    constructor(props) {
        super(props)
    }
    // <DateRangePicker
    // startDate={this.state.startDate} // momentPropTypes.momentObj or null,
    // startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
    // endDate={this.state.endDate} // momentPropTypes.momentObj or null,
    // endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
    // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
    // focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
    // onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
    // />
    render() {
        return(
            <DayPicker />
        )
    }
}

export default BookingForm;