import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./layout";
import Login from "./authentication/loginForm";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.loggedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.loggedIn === false ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/app",
          }}
        />
      )
    }
  />
);


class NotFound extends Component {
  render() {
    return <Redirect to="/" />;
  }
}

export default class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute
            path="/app"
            component={() => (
              <Layout changeLoginState={this.props.changeLoginState} />
            )}
            loggedIn={this.props.loggedIn}
          />

          <LoginRoute
            exact
            path="/"
            component={() => (
              <Login changeLoginState={this.props.changeLoginState} />
            )}
            loggedIn={this.props.loggedIn}
          />

          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
