import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  const list = props.list.map((item, index) => {
    return (
      <li className="aside-list-item" key={index}>
        <NavLink to={item.url} activeClassName='aside-list-item-active'>{item.text}</NavLink>
      </li>
    )
  });
  return (
    <aside className="aside">
      <ul className="aside-list">
        {list}
      </ul>
    </aside>
  )
}