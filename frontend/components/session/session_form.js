import React from 'react';

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

    renderErrors() { 
        if (this.props.errors.length > 0) {
            return (
                <div className="session-errors">
                    {this.props.errors.map((error, idx) => (
                        <p className="session-errors-content" key={`error-${idx}`}>
                            {error}
                        </p>
                    ))}
                </div>
            )
        } else {
            return null;
        }
    }


    render() {
        let errors = this.renderErrors() ? "errors" : ""
        const sessionForm = this.props.formType === 'Login' ? (
            <div>
                    <form className="login" onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            onChange={this.handleChange('email')} 
                            value={this.state.email} 
                            placeholder="Email"
                        />
                    <br />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.handleChange('password')} 
                            value={this.state.password} 
                        />
                    <button id="nav-btn"type="submit">Log in</button>
                </form>
            </div>
        ) : (<div>
                <form className="login" onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            onChange={this.handleChange('email')} 
                            value={this.state.email}
                            placeholder="Email"
                        />
                    <br />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            onChange={this.handleChange('password')} 
                            value={this.state.password} 
                        />
                    <button id="nav-btn"type="submit">Sign Up</button>
                </form>
            </div> )
        return (
            <div>
                {sessionForm}
            </div>
        )
    }
}

export default SessionForm;