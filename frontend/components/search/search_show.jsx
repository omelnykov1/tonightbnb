import React from 'react';
import SearchItem from './search_item';
import SearchMap from '../map/search_map'


class SearchShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
       this.props.fetchSearch(this.props.search.query)
    }

    componentDidUpdate(prevProps) {
        if (this.props.search.query !== prevProps.search.query ) {
            this.props.fetchSearch(this.props.search.query );
        }
    }

    render() {
        let title
        if (this.props.search.query === undefined) {
            title = ''
        } else if (this.props.spots.length === 0) {
            title = "No places found, try something like 'New York' or 'Venice' "
        } else {
            title = `We found ${ this.props.spots.length } spots for you to stay at `
        }
        return (
           <div className="spots-content">
                <div className="left-side">
                    <h2>{title}</h2>
                        <ul className="spots-list">
                            {this.props.spots.map(spot => (
                                < SearchItem
                                    key={spot.id}
                                    spot={spot}
                                />
                            ))}
                        </ul>
                </div>
                <div className="right-side">
                    <div className="google-map">
                        < SearchMap spots={this.props.spots} />
                    </div>
                </div>
           </div>
        )
    }
}


export default SearchShow;