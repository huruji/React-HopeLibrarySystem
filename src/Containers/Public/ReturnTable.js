import React, { Component } from 'react';
import TableHead from './../../Components/TableList/TableHead';
import TableBody from './../../Components/TableList/TableBody';
import {get} from './../../utils/ajax';
import {userBorrowBook } from './../../api';
import UserConfig from './../../config/user';
import {connect} from 'react-redux';
import {transBorrowBook} from './../../utils/transData'

let headList = UserConfig.headList.user;
let text = '';
class ReturnTable extends Component{
  constructor(props) {
    super(props);
    this.state ={list: []};
  }

  componentDidMount() {
    const self = this;
    get(userBorrowBook).then(res=>{
      console.log('res', res);
      if(res.code === 401) {
        return self.props.logout();
      }
      console.log(res.data);
      self.setState({
        list: transBorrowBook(res.data)
      })
    })
  }

  render() {
    if(this.props.url.includes('reservation')) {
      headList = UserConfig.headList.reservation;
    }
    return (
      <section className="main-right-table">
        <table>
          <TableHead text={text} list={headList}/>
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