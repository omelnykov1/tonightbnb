import React from 'react';
import SpotIndexItem from './spot_index_item'
import GoogleMap from '../map/map'


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
                        <GoogleMap spots={this.props.spots}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpotIndex;