import React, { Component } from 'react';
import LoginMutation from '../../components/Mutations/auth-login'
import RegisterMutation from '../../components/Mutations/auth-signup'
import Error from '../../components/error'

import loginImg from '../../app-assets/images/pages/login.png'

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    login = (event) => {
        event.preventDefault();
        this.props.login({ variables: { email: this.state.email, password: this.state.password } } )
    }

    render() {
        const { error, loading } = this.props;
        const dropContentDown = {
            marginTop: "6em",
          };
        return (
          <div>
            <div className="header-navbar-shadow" />
            <div className="content">
              <div className="content-overlay">
                <div className="content-wrapper" style={dropContentDown}>
                  <div className="content-header row"></div>
                  <div className="content-body">
                    <section id="auth-login" className="row flexbox-container">
                      <div className="col-xl-8 col-11">
                        <div className="card bg-authentication mb-0">
                          <div className="row m-0">
                            <div className="col-md-6 col-12 px-0">
                              <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                                <div className="card-header pb-1">
                                  <div className="card-title">
                                    <h4 className="text-center mb-2">
                                      Login Here
                                    </h4>
                                  </div>
                                </div>
                                <div className="card-content">
                                  <div className="card-body">
                                    {error && (
                                      <Error>
                                        <p>There was an error loggin in!</p>
                                      </Error>
                                    )}
                                    <form onSubmit={this.login}>
                                      <div className="form-group mb-50">
                                        <label
                                          className="text-bold-600"
                                          htmlFor="exampleInputEmail1"
                                        >
                                          Email address
                                        </label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          onChange={(event) =>
                                            this.setState({
                                              email: event.target.value,
                                            })
                                          }
                                          id="exampleInputEmail1"
                                          required
                                          placeholder="Email address"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <label
                                          className="text-bold-600"
                                          htmlFor="exampleInputPassword1"
                                        >
                                          Password
                                        </label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          onChange={(event) =>
                                            this.setState({
                                              password: event.target.value,
                                            })
                                          }
                                          id="exampleInputPassword1"
                                          required
                                          placeholder="Password"
                                        />
                                      </div>
                                      <div className="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                                        <div className="text-left">
                                          <div className="checkbox checkbox-sm">
                                            <input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="exampleCheck1"
                                            />
                                            <label
                                              className="checkboxsmall"
                                              htmlFor="exampleCheck1"
                                            >
                                              <small>Keep me logged in</small>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="text-right">
                                          <a
                                            href="auth-forgot-password.html"
                                            className="card-link"
                                          >
                                            <small>Forgot Password?</small>
                                          </a>
                                        </div>
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn btn-primary glow w-100 position-relative"
                                      >
                                        { loading ? (<div
                                            className="spinner-border text-primary"
                                            role="status"
                                          >
                                            <span className="sr-only">
                                              Loading...
                                            </span>
                                          </div>) : 'Login'}
                                        
                                        <i
                                          id="icon-arrow"
                                          className="bx bx-right-arrow-alt"
                                        />
                                      </button>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                      <small className="mr-25">
                                        Don't have an account?
                                      </small>
                                      <a href="auth-register.html">
                                        <small>Sign up</small>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                              <div className="card-content">
                                <img
                                  className="img-fluid"
                                  src={loginImg}
                                  alt="branding logo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

class RegisterForm extends Component {
    state = {
        email: '',
        password: '',
        username: ''
    }

    login = (event) => {
        event.preventDefault();
        this.props.signup({ variables: { email: this.state.email, password: this.state.password, username: this.state.password }})
        
    }

    render() {
        const { error, loading } = this.props;
        const dropContentDown = {
            marginTop: "6em",
          };
        return (
          <div>
            <div className="header-navbar-shadow" />
            <div className="content">
              <div className="content-overlay">
                <div className="content-wrapper" style={dropContentDown}>
                  <div className="content-header row"></div>
                  <div className="content-body">
                    <section id="auth-login" className="row flexbox-container">
                      <div className="col-xl-8 col-11">
                        <div className="card bg-authentication mb-0">
                          <div className="row m-0">
                            <div className="col-md-6 col-12 px-0">
                              <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                                <div className="card-header pb-1">
                                  <div className="card-title">
                                    <h4 className="text-center mb-2">
                                      Login Here
                                    </h4>
                                  </div>
                                </div>
                                <div className="card-content">
                                  <div className="card-body">
                                    {error && (
                                      <Error>
                                        <h4>There was an error loggin in!</h4>
                                      </Error>
                                    )}
                                    <form onSubmit={this.login}>
                                      <div className="form-group mb-50">
                                        <label
                                          className="text-bold-600"
                                          htmlFor="exampleInputEmail1"
                                        >
                                          Email address
                                        </label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          onChange={(event) =>
                                            this.setState({
                                              email: event.target.value,
                                            })
                                          }
                                          id="exampleInputEmail1"
                                          required
                                          placeholder="Email address"
                                        />
                                      </div>
                                      <div className="form-group mb-50">
                                        <label
                                          className="text-bold-600"
                                          htmlFor="exampleInputEmail1"
                                        >
                                          Username
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          onChange={(event) =>
                                            this.setState({
                                              username: event.target.value,
                                            })
                                          }
                                          id="exampleInputEmail1"
                                          required
                                          placeholder="Username"
                                        />
                                      </div>
                                      <div className="form-group">
                                        <label
                                          className="text-bold-600"
                                          htmlFor="exampleInputPassword1"
                                        >
                                          Password
                                        </label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          onChange={(event) =>
                                            this.setState({
                                              password: event.target.value,
                                            })
                                          }
                                          id="exampleInputPassword1"
                                          required
                                          placeholder="Password"
                                        />
                                      </div>
                                      <div className="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                                        <div className="text-left">
                                          <div className="checkbox checkbox-sm">
                                            <input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="exampleCheck1"
                                            />
                                            <label
                                              className="checkboxsmall"
                                              htmlFor="exampleCheck1"
                                            >
                                              <small>Keep me logged in</small>
                                            </label>
                                          </div>
                                        </div>
                                        <div className="text-right">
                                          <a
                                            href="auth-forgot-password.html"
                                            className="card-link">
                                            <small>Forgot Password?</small>
                                          </a>
                                        </div>
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn btn-primary glow w-100 position-relative">
                                        Login{" "}
                                        {loading && (
                                          <div
                                            className="spinner-border text-primary"
                                            role="status"
                                          >
                                            <span className="sr-only">
                                              Loading...
                                            </span>
                                          </div>
                                        )}{" "}
                                        <i
                                          id="icon-arrow"
                                          className="bx bx-right-arrow-alt"
                                        />
                                      </button>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                      <small className="mr-25">
                                        Don't have an account?
                                      </small>
                                      <a href="auth-register.html">
                                        <small>Sign up</small>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                              <div className="card-content">
                                <img
                                  className="img-fluid"
                                  src={loginImg}
                                  alt="branding logo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}







export default class LoginRegistration extends Component {
  state = {
    showLogin: true,
  };
  render() {
    const { changeLoginState } = this.props;
    const { showLogin } = this.state;
    return (
      <div>
        {showLogin && (
          <div>
            <LoginMutation changeLoginState={changeLoginState}>
              <LoginForm />
            </LoginMutation>
            <a onClick={() => this.setState({showLogin: false})}>Want to login? Click here</a>
          </div>
        )}
        {!showLogin && (
            <div>
                <RegisterMutation changeLoginState={changeLoginState}>
                    <RegisterForm />
                </RegisterMutation>
                <a onClick={() => this.setState({showLogin: true})}>Want to login? Click here</a>
            </div>
        )}
      </div>
    );
  }
}
