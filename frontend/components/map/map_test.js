import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
                defaultZoom={13}
            >
                {/* {this.props.spots.map(spot => (
                    <Marker key={spot.id} position={{ lat: spot.lat, lng: spot.lng }} />
                ))} */}
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div className="google" style={{ height: `100vh`, width: '700px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
};
export default Map;