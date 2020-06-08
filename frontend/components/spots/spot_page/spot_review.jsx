import React from 'react';

const SpotReview = props => {
    const { guests } = props;
    const guest = guests[props.review.guest_id]
    return (
        <div className="review-item-container">
             <div className="review-rating1">
                <div className="spot-rating-review">
                    <div className="star"><i className="fas fa-star"></i></div>{props.review.rating}
                </div>
                <div className="review-guest">{guest.name}</div>
            </div>
            <div className="review-body">{props.review.body}</div>
        </div> 
    )
}

export default SpotReview;