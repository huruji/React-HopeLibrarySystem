import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './../../Components/Header/index';
import Footer from './../../Components/Footer/index';
import Banner from './../../Components/Banner/index';
import Nav from './../../Components/Nav/index';
import Aside from './../../Components/Aside';
import UserConfig from './../../config/user'
import FormBtn from './../../Components/Form/FormBtn';
const navLinkList = UserConfig.nav.modify;

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props',this.props);
    if(!this.props.logined) {
      return (
        <Redirect to="/user/login"/>
      )
    }
    return(
      <div>
        <Header />
        <Banner userName={this.props.userName} userImg={this.props.userImg}/>
        <section className="main">
          <div className="container clearfix">
            <Aside list={UserConfig.aside}/>
            <section className="main-right">
              <Nav linkList={navLinkList}/>
              <section className="main-right-form floatfix">
                <form >
                  <div className="form-group">
                    <label>用户名</label>
                    <input type="text" value="" disabled="disabled"/>
                  </div>
                  <div className="form-group">
                    <label>性别</label>
                    <div className="radio">
                      <label className="radio-inline">
                        <input type="radio" name="sex" checked/>
                        男
                      </label>
                      <label className="radio-inline">
                        <input type="radio" name="sex" />
                        女
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>学号</label>
                    <input type="text" id="studentNumber" value="" />
                  </div>
                  <div className="form-group">
                    <label>邮箱</label>
                    <input type="text"  id="readerEmail" value=""/>
                  </div>
                  <div className="form-group">
                    <label>手机</label>
                    <input type="text" id="readerPhone" value=""/>
                  </div>
                  <div className="form-group">
                    <label>厚朴组</label>
                    <div className="radio">
                      <label className="radio-inline">
                      <input type="radio" className="" name="hopeGroup" value="" />
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>专业</label>
                    <input type="text"  id="readerMajor" value=""/>
                  </div>
                  <div className="main-right-form-file form-group">
                    <label>头像</label>
                    <img src="" alt="" id="js-upload-img"/>
                      <input type="file" value="" id="js-upload-input"/>
                  </div>
                  <FormBtn/>
                </form>
            </section>
            </section>
          </div>
        </section>
        <Footer/>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(User);