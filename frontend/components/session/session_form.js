import React from 'react';
import { Link } from 'react-router-dom'



class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            email: "",
            name: "",
            password: ""
        })
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    


    render() {
        const sessionForm = this.props.formType = 'Login' ? (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email:
                        <input type="text" onChange={this.handleChange('email')} value={this.state.email} />
                    </label>
                    <br />
                    <label>
                        name:
                        <input type="text" onChange={this.handleChange('name')} value={this.state.name} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
                    </label>
                    <button type="submit">Log in</button>
                </form>
            </div>
        ) : <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email:
                        <input type="text" onChange={this.handleChange('email')} value={this.state.email} />
                    </label>
                    <br />
                    <label>
                        name:
                        <input type="text" onChange={this.handleChange('name')} value={this.state.name} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        return (
            <div>
                {sessionForm}
            </div>
        )
    }
}

export default SessionForm;