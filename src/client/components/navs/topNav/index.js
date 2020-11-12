import React, { Component } from 'react';

import Apps from './apps'
import Search from './search'
import User from './user'
import Notification from './notifications'
import { UserConsumer } from '../../context/user'

class TopNav extends Component {
    state = {
        isTop: false
    }

    componentDidMount(){
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY > 55;
          if(isTop !== this.state.isTop){
            this.setState({isTop})
          }
        })
      }

  render() {
    const { isTop } = this.state;
    return (
      <nav
        className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top"
        style={{
          backgroundColor: isTop === true ? "#ffffff" : "#f2f4f4",
          boxShadow:
            isTop === true
              ? "rgba(25, 42, 70, 0.13) -8px 12px 18px 0px"
              : "none",
        }}
      >
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div className="navbar-collapse" id="navbar-mobile"></div>
            {/* div below is only for apps and search components  */}
            <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center"> 
            <Apps />
            <Search />
            </div>
            <ul className="nav navbar-nav float-right"> 
            <Notification />
            <UserConsumer>
              <User changeLoginState={this.props.changeLoginState} />
            </UserConsumer>            
            </ul>            
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav;
