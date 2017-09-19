import React, {Component} from 'react';
import LoginFooter from './../../Components/LoginFooter'
import {loginFailed, passwordShort, usernameShort} from './../../utils/formMsg'
import {userLogin, adminLogin} from './../../api/index';
import { post } from './../../utils/ajax';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(44);
    console.log(props);
    this.state = {errMsg:''};
    this.loginClick = this.loginClick.bind(this);
  }
  componentDidMount() {
    document.getElementsByTagName('html')[0].className = 'login';
  }
  loginClick() {
    if(!this.username.value.length) {
      return this.setState({errMsg: usernameShort});
    }
    if(this.password.value.length < 6) {
      return this.setState({errMsg: passwordShort});
    }
    let url = userLogin;
    if(this.props.match.url.includes('admin')) {
      url = adminLogin
    }
    console.log('begin');
    post(url, {
      password: this.password.value,
      username: this.username.value
    }).then(res => {
      if(res.code === 404) {
        return this.setState({errMsg: loginFailed});
      }
      localStorage.setItem('userImg', res.userImg);
      localStorage.setItem('userId', res.userId);
      localStorage.setItem('userName', res.userName);
      this.props.loginSuccess({userImg: res.userImg, userId: res.userId, userName: res.userName});
    });
  }
  render() {
    const errMsg = this.state.errMsg;
    if(this.props.logined) {
      return (
        <Redirect to={this.props.match.url.includes('admin') ? '/admin' : '/user/borrow'}/>
      )
    }
    return (
      <section className="login-bg">
        <form action="">
          <h1>厚朴图书设备管理系统</h1>
          <div className="form-group clearfix">
            <input type="text" placeholder="账号" id="username" autoFocus ref={username => this.username = username}/>
          </div>
          <div className="form-group clearfix">
            <input type="password" placeholder="密码" id="password" ref={(password)=>this.password = password}/>
          </div>
          {errMsg ? (<p className="login-bg-error">{errMsg}</p>) : ''}
          <div className="login-bg-btn" onClick={this.loginClick}>
            <a href="javascript:" id="loginBtn">登录</a>
          </div>
        </form>
        <LoginFooter/>
      </section>
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
    loginSuccess: (usermsg) => dispatch({type: 'LOGIN_SUCCESS', usermsg})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);