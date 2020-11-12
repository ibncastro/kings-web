import React, { Component } from 'react';
import { withApollo } from 'react-apollo'
import { LogOut } from 'react-feather'


class Logout extends Component {
    
  logout = () => {
    localStorage.removeItem("jwt");
    this.props.changeLoginState(false);
    this.props.client.resetStore();
  };

  render() {
    return (
      <a className="dropdown-item" onClick={this.logout}>
        <LogOut size={15}  style={{ marginRight: 10 }} /> Logout
      </a>
    );
  }
}
export default withApollo(Logout)