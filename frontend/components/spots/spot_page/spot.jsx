import React from 'react';
import SpotMap from '../../map/spot_map';
import SpotReview from './spot_review';
import NewBookingContainer from '../../booking/new_booking_container'
import ReviewContainer from '../../review/review_container'


class Spot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollFixedUp: true,
            scrollFixedB: false
        }
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
        document.addEventListener('scroll', () => {
            const belowPictures = window.scrollY < 740;
            if (belowPictures !== this.state.scrollFixedUp) {
                this.setState({ scrollFixedUp: belowPictures });
                 }
            });
        document.addEventListener('scroll', () => {
            const topPictures = window.scrollY > (document.body.scrollHeight - window.innerHeight - 100);
            if (topPictures !== this.state.scrollFixedB) {
                this.setState({ scrollFixedB: topPictures });
                 }
            });
    }

    render() {
        if (this.props.spot) {
            debugger
            const reviews = this.props.spot.reviews ? Object.values(this.props.spot.reviews) : []
            // const otherReviews = this.state.entities.reviews ? Object.values(this.state.entities.reviews) : [];
            // if (otherReviews.length) {
            //     otherReviews.forEach(review => reviews.push(review));
            // }
            const { title, description, address, price, city, lat, lng, guests } = this.props.spot;
            let totalRating = 0
            reviews.map(review => review.rating).forEach(ele => totalRating += ele)
            const rating = Math.round((totalRating / reviews.length) * 100) / 100;
            const someClass = this.state.scrollFixedUp ? 'booking-container' : (this.state.scrollFixedB ? 'booking-container-absolute' : 'booking-container-fixed' )
            return (
                <div className="spot-container">
                    <div className="spot-nav">
                        <span className="spot-title">
                            <h1>{title}</h1>
                            <br />
                        </span>
                        <span className="spot-rating">
                            <div className="rating-container">
                                <div className="star"><i className="fas fa-star"></i></div>{rating}
                            </div>
                            <br />
                            <div className="spot-city">{city}</div>
                        </span>
                    </div>
                    <div className="spot-photos-container">
                        <div className="spot-grid">
                            <div className="spot-main-photo">
                                <img className="main-photo" src={this.props.spot.photoUrls[0]} />
                            </div>
                            <div className="spot-side-photos">
                                <img className="photo-row1" src={this.props.spot.photoUrls[1]} />
                                <img className="photo-row1" src={this.props.spot.photoUrls[2]} />
                                <img className="photo-row2" src={this.props.spot.photoUrls[3]} />
                                <img className="photo-row2" src={this.props.spot.photoUrls[4]} />
                            </div>
                            <hr className="style-four" />
                        </div>
                    </div>
                    <div className="split-spot-container">
                        <div className="spot-left-side">
                            <div className="left-side-spot"></div>
                            <div className="spot-details">
                                <h2>Spot description</h2>
                                <div className="spot-description">
                                    {description}
                                </div>
                            </div>
                            <div className="additional-spot-info">
                                <h2>Sleeping arrangements</h2>
                                <div className="spot-info-containers">
                                    <div className="spot-bedroom">
                                        <i className="fas fa-bed"></i>
                                        <br />
                                        <span>Bedroom 1</span>
                                        <br />
                                        <br />
                                        <p>1 queen bed</p>
                                    </div>
                                    <div className="spot-common-spaces">
                                        <i className="fas fa-couch"></i>
                                        <br />
                                        <span>Common spaces</span>
                                        <br />
                                        <p>1 couch</p>
                                    </div>
                                </div>
                            </div>
                            <div className="spot-amenities">
                                <h2>Amenities</h2>
                                <div className="spot-amenities-columns">
                                    <div className="spot-amenities-col1">
                                        <div className="spot-amenity"><i className="fas fa-wifi"></i>WiFi</div>
                                        <div className="spot-amenity"><i className="fas fa-tv"></i>TV</div>
                                        <div className="spot-amenity"><i className="fab fa-accessible-icon"></i>Wheelchair Accessible</div>
                                        <div className="spot-amenity"><i className="fas fa-charging-station"></i>Charging Station</div>
                                        <div className="spot-amenity"><i className="fas fa-parking"></i>Parking</div>
                                    </div>
                                    <div className="spot-amenities-col2">
                                        <div className="spot-amenity"><i className="fab fa-amazon"></i>Amazon TV</div>
                                        <div className="spot-amenity"><i className="fas fa-allergies"></i>Sanitizing Equipment</div>
                                        <div className="spot-amenity"><i className="fas fa-box-open"></i>Storage</div>
                                        <div className="spot-amenity"><i className="fas fa-glass-cheers"></i>Bar</div>
                                        <div className="spot-amenity"><i className="fas fa-laptop"></i>Laptop-friendly Workspace</div>
                                    </div>
                                </div>
                            </div>
                            <div className="spot-reviews">
                                <div className="reviews-header">
                                    <div className="spot-rating-review">
                                        <div className="star"><i className="fas fa-star"></i></div>{rating}
                                    </div>
                                    <h3 className="review-head">({reviews.length} reviews)</h3>
                                </div>
                                <div className="reviews-container">
                                    {reviews.map(review => (
                                        < SpotReview
                                            review={review}
                                            key={review.id}
                                            guests={(guests)}
                                        />
                                    ))}
                                    < ReviewContainer spot={this.props.spot}/>
                                </div>
                            </div>
                        </div>
                        <div className="spot-right-side">
                            <div className="booking-form-container">
                                < NewBookingContainer spot={this.props.spot} rating={rating} photos={this.props.spot.photoUrls} scroll={someClass} />
                            </div>
                        </div>
                    </div>
                    <div className="spot-map">
                        <div className="map-work">
                            <h2>Location</h2>
                            <SpotMap
                                lat={lat}
                                lng={lng}
                            />
                        </div>
                    </div>
                </div>
            )
        } else {
            return <></>;
        }

    }

}
export default Spot;