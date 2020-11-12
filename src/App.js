import React from 'react';
import {withApollo} from 'react-apollo'
import Helmet from 'react-helmet'
import history from './client/components/history'

import Router from './client/views/router'


class App extends React.Component {

  constructor(props){
    super(props);
    this.unsubscribe = props.client.onResetStore(
      () => this.changeLoginState(false)
    )
  }

  state = {
    loggedIn: false,
  };

  componentWillUnmount(){
    this.unsubscribe();
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


 render(){
  return (
  <div>
    <Helmet>
      <title>Kings University College</title>
      <meta name="description" content="college content" />
    </Helmet>
    <Router history={history} loggedIn={this.state.loggedIn}  changeLoginState={this.changeLoginState} />
  </div>
    
  );
 }
}

export default withApollo(App);
