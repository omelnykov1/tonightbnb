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
        this.setState(this.props.demo);
        this.handleSubmit(this.state)
    }

    // renderErrors() {
    //     ???
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <header className="modal-header">
                        <div>Log in</div>
                        <div className="modal-close" onClick={this.props.closeModal} >X</div> 
                    </header>
                    <div className="modal-content">
                        <input className="modal-field" type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"/>
                        <br/>
                        <input className="modal-field" type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" />
                        < br/>    
                        <button className="nav-btn" type="submit">Log in</button>
                        <br/>
                        <button className="nav-btn" type="submit" onClick={() => this.demoLogin()}>Demo</button>
                    </div>
                </form>
           </div>
        )
    }
}

export default LoginForm