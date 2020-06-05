import React from 'react';
import {connect} from 'react-redux';
import SpotIndex from './spot_index';
import { fetchSpot, fetchSpots} from '../../actions/spot_actions'


const mSTP = state => ({
    spots: Object.values(state.entities.spots)
})

const mDTP = dispatch => ({
    fetchSpot: spotId => dispatch(fetchSpot(spotId)),
    fetchSpots: () => dispatch(fetchSpots()),
})

export default connect(mSTP, mDTP)(SpotIndex);