import React, { useEffect } from 'react';
import SpotIndexItem from './spot_index_item'
import Map from '../map/map_test'


const SpotIndex = ({ spots, fetchSpots }) => {
  useEffect(() => {
    fetchSpots();
  },[fetchSpots]);

  return (
    <div className="spots-content">
      <div className="left-side">
        <ul className="spots-list">
          {spots.map(spot => (
            <SpotIndexItem spot={spot} key={spot.id} />
          ))}
        </ul>
      </div>
      <div className='right-side'>
        <div className="google-map">
          <Map spots={spots} />
        </div>
      </div>
    </div>
  )
}

export default SpotIndex;