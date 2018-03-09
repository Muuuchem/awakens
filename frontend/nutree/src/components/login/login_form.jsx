import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sessionLink = this.sessionLink.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
          this.props.history.push('/');
      }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(user);
    this.props.processForm(user);
  }


  sessionLink(route) {
      return () => {
          this.props.receiveErrors([]);
          this.props.history.push(route);
      };
  }

  navLink() {
    if (this.props.formType === 'login') {
        return <button className="button big" type="button"
            onClick={this.sessionLink("/signup")}>sign up instead</button>;
    } else {
      return <button className="button big" type="button"
            onClick={this.sessionLink("/login")}>log in instead</button>;
    }
  }

  renderErrors() {
    console.log(this.props.errors.Error);
    if (this.props.errors) {
      return (
        <div className="info-red">
          {this.props.errors}
        </div>
      );
    }
  }

  render() {
    
    return (
      <div className="background">
        <h1 className="header1" />
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <p className="input-text">{(this.props.formType === 'login') ? 'Log In' : 'Sign Up'}</p>
            <div className="login-form">
              <div className="login-labels">
                <label className="label1">
                  Email:
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                </label>
                <label className="label2">
                  Password:
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                {}
              </div>
              <div className="login-buttons">
                <input className="button big" type="submit" value="Submit" />
                {this.navLink()}
              </div>
              

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
