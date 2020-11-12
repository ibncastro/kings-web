import React, { Component } from "react";
import { Bell,  } from "react-feather";

import profile from '../../../app-assets/images/portrait/small/avatar-s-1.jpg'

class Notification extends Component {

    constructor(props){
        super(props);
        this.state = {
            notificationsOpen: false,
          }
    }

    

    toggle = (state) => {
        this.setState({notificationsOpen: !this.state.notificationsOpen})
    }

  render() {

    
    const menuClass = `dropdown-menu-media dropdown-menu-right dropdown-menu${this.state.notificationsOpen ? " show": ""}`
    


    return (     
              
              
              <ul className="nav navbar-nav float-right">                
                <li className="dropdown dropdown-notification nav-item" onMouseEnter={this.toggle} onMouseLeave={this.toggle}  >
                  <a
                    className="nav-link nav-link-label"
                    id="notificationsIcon"
                    data-toggle="dropdown"
                    type="button"
                    
                  >
                    <Bell size={20} />
                    <span className="badge badge-pill badge-danger badge-up">
                      5
                    </span>
                  </a>
                  <ul className={menuClass} aria-labelledby="notificationsIcon">
                    <li className="dropdown-menu-header">
                      <div className="dropdown-header px-1 py-75 d-flex justify-content-between">
                        <span className="notification-title">
                          7 new Notification
                        </span>
                        <span className="text-bold-400 cursor-pointer">
                          Mark all as read
                        </span>
                      </div>
                    </li>
                    <li className="scrollable-container media-list">
                      <a
                        className="d-flex justify-content-between">
                        <div className="media d-flex align-items-center">
                          <div className="media-left pr-0">
                            <div className="avatar mr-1 m-0">
                              <img
                                src={profile}
                                alt="avatar"
                                height={39}
                                width={39}
                              />
                            </div>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              <span className="text-bold-500">
                                Congratulate Socrates Itumay
                              </span>{" "}
                              for work anniversaries
                            </h6>
                            <small className="notification-text">
                              Mar 15 12:32pm
                            </small>
                          </div>
                        </div>
                      </a>
                      
                      <div className="d-flex justify-content-between cursor-pointer">
                        <div className="media d-flex align-items-center py-0">
                          <div className="media-left pr-0">
                            <img
                              className="mr-1"
                              src="../../../app-assets/images/icon/sketch-mac-icon.png"
                              alt="avatar"
                              height={39}
                              width={39}
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              <span className="text-bold-500">
                                Updates Available
                              </span>
                            </h6>
                            <small className="notification-text">
                              Sketch 50.2 is currently newly added
                            </small>
                          </div>
                          <div className="media-right pl-0">
                            <div className="row border-left text-center">
                              <div className="col-12 px-50 py-75 border-bottom">
                                <h6 className="media-heading text-bold-500 mb-0">
                                  Update
                                </h6>
                              </div>
                              <div className="col-12 px-50 py-75">
                                <h6 className="media-heading mb-0">Close</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between cursor-pointer">
                        <div className="media d-flex align-items-center">
                          <div className="media-left pr-0">
                            <div className="avatar bg-primary bg-lighten-5 mr-1 m-0 p-25">
                              <span className="avatar-content text-primary font-medium-2">
                                LD
                              </span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              <span className="text-bold-500">
                                New customer
                              </span>{" "}
                              is registered
                            </h6>
                            <small className="notification-text">
                              1 hrs ago
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <div className="media d-flex align-items-center justify-content-between">
                          <div className="media-left pr-0">
                            <div className="media-body">
                              <h6 className="media-heading">New Offers</h6>
                            </div>
                          </div>
                          <div className="media-right">
                            <div className="custom-control custom-switch">
                              <input
                                className="custom-control-input"
                                type="checkbox"
                                defaultChecked
                                id="notificationSwtich"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="notificationSwtich"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                     
                    </li>
                   
                  </ul>
                </li>
                
              </ul>
            
    );
  }
}

export default Notification;
