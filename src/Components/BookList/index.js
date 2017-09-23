import React, {Component} from 'react';

export default (props) => {
  const list = props.list.map((item) => {
    if(item.disabled) {
      return (
        <li className="main-right-borrow-list-item">
          <div className="main-right-borrow-list-item-img">
            <img src={item.imgsrc} alt="" />
          </div>
          <div className="main-right-borrow-list-item-message">
            <h4>{item.name}</h4>
            <p>编号：{item.hopeid}</p>
            <button disabled="disabled">{item.borrowText}</button>
          </div>
        </li>
      )
    }
    return (
      <li className="main-right-borrow-list-item">
        <div className="main-right-borrow-list-item-img">
          <img src={item.imgsrc} alt="" />
        </div>
        <div className="main-right-borrow-list-item-message">
          <h4>{item.name}</h4>
          <p>编号：{item.hopeid}</p>
          <button className="js-borrow-btn">{item.borrowText}</button>
        </div>
      </li>
    )
  });
  return(
    <section className="main-right-borrow">
      <ul className="main-right-borrow-list clearfix">
        {list}
      </ul>
    </section>
  )
}
