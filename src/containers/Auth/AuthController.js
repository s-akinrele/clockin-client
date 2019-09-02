import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignInController from '../../components/Auth/SignInController';
import SignUpController from '../../components/Auth/SignUpController';

import { loginUser, signupUser } from '../../requests/userRequest'
import { isLoggedIn } from '../../helpers/Auth'

import '../../styles/authController.scss'
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

  componentDidMount() {
    if (isLoggedIn()) {
      this.props.history.push('/dashboard');
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.token !== this.props.user.token) {
      this.props.history.push('/dashboard');
    }
  }

  handleChange = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({ user })
  }

  handleSignUp = () => {
    this.props.signupUser({ ...this.state.user });
  }

  handleLogin = () => {
    this.props.loginUser({ ...this.state.user })
  }

  onChangeMode = (mode) => {
    this.setState({ mode });
  }

  renderComponent = () => {
    const {user} = this.props
    if (this.state.mode === 'sign-in') {
      return (
        <SignInController
          onChangeMode={this.onChangeMode}
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          error={user.error}
          errorMessage={user.errorMessage}
        />
      );
    } else {
      return (
        <SignUpController
          onChangeMode={this.onChangeMode}
          handleChange={this.handleChange}
          handleSignUp={this.handleSignUp}
          error={user.error}
          errorMessage={user.errorMessage}
        />
      );
    }
  }

  render() {
    return (
      <div className="auth-page">
        <div className="container">
          {this.renderComponent()}
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { loginUser, signupUser })(AuthController);
