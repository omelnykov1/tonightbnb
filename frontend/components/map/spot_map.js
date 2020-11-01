import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const SpotMap = ({ lat, lng }) => {
  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat, lng }}
      defaultZoom={13}
    >
      <Marker
        key={spot.id}
        position={{ lat, lng }}
        defaultAnimation={google.maps.Animation.DROP}
      />
    </GoogleMap>
  ));
  return (
    <GoogleMapExample
      containerElement={<div style={{ height: '400px', width: '100%', marginBottom: '2vh'}} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};
export default SpotMap;