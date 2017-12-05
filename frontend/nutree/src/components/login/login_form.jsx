import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
        // this.sessionLink = this.sessionLink.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.loggedIn) {
    //         this.props.history.push('/');
    //     }
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        // this.props.processForm(user);
    }

    handleGuestSubmit(e) {
        e.preventDefault();
        const user = { username: "Guest", password: "password" };
        // this.props.processGuest(user);
    }

    // sessionLink(route) {
    //     return () => {
    //         this.props.receiveErrors([]);
    //         this.props.history.push(route);
    //     };
    // }


    navLink() {
        // if (this.props.formType === 'login') {
        //     return <div className="link-switch"
        //         onClick={this.sessionLink("/signup")}>sign up instead</div>;
        // } else {
        //     return <div className="link-switch"
        //         onClick={this.sessionLink("/login")}>log in instead</div>;
        // }
    }

    renderErrors() {
        return (
            <ul className="render-errors">
                
            </ul>
        );
    }

    render() {
        return (
            <div className="background">
                <h1 className="header1"></h1>
                <div className="login-form-container">

                    <form onSubmit={this.handleSubmit} className="login-form-box">
                       Sign In!
          <br />
                       
                        <div className="login-form">
                            <br />
                            <label className="label1">Username:
              <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input1"
                                />
                            </label>
                            <br />
                            <label className="label2">Password:
              <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input1"
                                />
                            </label>
                            <br />
                            <div className="login-buttons">
                                <input className="btn-1" type="submit" value="Submit" />
                                <button className="btn-1" onClick={this.handleGuestSubmit}>Login As Guest</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SessionForm);