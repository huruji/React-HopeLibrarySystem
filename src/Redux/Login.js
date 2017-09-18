const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGINOUT = 'LOGINOUT';

const Login = function(state, action) {
  if(!state) {
    if(localStorage.getItem('userImg') && localStorage.getItem('userId')) {
      return {
        logined: true,
        usermsg: {
          userImg: localStorage.getItem('userImg'),
          userId: localStorage.getItem('userId'),
          userName: localStorage.getItem('userName')
        }
      }
    }
    return {
      logined: false,
      usermsg: {}
    }
  }
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {logined: true,usermsg: action.usermsg};
    case LOGIN_FAILED:
      return {logined: false,usermsg:{}};
    case LOGINOUT:
      return {logined: false, usermsg: {}};
    default:
      return state
  }
};

export  default Login;