import React, { Component, Suspense, lazy } from 'react';

import Navbar from '../components/navs/topNav'
import Sidebar from '../components/navs/Sidebar'
// import Content from './content'
import CurrentUser from '../components/Queries/currentUser'
import { Route, Switch } from 'react-router-dom';
import Spinner from '../assets/components/spinner/Loading-spinner'
import Crumbs  from './Crumbs';

const routes = [
  {
      path: "/app/home",
      main: lazy(() => import("../components/Home/index")) 
  },
  {
      path: "/app/analytics",
      main: lazy(() => import("../components/analytics")) 
  },
  
]

class Layout extends Component {

    state = {
      loggedIn: false
    }

  componentWillMount(){
    const token = localStorage.getItem('jwt');
    
    if(token){
      this.setState({loggedIn: true})
    }
    
  }

  changeLoginState = (loggedIn) => {
    this.setState({loggedIn})
  }

    
  render() {
    const { loggedIn } = this.state
    const dropContentDown = {
      marginTop: "4em",
    };
    return (
      <CurrentUser>
      <div className="vertical-layout vertical-menu-modern 2-columns  navbar-sticky footer-static menu-expanded pace-done">        
          <div className="header-navbar-shadow" />
          <Sidebar />
          <Navbar changeLoginState={this.props.changeLoginState} />
          <div className="content">
            <div className="content-overlay">
              <div className="content-wrapper" style={dropContentDown}>
                <div className="content-header row"></div>
                <div className="content-body">
                  <div>
                    <Crumbs />
                    <Switch>
                      <Suspense fallback={<Spinner />}>
                        {routes.map((route, index) => (
                          <Route
                            key={index}
                            path={route.path}
                            children={<route.main />}
                            changeLoginState={this.props.changeLoginState}
                            loggedIn={loggedIn}
                          />
                        ))}
                      </Suspense>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      </CurrentUser>
    );
  }
}

export default Layout