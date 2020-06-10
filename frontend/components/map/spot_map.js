import React, { useState } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
class SpotMap extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: this.props.lat, lng: this.props.lng}}
                defaultZoom={13}
            >
                    <Marker
                        // key={spot.id}
                        position={{ lat: this.props.lat, lng: this.props.lng }}
                        defaultAnimation={google.maps.Animation.DROP}
                        icon={spot.price}
                    // onClick={() => {
                    //     setSelectedSpot(spot)
                    // }}
                    />
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div style={{ height: '400px', width: '80vw' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
};
export default SpotMap;