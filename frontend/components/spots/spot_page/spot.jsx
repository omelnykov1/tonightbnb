import React from 'react';
import SpotMap from '../../map/spot_map';
class Spot extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId)
    }

    render() {
        if (this.props.spot) {
            const { title, description, address, price, city, lat, lng } = this.props.spot;
            const { openModal,reviews, guests } = this.props;
            const rating = [4.7, 4.54, 5.0, 4.67, 4.85, 4.71, 4.45, 4.68, 4.75][Math.floor(Math.random() * 9)]
            return (
                <div className="spot-container">
                    <div className="spot-nav">
                        <span className="spot-title">
                            <h1>{title}</h1>
                        <br/>
                        </span>
                        <span className="spot-rating">
                            <div className="rating-container">
                                <div className="star"><i class="fas fa-star"></i></div>{rating}
                            </div>
                            <br/>
                            <div>{city}</div>
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
                            <hr className="style-four"/>
                        </div>
                    </div>
                    <div className="spot-details">
                        <h2>Spot description</h2>
                        <div className="spot-description">
                            {description}
                        </div>
                    <hr />
                    </div>
                    <div className="additional-spot-info">
                        <h2>Sleeping arrangements</h2>
                        <div className="spot-info-containers">
                            <div className="spot-bedroom">
                                <i class="fas fa-bed"></i>
                                <br />
                                <span>Bedroom 1</span>
                                <br/>
                                <br />
                                <p>1 queen bed</p>
                            </div>
                            <div className="spot-common-spaces">
                                <i class="fas fa-couch"></i>
                                <br/>
                                <span>Common spaces</span>
                                <br />
                                <p>1 couch</p>
                            </div>
                        </div>
                    </div>
                    <div className="spot-amenities">
                        <h2>Amenities</h2>
                        <div className="spot-amenities-col1">
                            <div className="spot-amenity"><i class="fas fa-wifi"></i>WiFi</div>
                            <div className="spot-amenity"><i class="fas fa-tv"></i>TV</div>
                            <div className="spot-amenity"><i class="fas fa-laptop"></i>Laptop-friendly workspace</div>
                            <div className="spot-amenity"><i class="fas fa-charging-station"></i>Chargin Station</div>
                            <div className="spot-amenity"><i class="fas fa-parking"></i>Parking</div>
                        </div>
                    </div>
                    <SpotMap 
                        lat={lat} 
                        lng={lng} 
                        address={address} 
                    />
                    <div className="spot-reviews">
                        <div className="reviews-header">
                            <div className="spot-rating-review">
                                <div className="star"><i class="fas fa-star"></i></div>{rating}
                            </div>
                            <h3 className="review-head">Reviews</h3>
                        </div>
                        {/* <div className="num-reviews">
                            <div className="num">{reviews.length}</div>
                            <div>reviews</div>
                        </div> */}
                        {/* {reviews.map(review => (
                            <SpotReview
                                key={review.id}
                                guests={guests}
                                review={review}
                            />
                        ))} */}
                    </div>
                </div>
            )
        } else {
            return null;
        }

    }

}
export default Spot;