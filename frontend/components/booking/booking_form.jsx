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

    render() {
        return(
            <DayPicker />
        )
    }
}

export default BookingForm;