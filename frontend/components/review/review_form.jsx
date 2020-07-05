import React from 'react';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.review;
        this.handleRating = this.handleRating.bind(this);
    }

    clearReview() {
        let start = Array.from(document.getElementsByClassName('start-reviews'));

        start.forEach(star => star.checked = false );

        let textArea = document.getElementById('review-text');
        textArea.className = "review-body-no-error"

        this.setState(this.props.review)
    }

    renderErrors() {
        if (!this.props.errors.length) {
            return null;
        } else {
            let textArea = document.getElementById('review-text');
            textArea.className = "review-body-yes-error"
            return (
                <div className="review-errors">
                    {this.props.errors.map((error, idx) => (
                        <p className="errors-body" key={idx}>
                            {error}
                        </p>
                    ))}
                </div>
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        if (this.props.review.guest_id) {
            this.props.createReview(this.state)
                    .then(this.props.fetchSpot(this.state.spot_id))
                    .then(this.props.fetchReviews(this.state.spot_id))
                    .then(this.props.clearErrors())
                    .then(this.clearReview())
        } else {
            this.props.openModal('login')
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleRating(rating) {
        return this.setState({rating: rating})
    }

    render() {
        let errors = this.renderErrors()
        return (
            <div className="review-form-containter">
                <div className="review-header">
                    <h3>Leave a review</h3>
                </div>
                <div className="review-middle">
                    <div className="reviews-ratings">
                        <div className="rating">
                            <input className="start-reviews" type="radio" id="star5" name="rating" value={this.state.rating} onClick={() => this.handleRating(5.0)} /><label htmlFor="star5"></label>
                            <input className="start-reviews" type="radio" id="star4" name="rating" value={this.state.rating} onClick={() => this.handleRating(4.0)} /><label htmlFor="star4"></label>
                            <input className="start-reviews" type="radio" id="star3" name="rating" value={this.state.rating} onClick={() => this.handleRating(3.0)} /><label htmlFor="star3"></label>
                            <input className="start-reviews" type="radio" id="star2" name="rating" value={this.state.rating} onClick={() => this.handleRating(2.0)} /><label htmlFor="star2"></label>
                            <input className="start-reviews" type="radio" id="star1" name="rating" value={this.state.rating} onClick={() => this.handleRating(1.0)} /><label htmlFor="star1"></label>
                        </div>
                    </div>
                        <textarea
                            id="review-text"
                            className="review-body-no-error" 
                            onChange={this.update('body')} 
                            placeholder="Tell us about your stay"
                            value={this.state.body}
                        />
                    </div>
                {errors}
                <div className="review-footer">
                    <button className="add-review-btn" type="submit" onClick={this.handleSubmit}>Add review</button>
                </div>
            </div>
        )
    }
}

export default ReviewForm;