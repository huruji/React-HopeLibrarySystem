import React, {Component} from 'react';
import {Route, Switch}from 'react-router-dom'
import Login from './../Containers/Login'
import User from './../Containers/User'
import Reservation from './../Containers/User/Reservation'
import Modify from './../Containers/User/Modify'
import Reset from './../Containers/User/Reset';

class Routers extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route path="/user" exact component={User}/>
          <Route path="/user/reservation" exact component={Reservation}/>
          <Route path="/user/modify" exact component={Modify}/>
          <Route path="/user/reset" exact component={Reset}/>
          <Route path="/user/login" component={Login}/>
          <Route path="/admin/login" component={Login}/>
        </Switch>
      </div>
      )
  }
}

export default Routers;