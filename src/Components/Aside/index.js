import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  const list = props.map(item => {
    return (
      <li className="aside-list-item">
        <NavLink to={item.url} activeClassName='aside-list-item-active'>{item.text}</NavLink>
      </li>
    )
  });
  return (
    <ul className="aside">
      {list}
    </ul>
  )
}