import React, {Component} from 'react';
import {Route, Switch}from 'react-router-dom'
import Login from './../Containers/Login'

class Routers extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route path="/user/login" component={Login}/>
          <Route path="/admin/login" component={Login}/>
        </Switch>
      </div>
      )
  }
}

export default Routers;