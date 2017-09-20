import React, { Component } from 'react';
import TableHead from './../../Components/TableList/TableHead';
import TableBody from './../../Components/TableList/TableBody';
import {get} from './../../utils/ajax';
import {userBorrowBook, userReservationEquip } from './../../api';
import UserConfig from './../../config/user';
import {connect} from 'react-redux';
import {transBorrowBook, transReservationEquip} from './../../utils/transData'

let headList = UserConfig.headList.user;
let bookText = '你当前暂无借阅';
let equipText = '你当前暂无预约';
let text = bookText;
let url = userBorrowBook;
let transData = transBorrowBook;
class ReturnTable extends Component{
  constructor(props) {
    super(props);
    this.state ={list: [], text:'',url:props.url};
  }
  getData() {
    const self = this;
    get(url).then(res=>{
      if(res.code === 401) {
        return self.props.logout();
      }
      if(!res.data.length) {
        return self.setState({
          text: text
        })
      }
      self.setState({
        list: transData(res.data)
      })
    })
  }
  componentDidMount() {
    this.getData();
  }
  componentWillUpdate() {
    console.log('asfasdfsdfa');
  }
  componentDidUpdate(prevProps,prevState) {
    if(prevProps.url !== this.props.url) {
      this.getData();
      console.log('ppppp');
    }
  }
  render() {
    if(this.props.url.includes('reservation')) {
      console.log('reservation');
      [headList, text, url, transData] = [UserConfig.headList.reservation,equipText,userReservationEquip, transReservationEquip];
    } else if(/borrow/.test(this.props.url)) {
      [headList, text, url, transData] = [UserConfig.headList.user,bookText,userBorrowBook, transBorrowBook];
    }
    console.log('url',this.props.url);
    return (
      <section className="main-right-table">
        <table>
          <TableHead text={this.state.text} list={headList}/>
          <TableBody list={this.state.list}/>
        </table>
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

export default connect(mapStateToProps, mapDispathToProps)(ReturnTable);