import React from 'react';
import { withRouter } from 'react-router';

class BookingListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        debugger
        const {start_date, end_date, photoUrls, spot} = this.props.booking
        return(
            <div className="booking-item-container">
                <div>
                    <div className="photo-booking">
                       <img src={photoUrls[0]}/>
                    </div>
                    <div className="date-booking-header">
                        {start_date}-{end_date}
                    </div>
                    <div className="booking-location">
                        {spot.city}
                    </div>
                    <div className="booking-title">
                        {spot.title}
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(BookingListItem);