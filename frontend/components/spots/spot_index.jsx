import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotIndexItem from './spot_index_item';
import { fetchSpots} from '../../actions/spot_actions';
import Map from '../map/map';

const SpotIndex = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.entities.spots));
  
  useEffect(() => {
    dispatch(fetchSpots());
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