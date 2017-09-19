import React, {Component} from 'react';
import FormBtn from './../../Components/Form/FormBtn'
import {userInfo} from './../../api'
import {get} from './../../utils/ajax';
import {connect} from 'react-redux';

class UserInfo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      id: '',
      sex: '',
      avatar: '',
      email: '',
      group: '',
      major: '',
      number: '',
      phone: '',
      hopeGroup: []
    }
  }
  componentDidMount() {
    const self = this;
    get(userInfo).then(res => {
      if(res.code === 401) {
        return self.props.logout();
      }
      self.setState({...res.data});
    })
  }
  render() {
    const {name, sex, avatar, email, group, major, number, phone, hopeGroup} = {...this.state};
    const goupRadios = hopeGroup.map((item,index) => {
      return (
        <label className="radio-inline">
          <input type="radio" className="" name="hopeGroup" key={index} checked={group===item} />
          {item}
        </label>
      )
    });
    return(
      <section className="main-right-form floatfix">
        <form >
          <div className="form-group">
            <label>用户名</label>
            <input type="text" value={name} disabled="disabled" />
          </div>
          <div className="form-group">
            <label>性别</label>
            <div className="radio">
              <label className="radio-inline">
                <input type="radio" name="sex" checked={sex==='男'}/>
                男
              </label>
              <label className="radio-inline">
                <input type="radio" name="sex" checked={sex==='女'}/>
                女
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>学号</label>
            <input type="text" id="studentNumber" value={number} />
          </div>
          <div className="form-group">
            <label>邮箱</label>
            <input type="text"  id="readerEmail" value={email}/>
          </div>
          <div className="form-group">
            <label>手机</label>
            <input type="text" id="readerPhone" value={phone}/>
          </div>
          <div className="form-group">
            <label>厚朴组</label>
            <div className="radio">
              {goupRadios}
            </div>
          </div>
          <div className="form-group">
            <label>专业</label>
            <input type="text"  id="readerMajor" value={major}/>
          </div>
          <div className="main-right-form-file form-group">
            <label>头像</label>
            <img src={avatar} alt="" id="js-upload-img"/>
            <input type="file" value="" id="js-upload-input"/>
          </div>
          <FormBtn/>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logined: state.Login.logined
  }
};

const mapDispathToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch({type: 'LOGINOUT'})
    }
  }
};

export default connect(mapStateToProps, mapDispathToProps)(UserInfo);