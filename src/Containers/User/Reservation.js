import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

class Reservation extends Component{
  render() {
    if(!this.props.logined) {
      return (
        <Redirect to="/user/login"/>
      )
    }
    return(
      <div>Reservation</div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    logined: state.Login.logined,
    userImg: state.Login.usermsg.userImg,
    userName: state.Login.usermsg.userName
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Reservation);