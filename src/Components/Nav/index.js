import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  const list = props.linkList.map((item) => {
    return (
      <li className="main-right-nav-list-item">
        <NavLink to={item.url} activeClassName="main-right-nav-list-item-active">{item.text}</NavLink>
      </li>
    )
  })
  return (
    <nav className="main-right-nav">
      <ul className="main-right-nav-list clearfix ">
        {list}
      </ul>
    </nav>
  )
}