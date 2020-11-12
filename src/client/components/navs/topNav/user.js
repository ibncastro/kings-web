import React, { Component } from 'react';
import Logout from './logout'

import profile from '../../../app-assets/images/portrait/small/avatar-s-1.jpg'

class User extends Component {

    state = {
        notificationsOpen: false,
        profileDetailsOpen: false,
    }

    toggle = (state) => {
        this.setState({notificationsOpen: !this.state.notificationsOpen})
    }

    toggleProfile = (state) => {
        this.setState({profileDetailsOpen: !this.state.profileDetailsOpen})
    }


    render() {
      const { currentUser } = this.props;
        const menuClass = `dropdown-menu-media dropdown-menu-right dropdown-menu${this.state.notificationsOpen ? " show": ""}`
    const profileClass = `dropdown-menu dropdown-menu-right pb-0${this.state.profileDetailsOpen ? " show": ""}`
        return (
            
            <li className="dropdown dropdown-user nav-item">
                  <a className="dropdown-toggle  nav-link dropdown-user-link"
                    id="userProfile" onClick={this.toggleProfile}
                    data-toggle="dropdown"
                    type="button"
                  >
                    <div className="user-nav d-sm-flex d-none">
                      <span className="user-name">{currentUser.username}</span>
                    </div>
                    <span>
                      <img
                        className="round"
                        src={profile}
                        alt="avatar"
                        height={40}
                        width={40}
                      />
                    </span>
                  </a>
                  <div className={profileClass} aria-labelledby="userProfile">
                    <a className="dropdown-item" href="page-user-profile.html">
                      <i className="bx bx-user mr-50" /> Edit Profile
                    </a>
                    <a className="dropdown-item" href="app-email.html">
                      <i className="bx bx-envelope mr-50" /> My Inbox
                    </a>
                    <a className="dropdown-item" href="app-todo.html">
                      <i className="bx bx-check-square mr-50" /> Task
                    </a>
                    <a className="dropdown-item" href="app-chat.html">
                      <i className="bx bx-message mr-50" /> Chats
                    </a>
                    <div className="dropdown-divider mb-0" />
                    <Logout changeLoginState={this.props.changeLoginState} />
                  </div>
                </li>
               
        );
    }
}

export default User;
