import React, { useEffect } from 'react';
import { fetchSearch} from '../../actions/spot_actions';
import { useSelector, useDispatch } from 'react-redux';
import SearchItem from './search_item';
import SearchMap from '../map/search_map'

const SearchShow = () => {
  const spots = useSelector(state => Object.values(state.entities.spots));
  const search = useSelector(state => state.entities.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch(search.query));
  }, [fetchSearch, search])

  const getTitle = () => {
    if (!search.query) return '';
    else if (!spots.length) return "No places found, try something like 'New York' or 'Venice' ";
    else `We found ${ spots.length } spots for you to stay at`;
  }

  return (
    <div className="spots-content">
      <div className="left-side">
        <h2>{getTitle()}</h2>
        <ul className="spots-list">
          {spots.map(spot => (
            <SearchItem
              key={spot.id}
              spot={spot}
            />
          ))}
        </ul>
      </div>
      <div className="right-side">
        <div className="google-map">
          <SearchMap spots={spots} />
        </div>
      </div>
    </div>
  )
}


export default SearchShow;