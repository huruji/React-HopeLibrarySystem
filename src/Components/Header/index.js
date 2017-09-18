import React from 'react';

export default () => {
  return (
    <header className="header">
      <div className="container clearfix ">
        <div className="header-title">
          <h1>厚朴图书设备管理系统</h1>
        </div>
        <div className="header-right">
          <span className="header-right-index"><a href="#">网站首页</a></span>
          <span className="header-right-logout" id="js-logout"><a href="/logout">退出</a></span>
        </div>
      </div>
    </header>
  )
}