import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import Spinner from '../assets/components/spinner/Loading-spinner'

const routes = [
  {
      path: "/app/home",
      main: lazy(() => import("../components/Home")) 
  },
  {
      path: "/app/analytics",
      main: lazy(() => import("../components/analytics")) 
  },
  
]

class Content extends Component {
  render() {
     
    return (
      <div>     
       <Switch>
          <Suspense fallback={<Spinner />}>
          {routes.map((route, index) => (
            <Route key={index}  path={route.path} children={<route.main />} loggedIn={this.props.loggedIn} /> 
          ))}
          </Suspense>
        </Switch>
      </div>
    );
  }
}

export default Content;
