import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const SearchMap = ({ spots }) => {
  const newLat = spots.length ? spots[0].lat : 40.74;
  const newLng = spots.length ? spots[0].lng : -73.934298;
  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: newLat, lng: newLng }}
      defaultZoom={12}
    >
      {spots.map(spot => (
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

export default SearchMap;