import React from 'React';
import { connect } from "react-redux";
import Map from './map_test';

const mSTP = state => ({
    spots: Object.values(state.entities.spots)
});

export default connect(mSTP, null)(Map);