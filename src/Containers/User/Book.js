import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './../../Components/Header/index';
import Footer from './../../Components/Footer/index';
import Banner from './../../Components/Banner/index';
import Nav from './../../Components/Nav/BookNav';
import Aside from './../../Components/Aside';
import UserConfig from './../../config/user';
import ResetPassword from './../Public/ResetPassword';

const navLinkList = UserConfig.nav.book;

class UserBook extends Component {
  constructor(props) {
    super(props);
    this.state = {activeNum: 0};
    console.log(props);
    this.navClick = this.navClick.bind(this);
  }
  navClick(id) {
    this.setState({
      activeNum: id
    })
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
              <Nav linkList={navLinkList} navClick={this.navClick} activeNum={this.state.activeNum}/>
              <ResetPassword  url={this.props.match.url}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(UserBook);