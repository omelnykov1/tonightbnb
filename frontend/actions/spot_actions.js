import * as APIUtil from '../util/spot_api_util'

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const receiveAllSpots = spots => ({
  type: RECEIVE_ALL_SPOTS,
  spots
})

export const receiveSearch = result => ({
  type: RECEIVE_SEARCH,
  result
});

export const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
})

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

export const receiveReview = ({ review, average_rating, guest }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  guest,
});

export const fetchSpots = () => dispatch => (
  APIUtil.fetchSpots().then(spots => dispatch(receiveAllSpots(spots)))
)

export const fetchSpot = spotId => dispatch => (
  APIUtil.fetchSpot(spotId).then(spot => dispatch(receiveSpot(spot)))
)

export const createSpot = spot => dispatch => (
  APIUtil.createSpot(spot).then(spot => dispatch(receiveSpot(spot)))
)

export const updateSpot = spot => dispatch => (
  APIUtil.updateSpot(spot).then(spot => dispatch(receiveSpot(spot)))
)

export const createReview = review => dispatch => (
  APIUtil.createReview(review)
    .then(review => (dispatch(receiveReview(review))))
    .catch(err => (dispatch(receiveReviewErrors(err.responseJSON))))
);

export const fetchReviews = spotId => dispatch => (
  APIUtil.fetchReviews(spotId).then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchSearch = query => dispatch => (
  APIUtil.fetchSearch(query).then(result => dispatch(receiveSearch(result)))
);