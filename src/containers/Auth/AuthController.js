import React, {Component} from 'react';
import {connect} from 'react-redux';

import SignInController from '../../components/Auth/SignIn';
import SignUpController from '../../components/Auth/SignUp';

class AuthController extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'sign-in',
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }


  handleChange = (event) => {
    // event.preventDefault();
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
  
    this.setState({user})
  }

  handleSignUp = () => {
    // event.preventDefault();
    this.props.signupUser(this.state.user);
  }

  handleLogin = () => {
    // event.preventDefault();
    this.props.loginUser(this.state.user)
  }

  onChangeMode = (mode) => {
    this.setState({mode});
  }

  renderComponent = () => {
    if (this.state.mode === 'sign-in') {
    return (
      <SignInController
        onChangeMode={this.onChangeMode}
        handleChange={this.handleChange}
        handleLogin={this.handleLogin}
      />
    );
    } else {
      return (
      <SignUpController
        onChangeMode={this.onChangeMode}
        handleChange={this.handleChange}
        handleSignUp={this.handleSignUp}
      />
      );
    }
  }

  render() {
    return (
      <div className="container" style={{marginTop: '23vh'}}>
        {this.renderComponent()}
      </div>
    );
  }
}

export default AuthController;
