import React from 'react';

const SpotReview = ({ guests, review }) => {
  const guest = guests[review.guest_id]
  return (
    <div className="review-item-container">
      <div className="review-rating1">
        <div className="spot-rating-review">
          <div className="star"><i className="fas fa-star"></i></div>{review.rating}</div>
        <div className="review-guest">{guest.name}</div>
      </div>
      <div className="review-body">{review.body}</div>
    </div> 
  )
}

export default SpotReview;