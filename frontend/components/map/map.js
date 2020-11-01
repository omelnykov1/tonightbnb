import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = ({ spots }) => {
  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 40.74, lng: -73.934298 }}
      defaultZoom={12}
    >   
      {spots.map(spot => (
        <Marker 
            key={spot.id} 
            position={{ lat: spot.lat, lng: spot.lng }} 
            defaultAnimation={google.maps.Animation.DROP}
            onClick={() => props.onMarkerClick(spot)}
        />
      ))}
    </GoogleMap>
  ));
  return (
    <div>
      <GoogleMapExample
        containerElement={<div className="google" style={{ height: `90vh`, width: '90vh', padding: '5%', marginRight: '3vw' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};
export default Map;