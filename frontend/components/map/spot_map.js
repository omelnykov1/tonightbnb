import React, { useState } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';


class SpotMap extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: this.props.lat, lng: this.props.lng}}
                defaultZoom={13}
            >
                    <Marker
                        key={spot.id}
                        position={{ lat: this.props.lat, lng: this.props.lng }}
                        defaultAnimation={google.maps.Animation.DROP}
                    />
            </GoogleMap>
        ));
        return (
                <GoogleMapExample
                    containerElement={<div class="spot-map" style={{ height: '400px', width: '80vw', position: 'absolute !important',bottom: '0', marginTop: '3vh'}} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
        );
    }
};
export default SpotMap;