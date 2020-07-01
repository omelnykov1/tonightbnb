import React, {useState} from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const marker = window.marker;
        const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
        let iconMarker = new window.google.maps.MarkerImage(
            marker,
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new window.google.maps.Size(32, 32)
        );

        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 40.74, lng: -73.934298 }}
                defaultZoom={12}
            >
                
                {this.props.spots.map(spot => (
                    <Marker 
                        key={spot.id} 
                        label={ spot.price }
                        position={{ lat: spot.lat, lng: spot.lng }} 
                        defaultAnimation={google.maps.Animation.DROP}
                        // icon={iconMarker}
                        onClick={() => props.onMarkerClick(spot)}
                    />
                ))}
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div className="google" style={{ height: `90vh`, width: '90vh', padding: '5%' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
};
export default Map;