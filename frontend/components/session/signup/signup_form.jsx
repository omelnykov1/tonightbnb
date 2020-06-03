import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            email: "",
            name: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let newUser = Object.assign({}, this.state);
        this.props.processForm(newUser).then(this.props.closeModal);
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    renderErrors() {
        let {errors} = this.props
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
        let {openModal} = this.props
        let errors = this.renderErrors()
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {errors}
                    <header className="modal-header">
                        <div className="login-header">Sign up</div>
                        <div className="modal-close" onClick={this.props.closeModal} >X</div>
                    </header>
                    <div className="modal-content">
                        <div className="input-container" data-error={errors}>
                        <input className="modal-field" type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" required/>
                        </div>
                        <br />
                        <div className="input-container" data-error={errors}>
                            <input className="modal-field" type="text" value={this.state.name} onChange={this.update('name')} placeholder="Name" required/>
                        </div>
                        <br />
                        <div className="input-container" data-error={errors}>
                            <input className="modal-field" type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" required />
                        </div>
                        <br/>
                        <button className="nav-btn" type="submit">Sign up</button>
                    </div>
                    <span className="footer-login">
                        Already have an account?
                        <div className="footer-btn" onClick={() => this.props.clearErrors()}> {this.props.redirect}</div>
                    </span>
                </form>
            </div>
        )
    }

}

export default withRouter(SignupForm);