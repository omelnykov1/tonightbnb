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

    // renderErrors() {
    //     ???
    // }

    render() {
        let {openModal} = this.props
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <header className="modal-header">
                        <div className="login-header">Sign up</div>
                        <div className="modal-close" onClick={this.props.closeModal} >X</div>
                    </header>
                    <div className="modal-content">
                        <input className="modal-field" type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"/>
                        <br />
                        <input className="modal-field" type="text" value={this.state.name} onChange={this.update('name')} placeholder="Name"/>
                        <br />
                        <input className="modal-field" type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
                        <br/>
                        <button className="nav-btn" type="submit">Sign up</button>
                    </div>
                    <span className="footer-login">
                         Already have an account?
                        <a href="#"className="footer-btn" onClick={() => openModal('login')}>Log In</a>
                    </span>
                </form>
            </div>
        )
    }

}

export default withRouter(SignupForm);