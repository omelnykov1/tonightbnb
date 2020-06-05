import React from 'react';
import SpotIndexItem from './spot_index_item'

class SpotIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchSpots();
    }

    render() {
        return (
            <div className="spots-content">
                <h1>Hello!</h1>
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
        )
    }
}

export default SpotIndex;