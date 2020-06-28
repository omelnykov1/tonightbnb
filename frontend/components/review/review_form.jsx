import React from 'react';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.review;
        debugger
        this.state.spot_id = this.props.spot.id;
        this.handleRating = this.handleRating.bind(this);
    }

    clearReview() {
        let start = Array.from(document.getElementsByClassName('start-reviews'));

        start.forEach(star => {
            star.checked = false;
        })

        this.setState(this.props.review)
        this.state.spot_id = this.props.spot.id
    }

    handleSubmit(e) {
        e.preventDefault(); 
        if (this.state.guest_id) {
            this.props.createReview(this.state)
                    .then(this.props.fetchSpot(this.state.spot_id))
                    .then(this.clearReview())
        } else {
            this.props.openModal('login')
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    componentDidMount() {
        this.props.fetchSpot(this.state.spot_id);
    }

    handleRating(rating) {
        return this.setState({rating: rating})
    }

    render() {
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
                            {/* <i className="fas fa-star" aria-hidden="true" id="s1" value={this.state.rating} onClick={() => this.handleRating(5.0)}></i>
                            <i className="fas fa-star" aria-hidden="true" id="s2" value={this.state.rating} onClick={() => this.handleRating(4.0)}></i>
                            <i className="fas fa-star" aria-hidden="true" id="s3" value={this.state.rating} onClick={() => this.handleRating(3.0)}></i>
                            <i className="fas fa-star" aria-hidden="true" id="s4" value={this.state.rating} onClick={() => this.handleRating(2.0)}></i>
                            <i className="fas fa-star" aria-hidden="true" id="s5" value={this.state.rating} onClick={() => this.handleRating(1.0)}></i> */}
                    </div>
                    <textarea
                        className="review-body" 
                        onChange={this.update('body')} 
                        placeholder="Review here"
                        value={this.state.body}
                    />
                </div>
                <div className="review-footer">
                    <button className="add-review-btn" type="submit" onClick={this.handleSubmit}>Add review</button>
                </div>
            </div>
        )
    }
}

export default ReviewForm;