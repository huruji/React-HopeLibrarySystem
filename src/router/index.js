import React, {Component} from 'react';
import {Route, Switch, Redirect}from 'react-router-dom'
import Login from './../Containers/Login'
import User from './../Containers/User'
import Reservation from './../Containers/User/Reservation'
import Modify from './../Containers/User/Modify'
import Reset from './../Containers/User/Reset';
import UserBook from './../Containers/User/Book';
import UserEquip from './../Containers/User/Equip';

class Routers extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route path="/user/borrow" exact component={User}/>
          <Route path="/user/reservation" exact component={Reservation}/>
          <Route path="/user/account" exact component={Modify}/>
          <Route path="/user/account/reset" exact component={Reset}/>
          <Route path="/user/book" exact component={UserBook}/>
          <Route path="/user/equip" exact component={UserEquip}/>
          <Route path="/user/login" component={Login}/>
          <Route path="/admin/login" component={Login}/>
        </Switch>
      </div>
      )
  }
}

export default Routers;