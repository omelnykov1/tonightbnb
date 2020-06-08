import * as APIUtil from '../util/spot_api_util'

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveAllSpots = spots => ({
    type: RECEIVE_ALL_SPOTS,
    spots
})

const receiveSpot = spot => ({
    type: RECEIVE_SPOT,
    spot
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
    APIUtil.createReview(review).then(review => (dispatch(receiveReview(review))))
);