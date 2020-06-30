import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class SearchMap extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let newLat, newLng
        if (this.props.spots.length) {
            newLat = this.props.spots[0].lat;
            newLng = this.props.spots[0].lng;
        } else {
            newLat = 40.74;
            newLng = -73.934298;
        }
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: newLat, lng: newLng }}
                defaultZoom={12}
            >
                {this.props.spots.map(spot => (
                    <Marker
                        key={spot.id}
                        position={{ lat: spot.lat, lng: spot.lng }}
                        defaultAnimation={google.maps.Animation.DROP}
                    />
                ))}
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div className="google" style={{ height: `100vh`, width: '90vh'}} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default SearchMap;