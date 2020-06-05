import React from 'react';
import SpotIndexItem from './spot_index_item'
import Map from '../map/map_test'
import WrappedMap from '../map/map'

class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSpots();
    }

    render() {
        return (
            <div className="spots-content">
                <div className="left-side">
                    <ul className="spots-list">
                        {
                            this.props.spots.map(spot => (
                                <SpotIndexItem
                                    spot={spot}
                                    key={spot.id} 
                                />
                            ))
                        }
                    </ul>
                </div>
                <div className='right-side'>
                    <div className="google-map">
                        <Map/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpotIndex;