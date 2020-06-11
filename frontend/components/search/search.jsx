import React from 'react';
import {withRouter} from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }
    
    handleClick(e) {
        e.preventDefault();
        if (this.state.length > 0) {
            this.props.doSearch(this.state)
            this.props.history.push('/search');
            this.setState({query: ''})
        } else {
            this.props.history.push('/spots'); 
            this.setState({ query: '' });
        }
    }

    render() {
        return (
            <div className="search-box">
                <div className="nav-search">
                    <input 
                        type="text" 
                        className="search"
                        placeholder="Where are you going?" 
                        value={this.state.query}
                        onChange={this.update('query')}
                        />
                    <label>LOCATION</label>
                    <button className="search-button" onClick={this.handleClick}><i className="fas fa-search"></i>Search</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Search)