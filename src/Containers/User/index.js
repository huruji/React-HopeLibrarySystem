import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './../../Components/Header/index';
import Footer from './../../Components/Footer/index';
import Banner from './../../Components/Banner/index';
import Nav from './../../Components/Nav/index';
import TableList from './../../Components/TableList/index';
import Aside from './../../Components/Aside';
import UserConfig from './../../config/user'
import ReturnTable from './../Public/ReturnTable'
import {post} from './../../utils/ajax';
import { returnBook } from './../../api'
const navLinkList = UserConfig.nav.index;

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
              <section className="main-right-table">
                <ReturnTable url={this.props.match.url} />
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
    logout: () => {
      dispatch({type: 'LOGINOUT'})
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(User);