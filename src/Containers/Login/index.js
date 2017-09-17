import React, {Component} from 'react';
import LoginFooter from './../../Components/LoginFooter'
import {loginFailed, passwordShort, usernameShort} from './../../utils/formMsg'
import axios from 'axios';
import {userLogin, adminLogin} from './../../api/index';
import post from './../../utils/post';
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
      password: this.username.value,
      username: this.username.value
    }).then(res => {
      if(res.code === 404) {
        return this.setState({errMsg: loginFailed});
      }

    });
  }
  render() {
    const errMsg = this.state.errMsg;
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

export default Login;