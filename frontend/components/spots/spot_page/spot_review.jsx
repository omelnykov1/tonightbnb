import React from 'react';

const SpotReview = props => {
    const { body, rating } = this.props.review;
    const { authors } = this.props;
    const guest = authors[this.props.review.guest_id]
    return (
        <div className="review-container">
            <div className="review-rating">
                <div className="review">{guest.name}</div>
            </div>
            <div className="review-body">{body}</div>
        </div>
    )
}

export default SpotReviewItem;