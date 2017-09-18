import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class User extends Component {
  constructor() {
    super(props)
  }
  render() {
    if(!this.props.logined) {
      return (
        <Redirect to="/user/login"/>
      )
    }
    return(

      <div>
        user
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logined:state.Login.logined
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(User);