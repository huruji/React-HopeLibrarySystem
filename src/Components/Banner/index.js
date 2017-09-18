import React from 'react';

export default (props) => {
  return (
    <section className="banner">
      <div className="container clearfix ">
        <div className="banner-avatar">
          <img src={props.userImg} alt=""/>
        </div>
        <div className="banner-word">
          <h2>{props.userName}，欢迎你</h2>
          <p>书卷多情思故人，晨昏忧乐每相亲。</p>
        </div>
      </div>
    </section>
  )
}