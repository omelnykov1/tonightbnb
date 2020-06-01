import React from 'react';
import { Link } from 'react-router-dom'



class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleErrors = this.handleErrors.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleErrors() {
        if (this.props.errors.length) {
            <ul>
                {this.props.errors.map(error => {
                    return (
                        <li>{error}</li>
                    )
                })};
            </ul>
        }
    }

    handleCurrentAddress() {
        if (this.props.formType === 'sigup') {
            return < Link to={'/signin'}>SIGN IN!</Link>
        } else if (this.props.formType = 'signin') {
            return < Link to={'/signup'}>SIGN UP!</Link>
        }
    }

    render() {
        let { formType, errors } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" onChange={this.handleChange('username')} value={this.state.username} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
                </label>
                <button>{formType}</button>
            </form>
        )
    }
}

export default SessionForm;