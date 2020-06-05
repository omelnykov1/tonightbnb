import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

const Map = () => (
    <GoogleMap defaultZoom={10} default={{
        lat: 40.730610
        , lng: -73.935242}}
    />
)

const WrappedMap = withScriptjs(withGoogleMap(Map))



export default WrappedMap;