import React, {useState} from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={{ lat: 40.74, lng: -73.934298 }}
                defaultZoom={12}
            >
                {this.props.spots.map(spot => (
                    <Marker 
                        key={spot.id} 
                        position={{ lat: spot.lat, lng: spot.lng }} 
                        defaultAnimation={google.maps.Animation.DROP}
                        // icon={spot.price}
                        // onClick={() => {
                        //     setSelectedSpot(spot)
                        // }}
                        />
                ))}
                {/* {selectedSpot && (
                    <InfoWindow
                        position={{
                            lat: selectedSpot.lat,
                            lng: selectedSpot.lng
                        }}
                        onCloseClick={() => {
                            setSelectedSpot(null)
                        }}
                    >
                    <div>${selectedSpot.price}</div>
                    </InfoWindow>
                )} */}
            </GoogleMap>
        ));
        return (
            <div>
                <GoogleMapExample
                    containerElement={<div className="google" style={{ height: `100vh`, width: '90vh', padding: '5%' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
};
export default Map;