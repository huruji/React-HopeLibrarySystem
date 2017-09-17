import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <section className="login-footer">
      <p>
                <span>技术支持
                <Link to="/user/login">◇</Link>
                <a href="http://ce.sysu.edu.cn/hope/">厚朴〖HOPE〗工作室</a>
                <Link to="/admin/login">◇</Link>
                </span>
        <span className="login-footer-dev">
                <a href="https://github.com/huruji/HopeLibrarySystem">联系开发</a>
                    <a href="https://github.com/huruji/HopeLibrarySystem" className="github"/>
                </span>
      </p>
    </section>
  )
}