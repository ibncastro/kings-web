import React, { Component } from 'react';
import { Mail, MessageCircle, Calendar } from "react-feather";

class Apps extends Component {
    render() {

        return (
           
                
                <ul className="nav navbar-nav bookmark-icons">
                  <li className="nav-item d-none d-lg-block">
                    <a
                      className="nav-link"
                      href="app-email.html"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </li>
                  <li className="nav-item d-none d-lg-block">
                    <a
                      className="nav-link"
                      href="app-chat.html"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Chat"
                    >
                      <Calendar size={20} />
                    </a>
                  </li>
                  <li className="nav-item d-none d-lg-block">
                    <a
                      className="nav-link"
                      href="app-todo.html"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Todo"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </li>
                </ul>
               
              
        );
    }
}

export default Apps;
