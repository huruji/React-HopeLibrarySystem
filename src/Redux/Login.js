const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGINOUT = 'LOGINOUT';

const Login = function(state, action) {
  if(!state) {
    if(sessionStorage.getItem('userLogin')) {
      return {
        logined: true,
        usermsg: JSON.parse(sessionStorage.getItem('userLogin'))
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