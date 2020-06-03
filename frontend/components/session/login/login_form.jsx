import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal)
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    demoLogin() {
        this.props.processForm(this.props.demo).then(this.props.closeModal)
    }

    renderErrors() {
        let { errors } = this.props
        if (errors.length === 0) {
            return null;
        } else {
            return (
                <div className="errors">
                    {this.props.errors.map((error, i) => (
                        <p className="errors-body" key={`error-${i}`}>
                            {error}
                        </p>
                    ))}
                </div>
            )
        }
    }

    render() {
        let errors = this.renderErrors()
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="signin-errors">{errors}</div>
                    <header className="modal-header">
                        <div>Log in</div>
                        <div className="modal-close" onClick={this.props.closeModal} >X</div> 
                    </header>
                    <div className="modal-content">
                        <div className="input-container" data-error={errors}>
                            <input 
                                className="modal-field" 
                                type="text" 
                                value={this.state.email} 
                                onChange={this.update('email')} 
                                placeholder="Email" 
                                required/>
                            <br/>
                        </div>
                        <div className="input-container" data-error={errors}>
                            <input 
                                className="modal-field" 
                                type="password" 
                                value={this.state.password} 
                                onChange={this.update('password')} 
                                placeholder="Password" 
                                required 
                            />
                        </div>
                        < br/>    
                        <button className="nav-btn" type="submit">Log in</button>
                        <br/>
                    </div>
                        <button className="nav-btn" type="submit" onClick={() => this.demoLogin()}>Demo</button>
                    <span className="footer-login">
                        Don't have an account?
                        <div className="footer-btn" onClick={() => this.props.clearErrors()}> {this.props.redirect}</div>
                    </span>
                </form>
           </div>
        )
    }
}

export default LoginForm