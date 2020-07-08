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
        const {email, password} = this.props.demo;
        this.setState({email: email, password: password });
        this.handleSubmit;
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    renderErrors() {
        if (this.props.errors.length === 0) {
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
                    <header className="modal-header">
                        <div className="login-header">Log in</div>
                        <div className="modal-close" onClick={this.props.closeModal} >X</div> 
                    </header>
                    <div className="modal-content">
                        <div className="input-container" data-error={errors}>
                            <input 
                                className="modal-field" 
                                type="email" 
                                value={this.state.email} 
                                onChange={this.update('email')} 
                                id="email"
                                required/>
                            <label className="modal-label">Email</label>
                            <br/>
                        </div>
                        <div className="input-container" data-error={errors}>
                            <input 
                                className="modal-field1" 
                                type="password" 
                                value={this.state.password} 
                                onChange={this.update('password')}
                                id="password" 
                                required 
                            />
                            <label className="modal-label-password">Password</label>
                        </div>
                        <div className="signin-errors">{errors}</div>
                        < br/>    
                        <button className="nav-btn" type="submit">Log in</button>
                        <br/>
                    </div>
                        <button className="nav-btn" type="submit" onClick={() => this.demoLogin()}>Demo</button>
                    <span className="footer-login">
                        Don't have an account?
                        <div className="footer-btn"> {this.props.redirect}</div>
                    </span>
                </form>
           </div>
        )
    }
}

export default LoginForm