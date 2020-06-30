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
        let newSearch = this.state.query.split(' ');
        let fixedSearch = [];
        newSearch.forEach(ele => {
            fixedSearch.push(ele[0].toUpperCase() + ele.slice(1).toLowerCase())
        })
        this.state.query = fixedSearch.join(' ');
        this.props.doSearch(this.state);
        this.props.history.push('/search');
        this.setState({ query: '' })
    }

    render() {
        return (
            <form className="search-box" onSubmit={this.handleClick}>
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
            </form>
        )
    }
}

export default withRouter(Search)