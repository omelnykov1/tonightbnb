import React from 'react';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.review;
        this.state.spot_id = this.props.spot.id;
        this.state.rating = 4.7;
        console.log(this.state);
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.createReview(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    componentDidMount() {
        this.props.fetchSpot(this.state.spot_id);
    }

    render() {
        return (
            <div className="review-form-containter">
                <textarea 
                    className="review-body" 
                    onChange={this.update('body')} 
                    // placehorder="Review here"
                    value={this.state.body}
                />
                <button className="add-review-btn" type="submit" onClick={this.handleSubmit}>Add review</button>
            </div>
        )
    }
}

export default ReviewForm;