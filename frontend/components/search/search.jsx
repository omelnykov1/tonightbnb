import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}


export default Search;