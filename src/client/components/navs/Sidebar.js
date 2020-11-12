import React, { Component } from "react";
import { Clipboard, Award, Layers, BookOpen, User } from "react-feather";
import { Link } from 'react-router-dom'


class Sidebar extends Component {
  render() {

        const sideMenuMoveRight = {
            marginLeft: "1em"
        }

        const menuBorder = {
          borderRight: "1px solid #dfe3e7"
        }


    return (
     
      <div
        className="main-menu menu-fixed menu-light menu-accordion menu-shadow" style={menuBorder}
        data-scroll-to-active="true"
      >
        <div></div>
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mr-auto">
              <a
                className="navbar-brand"
                // href="../../html/ltr/vertical-menu-template/index.html"
              >
                <div className="brand-logo">
                  
                </div>
                <h2 className="brand-text mb-0"></h2>
              </a>
            </li>
            <li className="nav-item nav-toggle">
              <a
                className="nav-link modern-nav-toggle pr-0"
                data-toggle="collapse"
              >
                <i className="bx bx-x d-block d-xl-none font-medium-4 primary" />
                <i
                  className="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block primary"
                  data-ticon="bx-disc"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="shadow-bottom" />
        <div className="main-menu-content ps ps--active-y">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
            data-icon-style="lines"
          >
            <li className=" nav-item">
              <Link to="/app/home">
                <Clipboard size={17} />
                <span className="menu-title" data-i18n="Email" style={sideMenuMoveRight}>
                  DashBoard
                </span>
              </Link>
            </li>
            <li className=" nav-item">
              <Link to="/app/analytics">
              <Clipboard size={17} />
                <span className="menu-title" data-i18n="Chat" style={sideMenuMoveRight}>
                  Analytics
                </span>
              </Link>
            </li>
            <li className=" nav-item">
              <Link to="/app/classes">
              <Award size={17} />
                <span className="menu-title" data-i18n="Todo" style={sideMenuMoveRight}>
                  Classes
                </span>
              </Link>
            </li>
            <li className=" nav-item">
              <Link to="/app/courses">
              <Layers size={17} />
                <span className="menu-title" data-i18n="Calendar" style={sideMenuMoveRight}>
                  Courses
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/library">
              <BookOpen size={17} />
                <span className="menu-title" data-i18n="Kanban" style={sideMenuMoveRight}>
                  Library
                </span>
              </Link>
            </li>
            
           
            <li className="nav-item">
              <Link to="/profile">
              <User size={17} />
                <span className="menu-title" data-i18n="profile" style={sideMenuMoveRight}>
                  Profile
                </span>
              </Link>
            </li>
            <li className=" navigation-header">
              <span>Support</span>
            </li>
            <li className=" nav-item">
              <a
                href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation"
                target="_blank"
              >
                <i className="menu-livicon" data-icon="morph-folder" />
                <span className="menu-title" data-i18n="Documentation">
                  Documentation
                </span>
              </a>
            </li>
            <li className=" nav-item">
              <a href="https://pixinvent.ticksy.com/" target="_blank">
                <i className="menu-livicon" data-icon="help" />
                <span className="menu-title" data-i18n="Raise Support">
                  Raise Support
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    );
  }
}

export default Sidebar;
