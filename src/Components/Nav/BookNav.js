import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import userConfig from './../../config/user'

class BookNav extends Component{
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }
  clickHandle(id, text) {
    this.props.navClick(id, text)
  }
  render () {
    const list = this.props.linkList.map((item, index) => {
      if(index === 0) {
        return (
          <li onClick={() => this.clickHandle(item.id, item.text)} className={this.props.activeNum===item.id ? "main-right-nav-list-item main-right-nav-list-item-active" : "main-right-nav-list-item"}  key={index}>
            <NavLink to={userConfig.bookNav.url}>{item.text}</NavLink>
          </li>
        )
      }
      return (
        <li onClick={() => this.clickHandle(item.id, item.text)} className={this.props.activeNum===item.id ? "main-right-nav-list-item main-right-nav-list-item-active" : "main-right-nav-list-item"}  key={index}>
          <a href="javascript:">{item.text}</a>
        </li>
      )
    });

    return (
      <nav className="main-right-nav">
        <ul className="main-right-nav-list clearfix ">
          {list}
        </ul>
      </nav>
    )
  }
}

export default BookNav;