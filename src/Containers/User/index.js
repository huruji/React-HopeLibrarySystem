import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
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